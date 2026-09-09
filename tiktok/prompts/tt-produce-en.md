# tt-produce-en — kein Prompt mehr hier

Der gültige Prompt für tt-produce-en (c8b9d3e7d092) steht ausschließlich in
`profiles/tiktok/cron/jobs.json`. Diese Datei war am 04.09.2026 eine veraltete
Kopie (ohne Ziel-Tags und Kalenderparität) und wurde deshalb zum Verweis.

Anzeigen: `python -X utf8 -c "import json;[print(j['prompt']) for j in json.load(open('profiles/tiktok/cron/jobs.json',encoding='utf-8')) if j['name']=='tt-produce-en']"`
Ändern: `hermes -p tiktok cron edit <id> --prompt "<text>"` (vorher Sicherung als `<name>-alt-<datum>.txt` hier ablegen, Nicht-Leere prüfen).

Sicherungen in diesem Ordner: `*-alt-YYYYMMDD.txt` (Stand vor der jeweiligen Änderung).
