# Facebook-Community-Ledger

Verbindliche Zustandsquelle für Radar-Kandidaten und Follow-ups. Der Radar
schreibt hier nur Beobachtungen; veröffentlicht wird ausschließlich von Eren.

Erlaubte Statuswerte:

- `suggested`: per Telegram vorgeschlagen, noch keine Rückmeldung von Eren
- `posted`: Eren hat die erste Antwort veröffentlicht
- `skipped`: Eren hat bewusst nicht geantwortet
- `followup-draft`: es gibt eine neue Reaktion und einen Entwurf für Eren
- `conversation`: mindestens ein Follow-up wurde von Eren veröffentlicht
- `closed`: nach zwei Prüfungen keine neue Reaktion oder Gespräch beendet
- `sensitive`: aus Sicherheitsgründen nicht beantworten

| ID | Entdeckt | Gruppe | Link | Sprache | Status | Letzte Aktion | Nächste Prüfung | Checks | Ergebnis |
|---|---|---|---|---|---|---|---|---:|---|
| FB-260901-01 | 2026-09-01 | Back pain, slipped disc, sciatica support group | https://www.facebook.com/groups/324544020215566/posts/1056554550347839/ | EN | suggested | Legacy-Kandidat gemeldet |  | 0 | Rückmeldung von Eren offen |
| FB-260902-01 | 2026-09-02 | Back Pain Tips | https://www.facebook.com/groups/447000443015896/posts/1732846897764571/ | EN | suggested | Antwortentwurf gemeldet |  | 0 | Rückmeldung von Eren offen |

## Regeln

- Ohne ausdrückliche Rückmeldung von Eren niemals `posted` annehmen.
- Bei `posted` die nächste Prüfung auf den ersten Radar-Lauf 24–48 Stunden
  später setzen.
- Nur `posted`, `followup-draft` und `conversation` dürfen erneut geöffnet
  werden. `suggested` wird nicht als tatsächliche Interaktion gewertet.
- Nach zwei ergebnislosen Prüfungen Status `closed` setzen.
- Den tatsächlich verwendeten Text und Reaktionen in
  `community-responses.md` dokumentieren, nicht in die Tabellenzelle quetschen.
