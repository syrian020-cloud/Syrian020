import json
import os
import re
import secrets
import tempfile
from pathlib import Path

from fastapi import FastAPI, Header, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse

DATA_DIR = Path(os.environ.get("DATA_DIR", "/data"))
MEDIA_DIR = DATA_DIR / "media"
LESSONS_FILE = DATA_DIR / "lessons.json"
ADMIN_KEY_FILE = DATA_DIR / "admin_key"

ALLOWED_ORIGINS = [
    "https://syrian020-cloud.github.io",
    "capacitor://localhost",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:8000",
]
ALLOWED_ORIGIN_REGEX = r"^https://.*\.devinapps\.com$|^http://(localhost|127\.0\.0\.1)(:\d+)?$"

MEDIA_ID_RE = re.compile(r"^[A-Za-z0-9_\-\.]{1,120}$")
MAX_MEDIA_BYTES = 500 * 1024 * 1024

app = FastAPI(title="Zeek backend")
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_origin_regex=ALLOWED_ORIGIN_REGEX,
    allow_methods=["GET", "PUT", "HEAD", "POST", "OPTIONS"],
    allow_headers=["X-Admin-Key", "Content-Type"],
)


@app.on_event("startup")
def init_storage() -> None:
    MEDIA_DIR.mkdir(parents=True, exist_ok=True)


def read_admin_key() -> str | None:
    try:
        key = ADMIN_KEY_FILE.read_text().strip()
        return key or None
    except FileNotFoundError:
        return None


def require_admin(x_admin_key: str | None) -> None:
    key = read_admin_key()
    if not key or not x_admin_key or not secrets.compare_digest(x_admin_key, key):
        raise HTTPException(status_code=401, detail="invalid admin key")


def read_lessons() -> dict:
    try:
        data = json.loads(LESSONS_FILE.read_text())
    except (FileNotFoundError, json.JSONDecodeError):
        return {"version": 0, "lessons": []}
    if not isinstance(data, dict) or not isinstance(data.get("lessons"), list):
        return {"version": 0, "lessons": []}
    return {"version": int(data.get("version", 0)), "lessons": data["lessons"]}


def write_lessons(payload: dict) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=DATA_DIR, prefix="lessons-", suffix=".tmp")
    with os.fdopen(fd, "w") as f:
        json.dump(payload, f, ensure_ascii=False)
    os.replace(tmp, LESSONS_FILE)


def media_paths(media_id: str) -> tuple[Path, Path]:
    if not MEDIA_ID_RE.match(media_id):
        raise HTTPException(status_code=400, detail="bad media id")
    return MEDIA_DIR / f"{media_id}.bin", MEDIA_DIR / f"{media_id}.mime"


@app.get("/api/health")
def health() -> dict:
    return {"ok": True}


@app.post("/api/admin/bootstrap")
def bootstrap() -> dict:
    """One-time admin key generation. Locks once a key exists."""
    if read_admin_key():
        raise HTTPException(status_code=403, detail="already bootstrapped")
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    key = secrets.token_urlsafe(24)
    ADMIN_KEY_FILE.write_text(key)
    ADMIN_KEY_FILE.chmod(0o600)
    return {"admin_key": key}


@app.get("/api/admin/verify")
def verify(x_admin_key: str | None = Header(default=None)) -> Response:
    require_admin(x_admin_key)
    return Response(status_code=204)


@app.get("/api/lessons")
def get_lessons() -> dict:
    return read_lessons()


@app.put("/api/lessons")
async def put_lessons(request: Request, x_admin_key: str | None = Header(default=None)) -> dict:
    require_admin(x_admin_key)
    body = await request.json()
    if not isinstance(body, dict) or not isinstance(body.get("lessons"), list):
        raise HTTPException(status_code=400, detail="expected {lessons: [...]}")
    current = read_lessons()
    payload = {"version": current["version"] + 1, "lessons": body["lessons"]}
    write_lessons(payload)
    return {"version": payload["version"]}


@app.head("/api/media/{media_id}")
@app.get("/api/media/{media_id}")
def get_media(media_id: str) -> Response:
    blob_path, mime_path = media_paths(media_id)
    if not blob_path.exists():
        raise HTTPException(status_code=404, detail="not found")
    mime = mime_path.read_text().strip() if mime_path.exists() else "application/octet-stream"
    return FileResponse(blob_path, media_type=mime, headers={"Cache-Control": "public, max-age=31536000, immutable"})


@app.put("/api/media/{media_id}")
async def put_media(media_id: str, request: Request, x_admin_key: str | None = Header(default=None)) -> dict:
    require_admin(x_admin_key)
    blob_path, mime_path = media_paths(media_id)
    size = 0
    fd, tmp = tempfile.mkstemp(dir=MEDIA_DIR, prefix="up-", suffix=".tmp")
    try:
        with os.fdopen(fd, "wb") as f:
            async for chunk in request.stream():
                size += len(chunk)
                if size > MAX_MEDIA_BYTES:
                    raise HTTPException(status_code=413, detail="media too large")
                f.write(chunk)
        os.replace(tmp, blob_path)
    except BaseException:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise
    mime = request.headers.get("content-type", "application/octet-stream").split(";")[0].strip()
    mime_path.write_text(mime or "application/octet-stream")
    return {"id": media_id, "size": size}
