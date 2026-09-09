# EXP-2026-001 — Movement Age Challenge

## Entscheidung

PREVIA wird für den ersten kontrollierten Growth-Sprint nicht als allgemeine
„KI-Bewegungsanalyse“ beworben, sondern mit einer einzigen merkfähigen Frage:

> How old does your body move?

Deutsch:

> Wie alt bewegt sich dein Körper?

Die Kampagne verbindet alle vorhandenen Kanäle mit demselben direkten,
attribuierten Einstieg. Sie ist kein neuer täglicher Content-Job.

## Warum dieser Angriff

- PREVIA besitzt einen unterscheidbaren Begriff: Movement Age.
- Die interne, nicht peer-reviewte Auswertung von 250+ früheren Assessments
  liefert den zugespitzten Einstieg: 7 von 10 bewegten sich laut PREVIA-Metrik
  älter als ihr chronologisches Alter, im Mittel um sieben Jahre.
- Der aktuelle 30-Tage-Funnel zeigt nur 4,2 % Teststarts, aber 72,7 % Completion
  unter Startern.
- Zwei bestehende Blogartikel erklären bereits Movement Intelligence und die
  250+-Auswertung. Ein dritter allgemeiner Artikel würde sie duplizieren.

## Claim-Grenze

Zulässig:

> In our internal evaluation of 250+ earlier assessments, 7 in 10 people moved
> older than their chronological age — by seven years on average.

Immer klarstellen: interne Auswertung, PREVIA-Produktmetrik, kein klinisches
Alter und keine Diagnose. Keine Heil- oder Genauigkeitsbehauptung.

## Eine Nutzerhandlung

Jeder Inhalt führt zu genau einer Handlung:

> Find your Movement Age with your phone.

Direkter Kampagnenpfad:

`/quick-test?utm_source=<kanal>&utm_campaign=movement_age_challenge_sep26&utm_content=<asset>`

Keine Links ohne UTM. Pro Asset eine stabile `utm_content`-Kennung, die auch im
jeweiligen Kanal-Log steht.

## Produkt-Gate vor öffentlichem Push

Vor Kampagnenstart lokal vorbereiten, testen und Eren als Diff vorlegen:

1. Hero-CTA messbar machen: `trackCTAClick()` ist aktuell ein No-op, obwohl die
   UI behauptet, dort zu tracken. Den bereits erlaubten Event
   `start_cta_clicked` verwenden.
2. Die Zeitangabe vereinheitlichen: Landingpage sagt fünf Minuten, Testintro
   ungefähr zwei Minuten. Bis zur Messung besser „in wenigen Minuten“.
3. Movement-Age-Share für alle Ergebnisse ermöglichen. Aktuell erscheint der
   Button nur bei positivem Altersdelta; auch jüngere/gleiche Ergebnisse haben
   hohen Share-Wert. Geteilte Links mit Referral-UTM versehen und erfolgreiche
   Shares als `share_clicked` messen.
4. Auth → Ergebnis technisch prüfen. Die aktuellen Werte 17 Auth-Abschlüsse,
   aber nur eine Ergebnis-Stage sind kein belastbarer Funnel.

Kein Push, Merge oder Deployment ohne Erens Freigabe.

## Launch-Sprint — 14 Tage

### Social-Kanäle

- TikTok DE/EN: pro Profil höchstens eines der zwei täglichen Videos aus dieser
  Kampagne; das zweite bleibt Format-/Themenexploration.
- Facebook persönlich: drei Founder-/Hilfsposts pro Woche mit echter Geschichte
  oder Beobachtung, nicht als Werbeanzeige geschrieben.
- PREVIA-Seite: die stärksten TikTok-Reels wiederverwenden, mit eigener UTM.
- Twitter: drei starke Originalposts über Produktmetrik, Daten und Founder-
  Learning; keine tägliche Linkschleuder.
- Reddit: höchstens zwei passende Communities, transparent als Founder,
  vollständiger Nutzwert im Post; keine automatisierten DMs oder Crosspost-
  Welle.
- Waitlist: zunächst eine zulässige Reaktivierungs-Kohorte von 50–100 Kontakten,
  nicht die ganze Liste; eine Mail, ein CTA, Antworten manuell auswerten.

### Hook-Bank

1. `Your birthday tells you how long you have lived. Not how old you move.`
2. `Your body has a second age. Most people never measure it.`
3. `7 in 10 people in our internal evaluation moved older than their age.`
4. `You track sleep, steps and heart rate. You probably never measure how your body moves.`
5. `If you sit all day, your calendar age is the least interesting number.`

Deutsch:

1. `Dein Geburtstag sagt, wie lange du lebst. Nicht, wie alt du dich bewegst.`
2. `Dein Körper hat ein zweites Alter. Fast niemand misst es.`
3. `7 von 10 bewegten sich in unserer internen Auswertung älter als sie waren.`
4. `Du misst Schlaf, Schritte und Puls. Aber nicht, wie dein Körper sich bewegt.`
5. `Wenn du den ganzen Tag sitzt, ist dein Alter im Ausweis nur die halbe Wahrheit.`

## Messplan

- **Primärmetrik:** `test_started / consent-measured campaign sessions`
- **Baseline:** 4,2 % über alle Produktionssessions der letzten 30 Tage
- **Entscheidungsfenster:** mindestens 100 consent-gemessene Kampagnensessions
  oder 14 Tage, je nachdem was später eintritt
- **Gewonnen:** mindestens 12 % Start-Rate
- **Inconclusive/Iteration:** 6–12 %
- **Verloren:** unter 6 %, sofern Tracking technisch gesund ist
- **Guardrail:** Test-Completion unter Startern mindestens 60 %
- **Sekundär:** Ergebnis, Paywall, Offer-Klick, Kauf, Share, Retest; bei kleinem n
  nur als Richtung, nicht als automatische Entscheidung

## Reihenfolge

1. Produkt-Gate als lokalen Diff vorbereiten.
2. Einen vollständigen Testlauf samt Events verifizieren.
3. Fünf Kampagnenassets für DE und EN produzieren.
4. Mit 50–100 Waitlist-Kontakten und je einem kontrollierten Kanalasset starten.
5. Nach 100 gemessenen Sessions entscheiden, nicht nach dem ersten viralen oder
   schwachen Video.
