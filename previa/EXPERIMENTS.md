# PREVIA Growth Experiments

Kanonisches Ledger für produkt- und kanalübergreifende Growth-Experimente.
Keine Rohdaten, Zugangsdaten oder personenbezogenen Informationen eintragen.
Historische Experimente werden nur mit verifizierter Quelle nachgetragen.

## Statuswerte

`planned` · `running` · `completed` · `stopped` · `inconclusive`

## Vorlage

### EXP-YYYY-NNN — Kurztitel

- **Status:** planned
- **Zeitraum:**
- **Owner/Kanäle:**
- **Beobachteter Engpass:**
- **Datenbasis:** Zeitraum, Grundgesamtheit, Eventdefinition, Messlücken
- **Hypothese:**
- **Zielgruppe:**
- **Eine veränderte Variable:**
- **Primärmetrik:**
- **Guardrails:**
- **Entscheidungsschwelle vor Start:**
- **Umsetzung/Artefakte:**
- **Ergebnis:**
- **Interpretation und Unsicherheit:**
- **Entscheidung/Nächster Schritt:**

## Laufende Experimente

### EXP-2026-001 — Movement Age Challenge

- **Status:** planned
- **Zeitraum:** 14 Tage ab freigegebenem Kampagnenstart; mindestens 100
  consent-gemessene Kampagnensessions
- **Owner/Kanäle:** `previa`; TikTok DE/EN, Facebook, Twitter, Reddit, Waitlist
- **Beobachteter Engpass:** 11 Teststarts aus 260 gemessenen Produktionssessions
  in 30 Tagen (4,2 %); nur 21 von 250 sichtbaren Sessions kampagnenattribuiert
- **Datenbasis:** `reports/2026-09-03-funnel-baseline.md`
- **Hypothese:** Eine einheitliche Movement-Age-Frage plus direkter,
  attribuierter Testlink steigert die Start-Rate auf mindestens 12 %.
- **Zielgruppe:** sitzende, gesundheits-/longevity-interessierte Erwachsene;
  keine akuten oder diagnostischen Versprechen
- **Eine veränderte Variable:** kampagnenweit einheitlicher Movement-Age-Einstieg
  statt unverbundener Kanalbotschaften
- **Primärmetrik:** Teststarts / consent-gemessene Kampagnensessions
- **Guardrails:** mindestens 60 % Completion unter Startern; Claims bleiben als
  interne PREVIA-Metrik gekennzeichnet
- **Entscheidungsschwelle vor Start:** gewonnen ab 12 %, iterieren bei 6–12 %,
  verloren unter 6 %, jeweils erst bei gesundem Tracking und Mindestvolumen
- **Umsetzung/Artefakte:** `briefs/MOVEMENT_AGE_CHALLENGE.md`; Produkt-Gate
  lokal implementiert: Hero-CTA-Event, einheitliches 5-Minuten-Versprechen,
  Result-Share mit Referral-UTM und `share_clicked`, zentrales
  `results_page`-Tracking im produktiven Report. TypeScript, Vite-Build,
  Prerender-Validierung und mobile Screenshots grün.
- **Ergebnis:** ausstehend
- **Interpretation und Unsicherheit:** ausstehend
- **Entscheidung/Nächster Schritt:** Produkt-Diff reviewen/deployen, danach den
  14-Tage-Lauf mit eindeutigem UTM-Assetplan starten; bis dahin `planned`

## Abgeschlossene Experimente

Noch keine verifiziert importiert.
