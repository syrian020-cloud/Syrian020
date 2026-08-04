import json
path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']') + 1
data = json.loads(text[start:end])

for d in data:
    if d["fr"].strip().lower() == "à bas":
        d["ar"] = "يسقط / لا لـ / إلى الأسفل"
        d["en"] = "Down with"
        d["level"] = "A1"
        d["contexts"] = ["daily"]
        d["ex"] = {
            "fr": "À bas le racisme !",
            "ar": "يسقط التمييز العنصري!",
            "en": "Down with racism!"
        }
        # keep usage if any, not relevant
        d.pop("usage", None)
        print("Updated:", d["fr"])
        break

with open(path, "w", encoding="utf-8") as f:
    f.write("/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
print("Done.")
