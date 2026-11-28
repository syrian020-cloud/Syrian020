import re, json, os
src = "/home/ubuntu/.devin-files/devin-remote-overflows-1000/b04a0468/content.txt"
with open(src, "r", encoding="utf-8") as f:
    text = f.read()

# Extract the rich_content array JSON
def extract_rich_content(s):
    # The dump contains "rich_content": [ ... ]
    # We locate the array and parse it.
    start_marker = '"rich_content":'
    start = s.find(start_marker)
    if start == -1:
        return []
    arr_start = s.find('[', start)
    # find matching bracket by counting
    depth = 0
    arr_end = -1
    in_string = False
    escape = False
    for i in range(arr_start, len(s)):
        c = s[i]
        if in_string:
            if escape:
                escape = False
                continue
            if c == '\\':
                escape = True
                continue
            if c == '"':
                in_string = False
            continue
        if c == '"':
            in_string = True
            continue
        if c == '[':
            depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                arr_end = i + 1
                break
    if arr_end == -1:
        return []
    arr_json = s[arr_start:arr_end]
    return json.loads(arr_json)

rich = extract_rich_content(text)
lines = [item.get("text", "") for item in rich if isinstance(item, dict)]
raw = "".join(lines)
out = "/tmp/a_phrases.txt"
with open(out, "w", encoding="utf-8") as f:
    f.write(raw)
print("Extracted", len(raw), "chars to", out)
print("Preview:", raw[:200])
