# PREVIA Cockpit — State

Stand: 03.09.2026

## Zweck

- Zentrales Profil für Produkt, Growth, Analytics und Experimente
- Produkt-Repo: `C:\Users\Eren\physio\posedetection`
- Produktregeln: `C:\Users\Eren\physio\posedetection\CLAUDE.md`
- Wissen und Claims: `../knowledge/`
- Experiment-Ledger: `EXPERIMENTS.md`

## Aktueller Zustand

- Hermes-Profil `previa` angelegt; Arbeitsordner ist dieser Ordner.
- Produkt-Repo ist als externe technische Quelle referenziert, nicht kopiert.
- Supabase-MCP ist projektgebunden, `read_only=true` und auf Datenbank/
  Debugging begrenzt; OAuth und Tool-Discovery mit sechs Tools sind verifiziert.
- Keine Cron-Jobs: erst den manuellen Ablauf und die Metrikdefinitionen prüfen.
- Kein eigener Telegram-Bot konfiguriert; CLI-Nutzung ist bis dahin möglich.
- Multiplex-Gateway läuft wieder und tickt alle fünf Profile einschließlich
  `previa`; die drei bestehenden Telegram-Bots wurden danach verifiziert.

## Aktuelle Priorität

`EXP-2026-001 Movement Age Challenge`: zuerst das Produkt-/Tracking-Gate aus
`briefs/MOVEMENT_AGE_CHALLENGE.md` lokal vorbereiten, danach kontrollierter
14-Tage-Push mit einheitlicher Attribution.

## Offene Setup-Punkte

- Produkt-Gate aus `briefs/MOVEMENT_AGE_CHALLENGE.md` als lokalen Diff bauen
  und den End-to-End-Eventpfad prüfen.
- Bei gewünschter Telegram-Nutzung eigenen Bot-Token und Pairing einrichten.
- Erst nach einem manuellen Wochenreview über einen Cron-Job entscheiden.
