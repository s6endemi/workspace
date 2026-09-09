# Gemeinsamer Zustand TikTok — von allen Jobs gelesen

> Klein halten (Ziel: unter 50 Zeilen). Historie gehört in `videos-log.md`.

## Stand

- **DE-Spur:** `tt-produce` (13:00–19:30, Tagesgate) — 2 Shorts nach dem 12-Uhr-Mess-/Lernfenster auf @previahealth_de über Port 9223: Video 1 sofort (~13:40), Video 2 per TikTok-Planen 15:30 (seit 04.09.), Freigabe 03.09.
- **EN-Spur:** `tt-produce-en` (20:00–22:30, Tagesgate) — 2 Shorts auf @previahealth über Port 9222: Video 1 sofort (~20:40), Video 2 per TikTok-Planen 21:30 (seit 04.09.), Freigabe 26.08.
- **Produktions-Notebook (seit 05.09., Nr. 2):** https://notebook.google.com/notebook/3b517586-d32a-4440-b50f-78d95c01495e
  (Nr. 1 mit 81 Quellen bleibt als Archiv: https://notebook.google.com/notebook/14b865e3-707e-48b5-9f35-0966e07e2fe4; ab ~70 Quellen flackert die Quellenwahl, dann rotieren)
- **NotebookLM-Limit:** ~20 Videoübersichten je rollende 24 h (05.09. 11:16 gesperrt nach 21 Generierungen seit 04.09. 14:59). Batch + Tests zusammen planen, Details im Skill `notebooklm-video`
- **TikTok-Logins:** Port 9222 = @previahealth; Port 9223 = @previahealth_de; beide am 03.09. per Preflight verifiziert

## Bewiesene Hits (manuelle Phase, als Recycling-Quelle)

| Thema | Views |
|---|---|
| Verlorene Kunst des Gehens | 70k |
| Du atmest falsch | 52k |
| Ischias-Nerv | 40k (116 Kommentare — Rekord-Engagement) |
| Schlafindustrie | 27k |
| Jedes Kind kann tief hocken | 14k |
| Körper wird steif | 11k |
| Unterer Rücken | 10k |

**Flops (unter 500 Views):** reine Anthropologie-Frames ohne Schmerz-Anker,
abstrakte Hooks ohne sofortiges Symptom, Baby-Haltung ohne Fix.

## Laufende Beobachtungen

Maximal 10 Einträge; kommt einer dazu, fliegt der älteste.

- Symptom-First schlägt Anthropologie-First (Kern-Erkenntnis der manuellen Phase)
- Look seit 04.09. per Stil-Anker fixiert (Papier-Sticker, fester Protagonist); ohne Anker würfelt NotebookLM den Stil, ohne Szenenliste entstehen Texttafeln
- Quellenwahl verifiziert 26.08.: erste Liste togglen → arrow_back → Button zeigt „1 Quelle"
- Headless braucht --window-size=1920,1080 (sonst Mobile-Layout) — steht im Chrome-Startskript
- Short-Format (9:16) seit 02.09. Ende-zu-Ende verifiziert; Laufzeit bisher etwa 1:08–1:13
- Kontosicherer Headless-Upload: `tiktok_publish.py` stoppt vor Upload, wenn Port und erwarteter Handle nicht zusammenpassen
- `tt-metrics` sammelt täglich 12:00 ohne LLM rohe Studio-Daten; der externe
  Fundament-/Creative-Review läuft montags ab 11:15 mit Auffangfenstern;
  `tt-learn` entscheidet mittwochs 12:15 anhand reifer Vergleichskohorten
