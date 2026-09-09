# PREVIA Funnel Baseline — 03.09.2026

Quelle: projektgebundener Supabase-MCP, `read_only=true`; Queries aus
`C:\Users\Eren\physio\posedetection\docs\analytics\SAFE_FUNNEL_QUERIES.sql`.
Nur aggregierte Resultate, keine IDs oder personenbezogenen Daten.

## Letzte 30 Tage

| Stufe | Anzahl | Rate |
|---|---:|---:|
| Consent-gemessene Sessions | 260 | — |
| Test gestartet | 11 | 4,2 % der Sessions |
| Test abgeschlossen | 8 | 72,7 % der Starter |
| Auth-Wall erreicht | 8 | 100 % der Completer |
| Auth abgeschlossen | 17 | nicht sequenziell interpretierbar |
| Ergebnis-Stage erreicht | 1 | 0,4 % der Sessions |
| Paywall gemessen | 2 | 0,8 % der Sessions |
| Offer-Klick | 0 | — |
| Checkout-Ledger/Kauf | 0 / 0 | — |

Sichtbare Quellen mit mindestens fünf Sessions:

| Source / Campaign | Sessions | Starts | Completes | Result | Paywall |
|---|---:|---:|---:|---:|---:|
| `previa.health` / none | 170 | 6 | 4 | 1 | 0 |
| `previahealth.de` / none | 59 | 2 | 1 | 0 | 1 |
| `waitlist` / `movementage_jul26` | 13 | 2 | 3 | 0 | 1 |
| `reddit` / `sideproject_glootie` | 8 | 0 | 0 | 0 | 0 |

229 von 250 sichtbaren Sessions besitzen keine Kampagnenattribution. Social-
Output kann daher aktuell nicht zuverlässig gegen PREVIA-Ergebnisse optimiert
werden.

## Historischer Kauf- und Retest-Kontext

- 365 Tage: 9 Checkout-Ledger-Zeilen, 4 abgeschlossen, 5 offen.
- Retained Revenue laut Ledger: 56 Euro; keine Refund-Zeile.
- 19-Euro-Arm: 2 von 7 abgeschlossen; 9-Euro-Arm: 2 von 2. Sehr kleine
  Stichproben, keine Preisentscheidung daraus ableiten.
- 180 Tage: 101 Nutzer mit erstem gespeichertem Ergebnis; 14 mit mindestens
  einem Retest (13,9 %), davon 10 innerhalb von sieben Tagen.
- 97 verknüpfte Nutzer mit consent-gemessener Session; 23 an mindestens zwei
  UTC-Tagen aktiv (23,7 %).

## Interpretation

1. Der größte sichtbare Engpass liegt vor dem eigentlichen Teststart: nur 4,2 %
   der consent-gemessenen Sessions starten.
2. Wer startet, zeigt mit 72,7 % Completion ein deutlich stärkeres Signal.
3. Auth- und Ergebniszahlen sind nicht als sequenzieller Funnel belastbar:
   `auth_completed` liegt über Starts/Completes, während nur eine Ergebnis-Stage
   sichtbar ist.
4. Das Produkt hat mit Retests ein reales Wiederkehrsignal; die aktuelle
   Distribution und Attribution nutzen es nicht.
5. Mehr unattribuierten Traffic einzukaufen würde den Lerngewinn kaum erhöhen.

## Messgrenzen

- Browser-Analytics sind consent-gated und unterschätzen insbesondere
  nicht-einwilligende Besucher.
- Ledgerzahlen sind nicht consent-gated und nicht direkt durch dieselbe
  Sessionfolge teilbar.
- Sessions sind Browser-Tab-Sessions, keine eindeutigen Personen.
- Kleine Source-Gruppen unter fünf Sessions wurden unterdrückt.
- Historische Stage-Races und fehlende explizite Retest-/Return-Events bleiben
  bestehen.
