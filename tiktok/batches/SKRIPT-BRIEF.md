# Skript-Brief für die Batch-Produktion (DE-Spur) — Stand 04.09.2026

Dieser Brief ist die einzige Anweisung, die ein Skript-Autor (Sonnet, `claude -p`,
Subagent oder Mensch) braucht. Doktrin-Quelle: `workspace/tiktok/AGENTS.md`;
bei Widerspruch gilt AGENTS.md. Ergebnis je Video ist ein Ordner:

    batches/<batch>/<nn>-<slug>/source.txt        Quellskript, ENGLISCH, erste Zeile = Titel
    batches/<batch>/<nn>-<slug>/short-prompt.txt  DEUTSCH, genau 2 Absätze (siehe unten)
    batches/<batch>/<nn>-<slug>/caption.txt       DEUTSCH, Caption + Leerzeile + 5 Hashtags

Kein Stil im Short-Prompt: den Stil-Anker (Papier-Sticker-Charakter) stellt `gen_video.py`
selbst voran. Kein Markdown in den drei Dateien. UTF-8.

## Das Video (60–80 s, Sprecher deutsch, Quelle englisch 250–320 Wörter)

Reihenfolge der Beats, verbindlich:

1. **Hook (0–2 s)**, eine Familie wählen:
   - `concealment-reveal`: „Das wurde dir über X nie erklärt." / „Dir wurde gesagt, Y. Genau das ist zu kurz gedacht."
   - `save-help-delay`: „Wenn du X hast, speichere dir dieses Video. Gleich zeige ich dir die drei …"
2. **Hook-Verstärker (2–4 s)**, optional und nur, wenn er sich natürlich anhört: „Du wusstest das
   nicht? Dann hör jetzt ganz genau zu." Nie auf Krampf; ein ruhiges „Bleib kurz dran, das geht
   schnell" ist besser als ein aufgeblasener Befehl (Erens Korrektur 05.09.).
3. **Enthüllung (4–15 s)**: EINE Mechanik, EINE physische Metapher, und zwar **in der Quelle
   selbst als Szene mit dem Zuschauer drin**: „Picture yourself standing at a door whose hinge
   is rusty …". NotebookLM plant die Bilder aus der Erzählung, nicht aus der Szenenliste; die
   Szenenliste hilft nur, wenn die Erzählung dieselbe Szene zeigt (Befund 05.09., Batch 1: die
   Szenenliste war überall korrekt, drei Videos scheiterten trotzdem an der Erzählung).
   Gelungen: Türscharnier, Kleiderbügel, Taschenmesser, Sofa-Sumpf, jeweils der Protagonist
   MIT einem Haushaltsgegenstand. Gescheitert und deshalb verboten:
   - Objekt ohne Person („Picture a bowling ball on an outstretched arm", „a garden hose with a
     kink", „three people carrying a sofa") → Icon auf leerer Fläche oder Kastendiagramm.
   - Metaphern, die den Protagonisten verwandeln (Eisstatue, Roboter, Skelett, Schatten) →
     Strichfigur oder Silhouette.
   - Anatomie-Wörter in der Erzählung (nerve, socket, base of the skull, named muscles, „twice
     as heavy") → anatomische Schnittzeichnung statt Charakter, besonders bei Kopf und Nacken.
   - Ketten und Reihenfolgen („from the neck down, joint by joint") → beschriftetes Diagramm.
   - Versprechen wie „part two comes tomorrow" → steht am Ende als Texttafel im Video.
   Die Mechanik in einem Satz nennen, dann sofort die Szene mit „Picture yourself …".
   Befund Batch 3 (08.09.): Erzählungen, die zwei Körperteile VERGLEICHEN oder eine Übertragung
   von A nach B erklären („Hüfte schickt die Arbeit ans Knie“, „Schrittlänge verrät das Alter“)
   werden auch mit korrekter Szene zu Balken- und Gelenk-Diagrammen. Solche Themen brauchen eine
   Szene, in der die Übertragung als Handlung an einem Ort passiert (Nachbar oben lässt die
   Badewanne überlaufen) UND eine Steigerung ohne Körperteil-Aufzählung; sonst Thema tauschen.
   Befund Batch 2 (06.09., 12 von 17 bestanden): Die Szene muss den Charakter an einem ORT
   etwas TUN lassen (Campingstuhl aus dem Kofferraum zerren, Tür aufdrücken, im Zelt liegen,
   im Stau sitzen, am Strand gehen). „Etwas in der Hand halten" (Gummiband, Gießkanne) oder
   ein Gerät als Vergleich (Kran, Waage) kippt wieder ins Diagramm. Kopf- und Nacken-Themen
   verlieren den Charakter zweimal in Folge (Schnittzeichnung, schwarzer Blob): vorerst
   meiden oder die Szene ganz ohne Kopf-Fokus bauen (Charakter von hinten am Schreibtisch).
4. **Previa kurz (15–25 s)**: ein Halbsatz mit Markenname, z. B. „Previa Health zeigt dir in
   einem kurzen Test, ob genau das bei dir passiert." (Variante B: diesen Satz weglassen und
   Previa erst nach Schritt drei bringen — im Ordnernamen mit `-b` kennzeichnen.)
5. **Kaskade (25–45 s)**: 3–4 hyperkonkrete Alltagssymptome (Socken anziehen, Blindspot im
   Auto, Schlange an der Kasse). Darin 1–2 **Watchtime-Anker**: „Vor allem Nummer drei gleich,
   die kennt fast niemand." Nie leerer Aufschub.
6. **Fix (45–70 s)**: drei Schritte mit Zeit oder Wiederholungszahl, kein Workout-Ton.
   Nach Schritt zwei, vor Schritt drei: der **Follow-Satz wie von einem echten Menschen**, locker,
   mit Grund, nie aufgeblasen: „Folg mir gern, da kommen noch mehr solche Tricks." oder „Wenn du
   mehr davon willst, folg Previa Health." Nicht: „damit du das nächste Körpersignal nicht
   verpasst" als Formel. Nach Schritt drei: **„Mit Previa Health kannst du das in rund zwei
   Minuten am Handy selbst testen, kostenlos, ohne App."**
7. **Absolution (Schluss)**: Nichts ist kaputt, etwas drückt, niemand hat es dir gesagt.

## Variante K: Körperwissen wie Kurzgesagt (Erens Vorgabe 07.09., ab Batch 3 DE)

Nicht mehr „Symptom, drei Fixes, zweimal Previa", sondern ein Wissens-Explainer mit TikTok-Teasing.
Reihenfolge, verbindlich:

1. **Hook (0–3 s)**, teasend, neugierig, nie Clickbait ohne Einlösung: „Dein Körper macht gerade
   etwas, das du nie bemerkst." / „Du bist morgens einen Zentimeter größer als abends, und der
   Grund verändert, wie du sitzt." Kein „Du wusstest das nicht?"-Befehl.
2. **Enthüllung (3–15 s)**: EIN faszinierender Mechanismus, erzählt als Szene, in der der Zuschauer
   an einem ORT etwas TUT („Picture yourself …", Beat-3-Regeln gelten unverändert: kein Objekt ohne
   Person, keine Anatomie-Wörter, keine Verwandlung, keine Ketten, keine Kopf-Themen).
3. **Steigerung (15–40 s)**: zwei bis drei überraschende Folgen im Alltag, mit Watchtime-Anker
   („und das Verrückteste kommt gleich"). Zahlen nur, wenn sie sicher und rund sind.
4. **Payoff (40–55 s)**: was man damit anfängt, zwei kurze Dinge, kein Workout-Ton. Der natürliche
   Follow-Satz hier („Folg mir gern, da kommt noch mehr davon").
5. **Schluss (55–65 s)**: ein Satz Absolution, dann GENAU EINMAL Previa: „Wie das bei dir aussieht,
   siehst du mit Previa Health in rund zwei Minuten am Handy, kostenlos, ohne App." Kein Previa
   nach der Enthüllung, kein Previa in der Mitte.

Themen: großes Körperwissen mit Bewegungs- und Longevity-Bezug (Bandscheiben, Sehnen als Federn,
Muskelkater, Knochen als Konto, Gang als Altersmarker, Faszie, Schmerz als Alarm), keine Ernährung,
keine Diagnosen, keine Sterblichkeits- oder Studienbehauptungen. Ordnername ohne Suffix; die
Szenenliste im Short-Prompt hat statt „1.–3. Schritt" die Beats: 1) Hook-Szene 2) Metapher-Szene
3) Folge 1 4) Folge 2 5) Payoff mit Winken und Folgen-Symbol 6) Absolution 7) Handy mit „Previa
Health", Überschrift „2 Minuten, kostenlos". `batch_check` verlangt weiter: „Previa Health" in der
Quelle, Follow-Satz, „two minutes".

## Format-Palette (Erens Vorgabe 07.09., ab Batch 4 in jedem Batch mischen)

Jeder Batch verteilt seine Videos gleichmäßig auf diese Formate; das Format steht als Suffix im
Ordnernamen (`-f1` … `-f5`) und wandert so ins Videos-Log, damit die Metriken später Formate
vergleichen können. Inhaltlich gelten weiter Variante K und die Beat-3-Regeln.

- **F1 Story-Charakter:** „Das ist Jonas. Jonas hat ein Problem: Jedes Mal, wenn er aufwacht, …"
  Der Sticker-Mann bekommt einen Namen und wird zur wiederkehrenden Figur; der Zuschauer sieht
  sich in ihm. Erzählt in der dritten Person bis zur Enthüllung, dann Wechsel zum Du: „Und wenn
  dir das bekannt vorkommt …". (Name ist ein Vorschlag, Eren kann ihn tauschen; einmal gewählt,
  bleibt er in jedem Video gleich.)
- **F2 Direktansprache mit Versprechen:** Eine Person gezielt ansprechen und sofort das Versprechen
  geben: „Wenn du nach dem Aufstehen erst mal krumm läufst, dann hör kurz zu. Ich erkläre dir
  jetzt drei Dinge, die du sofort dagegen tun kannst." Struktur wie save-help-delay, die drei
  Dinge sind das Rückgrat, Nummer drei ist die überraschende.
- **F3 Kontraintuitiv:** Das Gegenteil dessen behaupten, was jeder denkt, und es einlösen:
  „Dehnen macht dich nicht beweglicher." / „Dein Rücken ist nicht schwach." / „Das Sofa ist das
  Problem, nicht der Bürostuhl." Hook = die Umkehrung, Enthüllung = der echte Mechanismus.
- **F4 Enthüllung:** „Das wurde dir über X nie erklärt." (bisheriges concealment-reveal).
  **Befund Batch 5 (10.09.) für F3:** Zwei von drei kontraintuitiven Skripten (Schwimmen, Sixpack) wurden
  zu reinen Pfeil- und Diagrammvideos, weil die Quelle die Mechanik ERKLÄRT statt sie als Handlung zu
  zeigen. F3 braucht nach dem Umkehr-Hook sofort eine Szene, in der der Protagonist die Wahrheit am
  eigenen Leib erlebt (er tut etwas, und es passiert etwas), keine Gegenüberstellung zweier Dinge.
  Und: NotebookLM lehnt manche Quellen mit „Video-Zusammenfassung konnte nicht erstellt werden“ ab
  (Batch 5: enge Schuhe, aus dem Bett; Auslöser unklar, vermutlich Wortmaterial wie „wrecked“,
  „hardest“, Schmerz-Häufung). `batch_produce` erkennt das seit 11.09. und wartet nicht mehr.
- **F5 Wissens-Explainer:** Variante K pur, Neugier statt Problem: „Du bist morgens einen
  Zentimeter größer als abends."

Gemeinsam für alle: eine physische Szene mit dem Protagonisten an einem Ort, Watchtime-Anker vor
dem besten Teil, natürlicher Follow-Satz im Payoff, Previa genau einmal am Schluss.

## Harte Grenzen

- Keine Diagnosen, keine Heilversprechen („heilt", „kuriert" → „lässt nach", „verändert sich").
- Kein Arzt-Disclaimer, kein „lass das abklären". Konservativ heißt: keine riskanten Übungen.
- Anatomisch plausibel, nur echte Mechanismen. Empörung nur gegen Industrien und Objekte
  (Format A), nie gegen Ärzte, Physios, Personen. Keine Ernährungs-/Diätthemen.
- Markenname immer **„Previa Health"**, nie „Previa Scan". Erlaubt: „in rund zwei Minuten
  testen", Handykamera, kostenlos, ohne App. Nicht erlaubt: „Ergebnis in zwei Minuten".
- Keine Gedankenstriche (—) in Caption und Prompt. Keine Fitness-Sprache („Hack", „3 easy moves").
- Thema = großes Alltagskörper-Mysterium (Rücken, Nacken, Hüfte, Knie, Atmen, Gehen, Hocke,
  Sitzen, Schlafhaltung), hyperkonkret sind die Symptome, nicht das Thema. Test (AGENTS.md):
  Würde das Thema als Frage ein ganzes Video tragen? „Warum krampft die Wade nachts?" ja,
  „Ellenbogen nach der Maus" nein (Mikro-Nische, am 05.09. aus Batch 2 gestrichen).

## short-prompt.txt, genau so

Absatz 1: `TikTok für goal=<reach|audience-growth|community>, natürliche deutsche Du-Ansprache,
kurz, zugespitzt, unterhaltsam. Beginne gesprochen exakt: „<Hook + Verstärker wörtlich>“ Halte
die Auflösung 1–2 Sekunden offen, dann die <Metapher>-Mechanik. Previa Health kurz nach der
Auflösung und ausführlich nach Schritt drei. Der Follow-Satz kommt nach Schritt zwei.
Markenname immer „Previa Health“.`

Absatz 2: `SZENEN in dieser Reihenfolge, in jeder der Protagonist als kompletter
Sticker-Charakter (graues Shirt, orange Shorts): 1) <Hook-Szene mit Schmerzblitz> 2) <Metapher
als Szene mit Beschriftung> 3) Er hält das Handy, auf dem Bildschirm steht „Previa Health“, an
<Stellen> leuchten orange Punkte. 4) <Schritt 1>; Überschrift „1. <Name> <Zeit>“. 5) <Schritt 2>;
Überschrift „2. …“; dann winkt er freundlich in die Kamera, daneben ein kleines Folgen-Symbol mit „Previa Health“. 6) <Schritt 3>;
Überschrift „3. …“. 7) Er hält lächelnd das Handy mit „Previa Health“ hoch; Überschrift
„2 Minuten, kostenlos“.`

Gesamtlänge short-prompt.txt: 1.300–1.800 Zeichen. Der Hook-Satz in Absatz 1 steht in
„…“-Anführungszeichen, in der SPRACHE DES VIDEOS (DE-Spur: deutsch, auch wenn die Quelle englisch
ist). Die Zuordnung Artefakt → Skript läuft über den bei NotebookLM gespeicherten Prompt, der Hook
muss also nicht in source.txt stehen (Missverständnis Batch 3, 07.09.).

## caption.txt

Deutsch, 200–500 Zeichen, natürlich, fasst die Kern-Erkenntnis zusammen, nennt Previa Health
mit Nutzen, endet mit einer variierten Save-/Kommentar-Aufforderung. Leerzeile, dann 5
Nischen-Hashtags (nie #fyp #viral #foryou), `#PreviaHealth` als letzter.

## Notebook-Hygiene

Ab etwa 70 Quellen flackert die Quellenwahl in NotebookLM (Nachtlauf 05.09.: zwei von zwölf
Items scheiterten daran). Dann ein neues Produktionsnotebook anlegen, URL in `STATE.md` und in der
`NOTEBOOK`-Konstante von `batch_produce.py` / `batch_collect.py` eintragen. Alte Artefakte bleiben
im alten Notebook erreichbar. Stand 05.09.: Notebook Nr. 2 (3b517586…) ist Standard in
`batch_produce.py`/`batch_collect.py`; ein anderes Notebook per Umgebungsvariable `NLM_NOTEBOOK_URL`.
Neues Notebook anlegen: `new_notebook.py` (gibt die URL aus).

Tageslimit: etwa 20 Videoübersichten je rollende 24 Stunden (gemessen 05.09.). Ein Batch
von 12 plus Tests reicht dafür; mehr an einem Tag scheitert mit `TAGESLIMIT` im Report,
die offenen Items holt später `batch_collect.py` bzw. ein erneuter `batch_produce.py`-Lauf
(bereits produzierte Items überspringt er nicht automatisch: vorher aus dem Batch-Ordner in
einen Unterordner `fertig/` verschieben oder nur die offenen Ordner in einen neuen Batch legen).

## Dedup

Vor dem Schreiben die letzten 30 Zeilen von `workspace/tiktok/videos-log.md` lesen: kein Thema
der letzten 14 Tage wiederholen (Ausnahme Hit-Recycling mit neuem Hook, im Ordnernamen `-recycle`).

## Vollautomatisch: Reaktor (seit 05.09.)

`reaktor.py` fährt einen fertigen Batch-Ordner ohne Menschen bis zum Planen: Chrome prüfen,
`batch_check`, `batch_produce` in Wellen mit Limit-Schleife (bei `TAGESLIMIT` 30 min warten,
`--resume`, bis `--deadline`), `batch_collect`, `trim_outro`, `gate.py` (Heuristik + `claude -p`-
Urteil, FAIL-Videos werden nicht geplant), `batch_publish --go`, Bericht `reaktor-report.md` und
Telegram (`--telegram`, über `hermes -p tiktok send`). Zustand in `reaktor-state.json`, Log in
`reaktor.log`; ein zweiter Aufruf setzt fort. Start über die Windows-Aufgabenplanung, weil
Hintergrundprozesse des Chats mit der Sitzung sterben:

    Wrapper anpassen: notebooklm-video/scripts/reaktor-nacht.cmd (Batch, Prefix, Slots)
    schtasks //Create //F //TN PreviaReaktor //SC ONCE //SD TT/MM/JJJJ //ST 00:05 //TR "<Wrapper>"
    schtasks //Create //F //TN PreviaReaktorWachhund //SC ONCE //SD TT/MM/JJJJ //ST 11:00 //TR "<Wrapper>"

Vorher: `reaktor.py … --dry-run` (Chrome, Check, Deadline). Geplante Fehlversuche ersetzen:
`tiktok_unschedule.py --port 9223 --when "6. Sept., 13:15" --caption "<Anfang>" --go`, dann den
Eintrag aus `out/.scheduled.json` nehmen; der nächste Reaktor füllt den freien Slot.

## Cross-Posting auf Facebook und Instagram (seit 07.09.)

Meta Graph API statt Browser: `profiles/facebook/skills/meta_publish.py` (setup, fb-reel, ig-reel,
queue) und `meta_crosspost.py` (liest das TikTok-Ledger und plant jedes Video mit derselben Zeit als
Facebook-Reel; mit `--platforms fb,ig` zusaetzlich in die Instagram-Warteschlange, die ein Task alle
30 min mit `meta_publish.py queue run` abarbeitet, weil Instagram per API nicht vorplanen kann).
Der Reaktor ruft es mit `--crosspost fb` nach dem TikTok-Planen auf (DE-Wrapper gesetzt). Zugang in
`profiles/facebook/.env` (META_APP_ID/SECRET, META_LONG_TOKEN 60 Tage, je Sprache META_PAGE_ID_DE,
META_PAGE_TOKEN_DE ohne Ablauf, META_IG_ID_DE). Token erneuern: Graph API Explorer, Konfiguration
"Previa Publisher", Nutzer-Token, dann `meta_publish.py setup`. Ledger `out/.meta-scheduled.json`.

## Cross-Posting auf YouTube Shorts (seit 07.09.)

Ohne API (Quota 6 Uploads/Tag, ungeprueft = privat): `youtube-upload/scripts/yt_publish.py` steuert
YouTube Studio im Agenten-Chrome (Login liegt im Profil; headless braucht eine normale Browser-Kennung,
das setzt das Skript selbst). `yt_crosspost.py` liest das TikTok-Ledger und plant jedes Video mit
derselben Zeit als Short; Kanaele in `channels.json` (de: UCbrbq2P6g0qhjWTs3uRRKTQ, en: noch leer).
Der Reaktor ruft es mit `--crosspost fb,ig,yt` auf. Grenzen: 15-Minuten-Raster, Titel = erster Satz
der Caption (max. 100 Zeichen), Termin mindestens 20 min voraus. Ledger `out/.yt-scheduled.json`.
Login erneuern: `scripts/start-agent-chrome-de.ps1 -Visible`, anmelden, dann Chrome-Prozesse 9223
beenden und das Skript ohne Flag starten (es startet eine laufende sichtbare Instanz nicht neu).

## EN-Spur (@previahealth, Port 9222)

Gleiche Kette, drei Unterschiede: `--lang Englisch` (Anker `visual_anchor_en.txt`, gleicher
Charakter), eigenes NotebookLM-Notebook über `NLM_NOTEBOOK_URL` (sonst doppelte Quellen, die
Zuordnung scheitert an „2 Quellen“), Slots 14:00, 19:00, 21:00, 23:00 (Erens Vorgabe 06.09.: US-Ostküste 8, 13,
15, 17 Uhr). Wrapper `reaktor-en.cmd`/`.vbs`, Tasks PreviaReaktorEN und PreviaReaktorENWachhund.
short-prompt.txt auf Englisch, gleiche Struktur: Absatz 1 beginnt mit `TikTok for goal=…`, der Hook
steht in geraden Anführungszeichen und wörtlich in source.txt; Absatz 2 beginnt mit `SCENES in
this order` (batch_check akzeptiert SZENEN und SCENES). caption.txt englisch, fünf englische
Nischen-Hashtags, `#PreviaHealth` zuletzt. Bewährte DE-Skripte dürfen für EN wiederverwendet
werden (anderes Publikum): Quelle ist ohnehin englisch, nur Prompt und Caption neu; Batch
`2026-09-06-en` ist so entstanden (18 PASS-Skripte aus Batch 1 und 2).

## Ablauf danach (kein LLM)

    PY=C:\Users\Eren\agents\hermes-agent\venv\Scripts\python.exe
    S=C:\Users\Eren\agents\profiles\tiktok\skills\creative\notebooklm-video\scripts
    %PY% %S%\batch_produce.py C:\Users\Eren\agents\workspace\tiktok\batches\<batch> --lang Deutsch --parallel 3 --prefix <YYYY-MM-DD-de>

Wurde der Lauf unterbrochen (PC zu, Sitzung beendet) oder sind Artefakte erst später fertig:
`batch_collect.py <batch_dir> --prefix <YYYY-MM-DD-de>` ordnet vorhandene Artefakte zu und lädt nur,
was in `out/` fehlt; beliebig oft ausführbar, fügt keine Quellen ein, startet nichts.

Ergebnis: `out/<prefix>-<nn>-<slug>.mp4` + `.txt`, Bögen in `batches/<batch>/sheets/`,
`report.md`. Dann das NotebookLM-Outro abschneiden (weiße Endkarte, ~3 s; Erkennung über die
Bildhelligkeit, Originale nach `out/original/`, Vorschau mit `--dry-run`):

    %PY% %S%/trim_outro.py --all C:/Users/Eren/agents/workspace/tiktok/out --prefix <YYYY-MM-DD-de>

Bögen ansehen (Regel in CLAUDE.md), Ausreißer mit `--skip` ausnehmen, dann den ganzen
Batch auf Tagesslots verteilen (Vorschau ohne `--go`, echt mit `--go`, nur nach Erens Go):

    %PY% C:/Users/Eren/agents/profiles/tiktok/skills/social-media/tiktok-upload/scripts/batch_publish.py --prefix <YYYY-MM-DD-de> --port 9223 --account previahealth_de --start <YYYY-MM-DD> --slots 09:30,13:15,16:30,19:30 --batch <batch_dir> --go

Schreibt je Video die Zeile in `videos-log.md` und merkt Verteiltes in `out/.scheduled.json`
(mehrfach aufrufbar, TikTok plant maximal 10 Tage voraus). Einzelvideo veröffentlichen oder planen:

    %PY% C:\Users\Eren\agents\profiles\tiktok\skills\social-media\tiktok-upload\scripts\tiktok_publish.py <mp4> <txt> --port 9223 --account previahealth_de --schedule 15:30 --schedule-date <YYYY-MM-DD>

Je Video eine Zeile in `videos-log.md` (Datum, Titel, Thema, Format/Hook/Goal, Status).
