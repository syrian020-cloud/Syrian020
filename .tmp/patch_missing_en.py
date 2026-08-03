import json, re
path = "/home/ubuntu/repos/Syrian020/data/vocab.js"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()
start = text.find('[')
end = text.rfind(']') + 1
data = json.loads(text[start:end])

missing_en = {
    "À jour de ses droits": "I want to check if my rights are up to date.",
    "À titre exceptionnel": "I am requesting assistance exceptionally.",
    "À titre informatif": "This message is sent for information only.",
    "À votre demande": "At your request, we have modified the file.",
    "À réception de": "Payment will be made upon receipt of the documents.",
    "À défaut de paiement": "In case of non-payment, fees will be applied."
}

for d in data:
    fr = d.get("fr", "")
    if fr in missing_en and d.get("ex") and not d["ex"].get("en"):
        d["ex"]["en"] = missing_en[fr]

with open(path, "w", encoding="utf-8") as f:
    f.write("/* French vocabulary for daily life in France — starter dataset with matched trilingual examples. */\nwindow.VOCAB_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")

print("Patched missing English examples.")
