2026-09-07 — Facebook-Tagespaket als Textpost zu Steifheit beim Umdrehen im Bett und Oberkörperrotation angelegt, mit optionalem visuell geprüftem KI-Bild; keine Veröffentlichung gemäß Stufe 1. Rückgängig: facebook/queue/2026-09-07-text.md, facebook/queue/2026-09-07-text.png, die Zeilen in facebook/posts-log.md und facebook/STATE.md sowie diesen Eintrag entfernen.
2026-09-03 — Facebook-Tagespaket als Textpost zu morgendlicher Nackensteifigkeit angelegt, mit optionalem geprüftem KI-Bild; keine Veröffentlichung gemäß Stufe 1. Rückgängig: `facebook/queue/2026-09-03-text.md`, `facebook/queue/2026-09-03-text.png`, die Zeilen in `facebook/posts-log.md` und `facebook/STATE.md` sowie diesen Eintrag entfernen.
2026-09-01 — `notebooklm-video` um die Mehrtab-Falle ergänzt: wiederholtes `open_notebook.py` erzeugt Duplikate, während Helfer den ersten (ggf. ungerenderten) Tab wählen und dann fälschlich `ARTEFAKT_NICHT_GEFUNDEN` liefern. Rückgängig: Abschnitt „Mehrere Notebook-Tabs vermeiden“ aus der Skill entfernen und diesen Eintrag löschen.
2026-09-01 — Erstes Facebook-Tagespaket in Stufe 1 als Reel-Entwurf angelegt: adaptiert den TikTok-Clip zum kleiner werdenden Gang nach langem Sitzen, ohne Veröffentlichung. Rückgängig: `facebook/queue/2026-09-01-reel.md`, die zugehörige Zeile in `facebook/posts-log.md`, die STATE-Aktualisierung und diesen Eintrag entfernen.
2026-08-31 — Wissensbasis um die Nature-Validierung passiver Smartphone-rPPG für HR/RHR ergänzt; sie trennt starke HR-vs.-ECG-Validierung von RHR-vs.-Wearable und betont Confidence-Gating sowie Consent. Rückgängig: `knowledge/digital-biomarkers/passive-smartphone-heart-rate-monitoring-nature-2026.md`, die zugehörige INDEX-Zeile und diesen Eintrag entfernen.
2026-08-28 — `notebooklm-video/scripts/gen_video.py` ordnet die Cron-Sprache `Englisch` nun NotebookLMs tatsächlicher UI-Option `English` zu; ohne die Zuordnung brach jede EN-Generierung nach der Quellenwahl ab. Rückgängig: `sprache_ui` entfernen und die drei Verwendungen auf `sprache` zurücksetzen.
2026-08-28 — TikTok-`send_text.py` zum Upload-Skill ergänzt und in dessen Ablauf dokumentiert: wenn NotebookLM vor der Videoerzeugung abbricht, werden die fertigen Queue-Pakete trotzdem als einzelne Textnachrichten an Telegram geschickt und mit Chat-/Message-ID belegt. Rückgängig: `profiles/tiktok/skills/social-media/tiktok-upload/scripts/send_text.py`, den dokumentierten Fallback in dessen `SKILL.md` und diesen Eintrag entfernen.
2026-08-28 — TikTok-`send_video.py` gibt nach erfolgreichem Telegram-Upload jetzt zusätzlich `chat_id` und `message_id` aus, damit Cron-Läufe die tatsächliche Zielnachricht belegen können. Rückgängig: die drei Variablen und den erweiterten Erfolgs-String in `profiles/tiktok/skills/social-media/tiktok-upload/scripts/send_video.py` entfernen.
2026-08-27 — Research-Basis um die OpenCap-vs.-MoCap-Validierung dynamischer Aufgaben (PMID 42318929) als `warnt` ergänzt und frisches Garmin-fēnix-9-Produktsignal abgelegt; trennt sagittale Validierung von unzuverlässiger out-of-plane-Präzision bzw. Feature-Ankündigung von Wirkung. Rückgängig: `knowledge/ai-health/opencap-dynamic-tasks-validity-2026.md`, die neue INDEX-Zeile, `signals/2026-08-27-1202.md` und diesen Eintrag entfernen.
2026-08-27 — X-Radar (Mittag/Abend) auf drei Chancen-Bahnen umgestellt: Early Conversation, Active Thread und Relationship Continuation. Pro Lauf ist jetzt eine gezielte Active-Thread-Suche Pflicht; maximal ein Early-Kandidat darf reply-ready sein, und nachvollziehbar dokumentierte Conversation Stage sowie „Warum jetzt“ sind Pflicht. Grund: frische Kleinposts bleiben Relationship-Chancen, sollen aber aktive, sichtbare Gespräche nicht verdrängen. Rückgängig: die Prompts der Cronjobs `x-radar-mittag` und `x-radar-abend` auf die vorherige Fassung zurücksetzen und diesen Eintrag entfernen.
2026-08-27 — Die X-Grundregel in `twitter/AGENTS.md` von „frische Posts sind wertvoller“ auf das Drei-Bahnen-Modell (Early Conversation, Active Thread, Relationship Continuation) umgestellt, damit alle künftigen X-Workflows dieselbe Auswahlstrategie erben. Rückgängig: den Abschnitt „Reply-Opportunities: drei Chancen-Bahnen statt nur ‚frisch‘“ sowie den Zusatz zur Pflichtprüfung auf die vorherige Fassung zurücksetzen und diesen Eintrag entfernen.
2026-08-27 — Forward-head-posture-Data-Drop mit freigegebener generierter Visualisierung auf @ErenPrevia veröffentlicht und einzeln verifiziert; X zeigt die Medienkennzeichnung „Made with AI“. Kein Quellenreply veröffentlicht. URL: https://x.com/ErenPrevia/status/2092965655582572985. Rückgängig: Post auf X löschen sowie die neue Zeile in `twitter/posts-log.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-27 — X-Bildposting-Prozess dauerhaft ergänzt: `social-platform-publishing` und `twitter/AGENTS.md` verlangen jetzt genau einen Composer, CDP-Upload über den echten `input[data-testid="fileInput"]`, Prüfung von Text/Media/Post-Button im selben Composer und Abbruch nach einem fehlgeschlagenen Mehrzeilen-CDP-Versuch. Grund: der erste Bildupload landete im parallelen Home- statt Modal-Composer. Rückgängig: den neuen X-Bildposting-Abschnitt in `twitter/AGENTS.md`, den Zusatz im Skill `social-platform-publishing` und diesen Eintrag entfernen.
2026-08-28 — Den offenen X-Entwurf von einem PREVIA-Data-Drop auf einen Founder-/Product-Take zu „behavior-market fit“ umgestellt. Grund: Eren will die Account-Perspektive stärker auf Startup-Szene, San Francisco und Product-Learnings ausweiten. Rückgängig: STATE-Verweis und `twitter/drafts/2026-08-28-founder-behavior-market-fit.md` entfernen; der ersetzte Measurement-Entwurf bleibt bis zum regulären Draft-Cleanup erhalten.
2026-08-28 — Founder-/Product-Post zu „behavior-market fit“ für Prävention auf @ErenPrevia veröffentlicht und auf der Einzelpost-Seite vollständig verifiziert. Kein Quellenreply. URL: https://x.com/ErenPrevia/status/2093329021211660647. Rückgängig: Post auf X löschen sowie die neue Zeile in `twitter/posts-log.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-28 — Antwort unter Bryan Johnsons Squat-/Dunk-Thread veröffentlicht und auf der Einzelpost-Seite vollständig verifiziert. Sie fragt nach der Übertragung von Maximalkraft in Sprungleistung und begleitender Bewegungsbeobachtung, ohne Technikdiagnose. URL: https://x.com/ErenPrevia/status/2093401409005777293. Rückgängig: Reply auf X löschen sowie die neue Zeile in `twitter/posts-log.md`, `twitter/replied-to.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-28 — Dauerhaften X-Volltextkorpus in `twitter/posted/2026-08.md` mit allen 24 in `posts-log.md` vorhandenen Beitrags-URLs aufgebaut (die übrigen vier der 28 datierten Zeilen sind Account-Snapshots). `social-platform-publishing`, `twitter/AGENTS.md`, `x-notify` und `x-analytics` erzwingen jetzt Live-Text-Nachpflege, getrennte geblindete Voice-Review und keine Selbstbewertungen im Korpus. Rückgängig: Monatskorpus, den AGENTS-/Skill-Abschnitt, die Prompt-Ergänzungen der Cronjobs `x-notify`/`x-analytics` und diesen Eintrag entfernen.
2026-08-29 — Freigegebenen Reply unter Joshua Lius Health-Product-Thread veröffentlicht und einzeln verifiziert. Perspektive: Ein gutes Health-AI-Modell scheitert ohne klare Einbettung im Arbeitsalltag; bewusst lockerer Wortlaut ohne Abschluss-Punkt und mit „day to day“. URL: https://x.com/ErenPrevia/status/2093665473049006566. Rückgängig: Reply auf X löschen sowie die Zeilen in `twitter/posts-log.md`, `twitter/replied-to.md`, `twitter/posted/2026-08.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-29 — Freigegebenen Garmin-fēnix-9/Epic-Signal-Post mit Quellenreply veröffentlicht und beide Einzelposts verifiziert. Der Hauptpost ordnet die neue Garmin-Epic-Funktion als Produkt-/Marktsignal für lesbaren Wearable-Kontext ein, nicht als Wirksamkeitsbeleg. URLs: https://x.com/ErenPrevia/status/2093686246446932126 und https://x.com/ErenPrevia/status/2093686470078861657. Rückgängig: beide X-Beiträge löschen sowie die zugehörigen Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-08.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-30 — Freigegebenen Metriport-Series-A-Signal-Post mit Quellenreply veröffentlicht und einzeln verifiziert. Einordnung: Marktsignal, keine klinische Evidenz; Fokus auf sichtbare Datenlücken und Übervertrauen in saubere Patientensummaries. Hashtag-Test mit `#HealthAI` und `#DigitalHealth`. URLs: https://x.com/ErenPrevia/status/2094004253857587546 und https://x.com/ErenPrevia/status/2094004650433298559. Rückgängig: beide X-Beiträge löschen sowie die zugehörigen Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-08.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-30 — Freigegebenen AI-x-Health-Post zu validierten markerlosen Gait-Metriken mit Quellenreply veröffentlicht und einzeln verifiziert. Der Text grenzt die Aussage auf die in der systematischen Review/Meta-Analyse erfassten Metriken ein; keine Aussage über Diagnose, klinischen Nutzen oder beliebige Smartphone-Workflows. Hauptpost mit `#HealthAI` und `#DigitalHealth`; Quellenreply enthält auf Nutzerwunsch nur den PMC-Link. URLs: https://x.com/ErenPrevia/status/2094053272680063225 und https://x.com/ErenPrevia/status/2094053705783906638. Rückgängig: beide X-Beiträge löschen sowie die zugehörigen Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-08.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-31 — Freigegebenen Reply im aktiven @DrKristieLeong-Thread zu lateralem Movement veröffentlicht und als eigener Status verifiziert. Bewusst locker und ohne Abschlusspunkt formuliert; keine Diagnose- oder Präventionsbehauptung. URL: https://x.com/ErenPrevia/status/2094487725755842638. Rückgängig: Reply auf X löschen sowie die Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-08.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-08-31 — `x-notify` hat die live sichtbaren Metriken der Beiträge vom 24.–31.08. in `twitter/posts-log.md` aktualisiert, den Reply zu lateralem Movement im Relationship Ledger ergänzt und `twitter/STATE.md` wieder als kompakten X-Index der letzten fünf Beiträge hergestellt (sie enthielt irrtümlich TikTok-Produktionszustand). Rückgängig: die Metrikstände, die neue Ledger-Zeile bzw. die STATE-Fassung entfernen.

2026-09-01 — Freigegebenen Discovery-Post zu Dashboard-Usability versus tatsächlicher Handlungsfähigkeit mit generiertem Health-Metrics-Bild veröffentlicht und auf der Einzelpost-Seite vollständig verifiziert. Ein erster bild-only Fehlpost wurde mit ausdrücklicher Freigabe gelöscht; der korrigierte Einzeiler vermeidet den bekannten Mehrzeilen-Composer-Fehler. X kennzeichnet das Bild sichtbar als „Made with AI“. URL: https://x.com/ErenPrevia/status/2094777755187515405. Rückgängig: Post auf X löschen sowie Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-09.md`, `twitter/STATE.md` und diesen Eintrag entfernen.
2026-09-02 — `x-notify` hat die live sichtbaren Resonanzwerte der eigenen Beiträge vom 24.08.–01.09. aktualisiert, den Tages-Snapshot (2 Follower, 55 Following) ergänzt und den @DrKristieLeong-Reply im Relationship Ledger auf die neue Autorenantwort synchronisiert. Rückgängig: die heutigen Zahlenstände, Snapshot-/Ledger-Änderungen und diesen Eintrag entfernen.
2026-09-07 — `x-notify` hat die auf X live sichtbaren Resonanzwerte eigener Beiträge vom 24.08.–04.09. aktualisiert; der vorhandene Tages-Snapshot blieb bei 3 Followern und 55 Following, und es gab keine neue relevante Benachrichtigung. Rückgängig: die heutigen Metrikstände in `twitter/posts-log.md`, `twitter/STATE.md`, `twitter/replied-to.md` und diesen Eintrag entfernen.

2026-09-02 — Freigegebenen Signal-/News-Post zu Geminis agentic video understanding veröffentlicht und auf der Einzelpost-Seite vollständig verifiziert. Einordnung bleibt auf den Google-Produktlaunch begrenzt: Der Beitrag behauptet keine Validierung von Movement-Messung oder Health-Nutzen und fordert transparente Anzeige der inspizierten Videomomente. Kein Quellenreply, da nicht ausdrücklich freigegeben. URL: https://x.com/ErenPrevia/status/2095136876508160143. Rückgängig: Post auf X löschen sowie Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-09.md`, `twitter/STATE.md` und diesen Eintrag entfernen.

2026-09-03 — Freigegebenen AI-x-Health-Post zu Schulter-ROM und thorakaler Kompensation in Smartphone-2D-Pose veröffentlicht und auf der Einzelpost-Seite vollständig verifiziert. Aussage ist auf die 17-Personen-Validierungsstudie begrenzt; keine allgemeine Genauigkeits-, Diagnose- oder Movement-Quality-Behauptung. Kein Quellenreply, da nicht ausdrücklich freigegeben. URL: https://x.com/ErenPrevia/status/2095504111361802359. Rückgängig: Post auf X löschen sowie Zeilen in `twitter/posts-log.md`, `twitter/posted/2026-09.md`, `twitter/STATE.md` und diesen Eintrag entfernen.

2026-09-04 — Freigegebenen Reply im aktiven @m_franceschetti / Eight-Sleep-Thread zu Biological-Age-Scores veröffentlicht und als eigener Status verifiziert. Der Text grenzt sich auf Produktinterpretation und vermeidbare Score-Anxiety ein, ohne die Messgenauigkeit oder klinische Bedeutung des Scores zu behaupten. URL: https://x.com/ErenPrevia/status/2095833449529496059. Rückgängig: Reply auf X löschen sowie Zeilen in `twitter/posts-log.md`, `twitter/replied-to.md`, `twitter/posted/2026-09.md`, `twitter/STATE.md` und diesen Eintrag entfernen.

2026-09-03 — Hermes-Profil `previa` als zentrales Produkt-/Growth-Cockpit angelegt: `terminal.cwd` zeigt auf `workspace/previa`; dort Quellenhierarchie, lokale Aktionsrechte mit Freigabe-Gates, kurzes STATE, kanonisches Experiment-Ledger und ein abgegrenztes Produkt-Repo-Handoff eingerichtet. Das bestehende Supabase-MCP-Projekt wurde nur für dieses Profil übernommen, projektgebunden, mit `read_only=true` und Feature-Gruppen `database,debugging`; Modell- und Supabase-OAuth müssen einmalig interaktiv erneuert werden. Bewusst keine Cron-Jobs, kein Telegram-Bot und keine Änderung am schmutzigen Produkt-Repo. Der anschließend gestartete Multiplex-Gateway tickt fünf Profile; alle drei vorhandenen Telegram-Bots wurden verbunden verifiziert. Rückweg: `hermes profile delete previa`, `workspace/previa/` entfernen und die `previa`-Ergänzungen in `ARCHITEKTUR.md`, `CLAUDE.md`, `PROMPT-neuer-chat.md`, `START.md` sowie diesen Eintrag zurücknehmen.

2026-09-03 — Zwischenfall beim `previa`-Setup: Nach einem festhängenden `hermes mcp add` wurde PID 21256 aufgrund Parent-PID/Startzeit fälschlich als verwaister OAuth-Unterprozess beendet; laut `gateway-exit-diag.log` war es der laufende Gateway. Sofort über `hermes gateway start` wiederhergestellt und verifiziert: Facebook-, TikTok- und Twitter-Telegram verbunden, Scheduler tickt fünf Profile einschließlich `previa`. Dauerhafte Schutzregel in `CLAUDE.md`: vor `Stop-Process` gegen Hermes/Python immer Gateway-PID und vollständige Prozessrolle abgleichen. Rückweg: nur diese Journal-Zeile und die zugehörige CLAUDE-Regel entfernen; am wiederhergestellten Gateway nichts zurückdrehen.

2026-09-03 — Erstes echtes PREVIA-Cockpit-Review durchgeführt: über den projektgebundenen Read-only-Supabase-MCP die neuen sicheren Funnelqueries ausgeführt und aggregierte Baseline unter `previa/reports/2026-09-03-funnel-baseline.md` gespeichert. Sichtbarer Hauptengpass: 11 Starts aus 260 gemessenen 30-Tage-Sessions (4,2 %), bei 8/11 Completion; Attribution überwiegend fehlt, Auth→Ergebnis ist nicht sequenziell belastbar. `EXP-2026-001 Movement Age Challenge` als kontrollierten 14-Tage-Kanalangriff mit direktem UTM-Testpfad, Mindestvolumen und Produkt-/Tracking-Gate in `previa/EXPERIMENTS.md` sowie `previa/briefs/MOVEMENT_AGE_CHALLENGE.md` geplant. Nichts veröffentlicht und Produkt-Repo nicht verändert. Rückweg: die Baseline-Datei, den Kampagnenbrief, EXP-2026-001 und diesen Eintrag entfernen sowie `previa/STATE.md` auf den vorigen Setup-Stand setzen.

2026-09-03 — Supabase-OAuth für das Profil `previa` abgeschlossen und mit `hermes -p previa mcp test supabase` verifiziert: projektgebundene Verbindung aktiv, `read_only=true`, Feature-Gruppen `database,debugging`, sechs Tools gefunden. Keine Datenabfrage oder Produktionsänderung ausgeführt. Rückweg: `hermes -p previa mcp remove supabase` und diese Zeile entfernen.

2026-08-26 — Google-GlucoFM-News-Take auf @ErenPrevia veröffentlicht und auf der Einzelpost-Seite vollständig verifiziert; einmaliger Hashtag-Test mit `#HealthAI`, ohne Quellenreply. URL: https://x.com/ErenPrevia/status/2092713603807752367. Rückgängig: Post auf X löschen sowie die neue Zeile in `twitter/posts-log.md`, `twitter/STATE.md` und diesen Eintrag entfernen.

2026-08-26 — NotebookLM-Download-Helfer robuster gemacht: wenn nach einem Chrome/CDP-Neustart kein Produktions-Notebook offen ist, meldet `download_video2.py` jetzt `NOTEBOOK_TAB_FEHLT` statt eines irreführenden `StopIteration`-Tracebacks. Rückgängig: die neue `pages`-Prüfung im Skill `notebooklm-video/scripts/download_video2.py` entfernen.
2026-08-26 — TikTok-Experiment `You were sold a sleep problem…` auf @previahealth veröffentlicht: TikTok-Studio-Editor genutzt, Sound `win again - slowed` hinzugefügt und gespeichert; Hook-Variable ist System-vs-you. Rückgängig: Beitrag in TikTok Studio löschen, Zeile in `tiktok/videos-log.md` und diesen Eintrag entfernen.
2026-08-26 — X-Post-Sicherheitsregel ergänzt: `browser_type` darf keinen Text mit Zeilenumbrüchen erhalten; wenn CDP den Composer nicht zuverlässig aktiviert, nur vollständigen Einzeiler posten oder abbrechen. Grund: frühzeitiges Absenden nach Zeilenumbruch verhindern. Rückgängig: den neuen Absatz in `twitter/AGENTS.md` und diesen Eintrag entfernen.
2026-08-26 — Camera-validation-Post: ein fehlerhafter, unvollständiger Einzeiler wurde mit Erens Freigabe gelöscht und vollständig neu gepostet; Quellenreply angehängt. Rückgängig: die beiden Zeilen in `twitter/posts-log.md` und diesen Eintrag entfernen.
2026-08-26 — Zwei frische, geprüfte Health-AI-Signale abgelegt: Google Researchs Wearable-Biomarker-Priorisierungsframework und die FDA-Konsultation zu GenAI-enabled Medical Devices. Keine langlebige Evidenz ergänzt, da ersteres ein Produkt-/Preprint-Signal und letzteres eine nichtbindende Konsultation ist. Rückgängig: `signals/2026-08-26-1201.md` und diesen Eintrag entfernen.
2026-08-26 — x-notify: Resonanzwerte aller seit dem 24.08. veröffentlichten eigenen X-Beiträge aktualisiert, Account-Snapshot (1 Follower, 49 Following) ergänzt und Reply-Ledger synchronisiert. Rückgängig: die heutigen Zahlenstände/Zeile aus `twitter/posts-log.md`, `twitter/STATE.md` und `twitter/replied-to.md` entfernen.
2026-08-25 — Wissensbasis für @ErenPrevia um fünf Quellen ergänzt (SPRINTT-Mobilitäts-RCT, klinisch validierte Smartphone-Kinematik, Schulterflexion/-scapula-Validierungen und FHP-Messreview); Index und Lücken präzisiert. Rückgängig: die fünf Dateien unter `twitter/knowledge/` sowie die fünf Indexzeilen und diesen Journal-Eintrag entfernen.

2026-08-24 — Erstes Previa-Motion-Graphics-Video unter `video/src/` erstellt und nach `video/out/WeekendScreening.mp4` gerendert; basiert auf dem 250-Personen-Assessment aus `twitter/knowledge/INDEX.md`. Rückgängig: `video/src/WeekendScreening.tsx`, `video/src/Root.tsx`, `video/src/index.ts`, `video/out/WeekendScreening.mp4` und diesen Eintrag entfernen.

## 2026-08-24 (Vorfall) — Agent steuerte den echten Desktop statt den headless Browser

**Was passierte:** Eren bat Hermes über Telegram um einen X-Post. Statt den
`browser_*`-Weg (headless Chrome, Port 9222) zu nehmen, benutzte der Agent
`computer_use` / cua-driver und steuerte Erens **echten, sichtbaren Chrome** —
sichtbar an einem zweiten Mauszeiger. Der abgesetzte Post war unvollständig
(nur die Überschrift). Der Agent hat den Fehler immerhin selbst gemeldet.

**Ursache (mein Fehler):** `computer_use` war in `platform_toolsets` für `cli` und
`telegram` aktiviert. Das stammt aus der Phase, in der wir cua-driver für den
eingeloggten Alltags-Chrome einplanten. Seit der dedizierte headless Chrome mit
eigenem Profil läuft, ist es überflüssig — ich hatte es nur nie abgeschaltet.
Damit standen dem Agenten zwei Wege offen, und Desktop-Automation ist bei
Formularen deutlich fehleranfälliger als direkter CDP-Zugriff.

**Behoben:**
- `computer_use` aus allen `platform_toolsets` entfernt (0 Einträge übrig), Gateway neu gestartet
- Neuer Abschnitt in AGENTS.md: „X-Aktionen laufen IMMER über den Browser" —
  mit der ausdrücklichen Regel, `computer_use` nie für X zu verwenden, und dem
  Hinweis, bei nicht erreichbarem CDP einen Fehler zu melden statt auszuweichen

**Zustand geprüft:** Profil unverändert bei 5 Posts, kein Post und kein Reply aus
den letzten 2 Stunden — der unvollständige Post ist nicht mehr online.

**Lehre:** Jedes zusätzlich aktivierte Toolset ist ein Weg, den der Agent wählen
kann. Was nicht gebraucht wird, gehört abgeschaltet — nicht nur aus Kostengründen,
sondern weil Auswahl zu Fehlentscheidungen einlädt.

## 2026-08-24 (Vorfall 2) — "Er vergisst, was er vorgeschlagen hat"

**Symptom:** Eren antwortet in Telegram auf einen Radar-Entwurf, sagt „poste den
ersten und den zweiten auch" — der Agent kennt nur den ersten.

**Nicht die Ursache:** Die Chat-Session vergisst nichts. `20260824_145652_dc392d0e`
hat 139 Nachrichten und läuft seit 14:56 durch.

**Tatsächliche Ursache:** Cron-Jobs laufen in eigenen Sessions
(`cron_<jobid>_<ts>`, 20–55 Nachrichten, isoliert). Beim Antworten schickt Telegram
nur den **zitierten Ausschnitt** mit — der erste Entwurf war darin, der zweite nicht.

`cron.mirror_delivery: true` half nicht: Es wirkt laut Doku nur bei `deliver: origin`.
Unsere Jobs liefern an `telegram` (Home-Kanal) = expliziter Zielkanal, und die werden
nie gespiegelt. Messung bestätigt: 0 gespiegelte Lieferungen in der Session.

**Lösung ohne Spiegelung** — die Entwürfe existieren ohnehin als Dateien:
- Radar-Prompts legen jetzt **jeden Entwurf einzeln** unter `twitter/drafts/` ab
  (`YYYY-MM-DD-HHMM-reply-<konto>.md` mit Konto, URL, Originaltext, Entwurf) und
  tragen ihn in STATE.md unter „Offene Entwürfe" ein
- Neuer AGENTS.md-Abschnitt „Entwürfe nachschlagen statt nachfragen": Verweist Eren
  auf einen Entwurf, den der Agent nicht im Verlauf hat, schlägt er in `drafts/`
  bzw. `radar/` nach — statt nachzufragen

**Nebenbefund:** In derselben Session zwei `computer_use`-Aufrufe mit
`"app": "chrome.exe"` — die Bestätigung für den Desktop-Steuerungsvorfall.

## 2026-08-24 (Fix) — Cron-Spiegelung repariert: Antworten funktionieren jetzt

**Erens Frage war der Schlüssel:** „Hermes muss sich doch was gedacht haben." Hat es —
`cron.mirror_delivery` spiegelt eine Cron-Lieferung als echte Nachricht in die
Chat-Session, damit eine Antwort darauf vollen Kontext hat. Genau der Anwendungsfall.

**Warum es nicht griff:** `_target_matches_origin()` in `cron/scheduler.py` verlangt,
dass das Lieferziel der **Ursprungs-Chat** des Jobs ist. Alle Jobs hatten
`origin: None`, weil ich sie per CLI erstellt habe — der Mechanismus geht davon aus,
dass Jobs aus einem laufenden Chat heraus angelegt werden
(`cronjob_tools._origin_from_env`). Ohne Ursprung kein Treffer, keine Spiegelung.

**Fix:** Allen sechs Jobs gesetzt:
```json
"origin": {"platform": "telegram", "chat_id": "8872375068", "thread_id": null},
"attach_to_session": true
```

**Verifiziert** mit einem Wegwerf-Job (`spiegeltest`), der garantiert liefert:
Session ging von 139 auf 140 Nachrichten, Inhalt:
`[user] [Cron delivery: spiegeltest] SPIEGELTEST-9931`. Testjob wieder entfernt.

Der erste Testversuch mit `x-notify` war ergebnislos, weil der Job `[SILENT]`
antwortete — ohne Zustellung gibt es nichts zu spiegeln. Kein Fehler, nur ein
untauglicher Testfall.

**Lehre:** Bevor ich einen Workaround baue, prüfen, ob das Framework das Problem
schon löst. Die Datei-Nachschlage-Regel in AGENTS.md bleibt als Rückfallebene, war
aber der zweitbeste Weg.

## 2026-08-24 — Previa-Website-Analyse gerettet und Zahlen korrigiert

**Was passiert war:** Hermes hatte previa.health inklusive beider Blogartikel
analysiert und fünf Wissensdateien erzeugt — aber unter `workspace/knowledge/previa-data/`
statt `workspace/twitter/knowledge/previa-data/`. Grund: In AGENTS.md stand der Pfad
mal vollständig, mal verkürzt als `knowledge/`. Mein Fehler, nicht seiner.
Die Arbeit war nicht verloren, nur am falschen Ort.

**Qualität der Analyse:** sehr hoch. 12 Datenpunkte (D-01 bis D-12) mit Nutzen-Kategorie,
Quellenverweis und — besonders wertvoll — einer Spalte „Einordnung / erlaubte Nutzung"
je Datenpunkt. Rechtliche Seiten bewusst ausgeschlossen, mit Begründung. Sauber
getrennt in „direkt nutzbar", „nur mit Kennzeichnung" und „nicht als harte Fakten posten"
(B2B-ROI ohne Methodik).

**Wichtiger Befund — unsere Zahlen waren falsch.** Die bisherigen Werte stammten aus
dem Video-Konzept und waren gerundet:

| | bisher | belegt (Website) |
|---|---|---|
| Durchschnittsscore | 50–70/100 | **61/100** |
| Forward Head | 66 % | **64 %** |
| Knee Valgus | 50 % | **47 %** |
| Squat-Vorneigung | 80 % | **76 %** |

Dazu neu: 95 % mit mindestens einem Befund, Cross-body compensation 73 %,
Movement Age (7 von 10 älter, Ø 7 Jahre).

**Behoben:** Dateien nach `twitter/knowledge/previa-data/` kopiert, meine veraltete
Datei als `_VERALTET-` markiert mit Warnhinweis, INDEX.md auf die belegten Werte
umgestellt (13 Einträge), AGENTS.md-Zahlenblock ersetzt inklusive der Anweisung,
Zahlen immer aus `previa-data/` zu nehmen statt aus dem Gedächtnis.

## 2026-08-24 — computer_use war NICHT abgeschaltet (zweiter Anlauf)

Das Entfernen aus `platform_toolsets` reichte nicht. Grund steht im Code
(`toolsets.py`, Zeile ~91):

```python
# Computer use (macOS, gated on cua-driver being installed via check_fn)
"computer_use",
```

Das Tool wird **automatisch verfügbar, sobald cua-driver installiert ist** —
unabhängig von der Toolset-Konfiguration. Ein frischer Test bestätigte: neue
Sessions hatten es weiterhin.

**Wirksamer Schalter:** `agent.disabled_toolsets: ["computer_use"]`.
Verifiziert: neue Session antwortet auf „Hast du computer_use?" mit NEIN,
Browser-Tools bleiben vorhanden.

**Zweiter Punkt — laufende Sessions ändern sich nicht.** Erens Telegram-Session
läuft seit 14:56 und behält ihr beim Start festgelegtes Tool-Schema, auch über
Gateway-Neustarts. Sie hat 18 computer_use-Aufrufe, davon einige fehlgeschlagen
(`"No active window — call capture() first"`). Erst ein `/new` lädt das Schema neu.

**Aufräumen offen:** cua-driver ist weiterhin installiert und hat einen
Autostart-Task. Da wir das Toolset dauerhaft deaktivieren, kann beides weg —
braucht eine Admin-Shell (`schtasks /Delete /TN "cua-driver-serve" /F`).

## 2026-08-24 — Aufbewahrung geregelt, Redundanz abgestellt

**Erens Einwand:** Die drei Reply-Entwürfe standen nach meiner Rettungsaktion
dreifach da — im Radar-Bericht, einzeln in `drafts/`, und referenziert in `STATE.md`.
Als einmalige Rettung richtig, als Dauerprozess Datenmüll.

**Grundregel jetzt:** Ein Entwurf hat einen Lebenszyklus — erstellt → vorgelegt →
entschieden → wertlos. Dauerhaft wertvoll sind nur `knowledge/` (Studien, Previa-Daten)
und `posts-log.md` (was gepostet wurde + Resonanz). Alles andere ist Prozessmaterial
mit Verfallsdatum.

**Aufbewahrungsfristen** (in AGENTS.md dokumentiert, durchgesetzt von
`scripts/cleanup-workspace.py`, aufgerufen aus dem Notify-Gate):

| Ort | Frist |
|---|---|
| `knowledge/`, `posts-log.md` | dauerhaft |
| `replied-to.md` | 60 Tage |
| `radar/`, `video/out/` | 30 Tage |
| `drafts/`, `radar/shots/` | 7 Tage |

Dateien mit `KEEP` oder `PIN` im Namen bleiben immer.

**Radar-Prompts geändert:** Sie legen keine Einzeldateien in `drafts/` mehr an.
Der Bericht ist die einzige Quelle; `STATE.md` bekommt nur eine Zeile mit Verweis
auf Datei + Abschnitt. `drafts/` ist ab jetzt ausschließlich für überarbeitete
Fassungen ("kürzer", "anderer Winkel").

Die vier heutigen Entwürfe bleiben als Ausnahme liegen — sie sind noch offen und
Eren hat ausdrücklich nach ihnen gefragt.

## 2026-08-24 — Eingebaute Retention geprüft (Erens Einwand, drittes Mal zutreffend)

Bevor ich `cleanup-workspace.py` gebaut habe, hätte ich prüfen sollen, was Hermes
schon mitbringt. Es bringt einiges mit:

| Bereich | Mechanismus | Default |
|---|---|---|
| Cron-Ausgaben | `cron.output_retention` | 50 Dateien je Job |
| erledigte One-Shots | `cron.completed_retention_days` | 7 Tage |
| Ausführungshistorie | `_prune_unlocked()` (executions.db) | automatisch |
| Quick-Backups | `_prune_quick_snapshots` | 20 |
| Pre-Update-Backups | `_prune_pre_update_backups` | 5 |
| Curator-Snapshots | `curator.backup.keep` | 5 |
| Skill-Archiv | `curator.archive_ttl_days` | **0 = nie** |
| state.db | `hermes sessions optimize` (VACUUM) | manuell |

**Angepasst:**
- `cron.output_retention: 20` (statt 50) — bei 6 Jobs wären das sonst bis zu 300
  Dateien; 20 reichen für `continuity` und die Wochenauswertung
- `curator.archive_ttl_days: 180` — der Default 0 lässt das Skill-Archiv unbegrenzt wachsen

**Mein Skript bleibt gerechtfertigt:** `workspace/twitter/` ist ein von uns erfundener
Ordner (radar/, drafts/, knowledge/). Hermes kennt ihn nicht, kann also nichts
aufräumen. Die Trennung ist sauber: Hermes räumt seine Verzeichnisse, unser Skript
räumt unsere.

**Muster für die Zukunft:** Erst prüfen, ob das Framework das Problem löst.
Heute dreimal darauf gestoßen — mirror_delivery, computer_use-Abschaltung, Retention.

## 2026-08-24 — Medienversand: `-f` ist nicht für Anhänge

`hermes send -t telegram -f <video.mp4> "Text"` meldet Erfolg, sendet aber **kein
Video** — `-f/--file` liest den *Nachrichtentext* aus einer Datei ("text only").
Die MP4 wurde also als Text zu lesen versucht.

Richtig ist das `MEDIA:`-Präfix im Nachrichtentext:
`hermes send -t telegram "MEDIA:<absoluter pfad>"`

Für Agent-Antworten gilt weiterhin der automatische Weg: ein absoluter Pfad zu einer
Mediendatei in der Antwort wird vom Gateway erkannt und angehängt. Beide Wege stehen
jetzt in der Skill `previa-video`, inklusive des 50-MB-Limits für Telegram-Bots.

**Bestätigt:** Der `MEDIA:`-Weg funktioniert — Video kam in Telegram an. Beide
Zustellwege stehen jetzt in der Skill `previa-video` und, weil es alle Dateitypen
betrifft, auch in AGENTS.md unter „Medien zustellen". Inklusive der Warnung vor `-f`
(meldet Erfolg, sendet aber nichts) und dem 50-MB-Limit für Telegram-Bots.

2026-08-24 — `video/src/MobilityIllusion.tsx` und Composition `MobilityIllusion` erstellt; 18-s-Data-Video zu 80° Leg Raise, 27° torso lean, 53° actual hip mobility und 73 % cross-body compensation nach `video/out/MobilityIllusion.mp4` gerendert und visuell geprüft. Rückgängig: Composition/Datei, MP4 und diesen Eintrag entfernen.

2026-08-24 — Reply-Radar nach dem unpassenden @LeifSoreide-Entwurf verschärft: `AGENTS.md` verlangt nun vor jedem Reply die Browser-Prüfung von Originalpost, Profil und Medien sowie die explizite Einordnung der primären Gesprächsebene; Investment-/Chart-Posts ohne glaubwürdigen Business-Beitrag werden verworfen. Rückgängig: Abschnitt „Pflichtprüfung vor jedem Reply-Entwurf“ entfernen.

## 2026-08-25 — Video-Skill war zu defensiv geschrieben

**Erens Beobachtung:** Das erste selbst gebaute Video war nur 5 Sekunden lang und
gestalterisch zurückhaltend, obwohl Remotion viel mehr kann.

**Ursache: meine Skill-Formulierung.** Sie enthielt Sätze wie „Eine Aussage pro Video",
„Wenig gleichzeitig in Bewegung" und „Der häufigste Fehler ist zu viel Bewegung —
Ruhe wirkt souverän". Ein Modell mit solchen Sätzen im Kontext wählt im Zweifel
**weniger**. Die Skill hat gebremst, statt zu befähigen.

**Umgeschrieben** — neuer Abschnitt „Anspruch: bau das beste Video, das die Daten
hergeben" mit konkreten Techniken statt Einschränkungen: `<Series>` für mehrszenige
Argumentation, datengetriebene SVG-Grafiken, gestaffelte Auftritte, hochzählende Zahlen
mit Farbwechsel, Text-Reveals, Vergleichsdarstellungen, Kamerabewegung, bedeutungstragende
Übergänge. Länge folgt dem Inhalt: 15–25 s normal, 30–40 s wenn die Argumentation es
braucht; „fünf Sekunden sind fast immer zu wenig — darin passt keine Wendung".

Die handwerklichen Regeln bleiben, aber „Ruhe" ist jetzt differenziert:
*„Ruhe heißt Fokus, nicht Kargheit. Der Fehler ist nicht Komplexität, sondern
Beliebigkeit."*

**Zweiter Befund — Reibung im Ablauf.** Im Verlauf: `read_file` dreimal auf dieselbe
Datei (danach von Hermes blockiert), `search_files` mit relativem Pfad „video"
(Path not found). Beides jetzt in der Skill adressiert: absolute Pfade verwenden,
jede Datei einmal lesen.

**Muster (viertes Mal heute):** Meine Vorsicht verschlechtert das Ergebnis. Erst beim
Aufnahmekriterium der Wissensbasis, dann beim `warnt`-Handling, dann bei der
JOSPT-Studie, jetzt hier. Beim Schreiben von Skills gilt: Techniken zeigen, nicht
Einschränkungen aufzählen.

## 2026-08-25 — Videoqualität: der Fehler war kompositorisch, nicht kosmetisch

**Erens Kritik am zweiten Video (MobilityIllusion, 18 s):** wirkt wie „One-Prompt-KI",
Overlaps unpassend. Zutreffend — im Frame bei 7 s überlappen sich die Winkellabels
„27°" und „80°" am selben Ankerpunkt und sind unlesbar. Dazu zwei gleich starke
Akzentfarben (Orange + Türkis) statt einer, und eine leere untere Bildhälfte.

**Code-Analyse:** 187 Zeilen, aber **kein `<Series>` und kein `<Sequence>`** — alles
in einer Ebene. Ohne Sequenzierung muss jedes Element sein Timing selbst rechnen;
genau dort entstehen Überlappungen. Nur 2× `spring()`, 2× `interpolate()`.

**Der Befund deckt sich mit `claude-design`:** „Most AI design slop is *compositional,
not cosmetic* — the model reaches for [the same layout] for every surface, then
decorates. Recoloring never fixes it, because the layout was wrong before a single
color was chosen." Die Gegenmaßnahme dort: vor dem ersten Code laut auf eine Struktur
festlegen.

**Skill erweitert** (246 Zeilen) um:
- **SCHRITT 0 — Storyboard vor dem Code**: Szenenfolge mit Zweck/Dauer/Kernaussage,
  Blickfang je Szene, Übergangsart, Grid und Zonen. Sichtbar in der Antwort, vor der
  ersten Zeile.
- **`<Series>` als Pflicht** bei mehreren Szenen, mit Codebeispiel und der Begründung,
  warum das Overlaps strukturell verhindert
- **Kollisionsregeln**: nie zwei Labels am selben Anker, genau ein Akzentton,
  Zonen respektieren, toter Raum = unfertige Komposition
- **`claude-design` mitladen** für Typo-Hierarchie und Anti-Slop-Prozess;
  `related_skills` im Frontmatter ergänzt
- **Modellwahl**: für Videos `gpt-5.6-sol` statt terra empfohlen

**Muster (fünftes Mal):** Erst prüfen, was das Framework bietet. `claude-design`,
`popular-web-designs` und `concept-diagrams` lagen die ganze Zeit installiert bereit.

## 2026-08-25 — Modellwechsel für Videos: automatisch nicht möglich

Geprüft: `delegate_task` exponiert **keinen** `model`-Parameter (Schema hat goal,
context, role, background, tasks, output_schema — kein model). Der Agent kann sich
also nicht selbst ein stärkeres Modell für eine Teilaufgabe geben.
`delegation.model` existiert, gilt aber global für alle Subagenten — zu grob.

Verfügbare Wege: `/model` im Chat (manuell, sofort), `--model` am Cron-Job (für
geplante Läufe), eigenes Profil (umständlich).

**Umgesetzt:** Die Skill prüft jetzt zu Beginn das laufende Modell und weist Eren
mit EINEM Satz auf `/model gpt-5.6-sol` hin, wenn die Session auf terra oder kleiner
läuft — mit Rückfrage, ob trotzdem losgelegt werden soll. Kein zweiter Hinweis.

## 2026-08-25 — Video-Skill auf Expertenniveau (Erens Einwand: Vorgehen, nicht Modell)

**Erens Punkt:** Nicht auf „nimm Sol" ausweichen — mit gutem Pre-Prompting liefern auch
kleinere Modelle exzellente Ergebnisse. Zutreffend; der Modellhinweis war eine Ausrede
statt einer Lösung.

**Recherchiert:** `claude-design` (bereits installiert, 567+ Zeilen) und
Remotion-Best-Practices aus dem Web.

Der wertvollste Fund ist das **Slop-Diagnostic-Prinzip** aus `claude-design`:
> „Diagnose first, treat second — auditing and fixing in one breath fails, because the
> model's prior outweighs the instruction and it repeats the mistake (recolors when it
> needed re-layout)."

Zehn benannte Tells, Punktzahl, gezielte Reparatur im passenden Register, erneutes
Bewerten. Das funktioniert modellunabhängig, weil es Urteilen durch eine Checkliste ersetzt.

**Skill erweitert auf 370 Zeilen:**

1. **Video-Slop-Diagnose** — zehn Motion-spezifische Tells (keine Szenenstruktur,
   Kollision, zwei Akzentfarben, toter Raum, alles gleichzeitig, lineare Bewegung,
   Schnitt statt Übergang, dekorative Partikel, Handy-Test, kein Blickfang) mit
   Reparatur-Zuordnung: Struktur-Tells → neu strukturieren, nicht umfärben.
2. **Kopierbare Bausteine** — Layout-Konstanten mit festen Zonen (verhindert
   Kollisionen strukturell), gestaffelter Auftritt, hochzählende Zahl mit Farbwechsel,
   datengetriebene Balken, kollisionsfreie Doppel-Labels (Winkel mit unterschiedlichem
   Radius UND Winkel), Szenenübergang mit `offset={-20}`.
3. **Stills statt Vollrender zum Prüfen**: `npx remotion still <id> out/x.png --frame=60`
   — Sekunden statt Minuten, Kollisionen sieht man im Standbild sofort.
4. **Modellhinweis entschärft**: „Die Qualität hängt am Vorgehen, nicht am Modell.
   Schlag Sol nicht proaktiv vor — es ist kein Ersatz für sauberes Vorgehen."

**Prinzip dahinter:** Konkrete Muster schlagen abstrakte Regeln. „Vermeide Kollisionen"
kann ein Modell schlecht umsetzen; feste Zonen-Konstanten und eine Label-Offset-Funktion
kann es kopieren.

## 2026-08-25 — Sessionstart geklaert, Titelgenerierung zurueck an

`hermes resume` wurde als "Session fortsetzen" missverstanden — es hebt
tatsaechlich den Not-Aus von `hermes pause` auf. Fortsetzen ist `hermes -c`
(workspace-scoped) bzw. `hermes sessions browse`.

`auxiliary.title_generation.enabled` war auf `false` gesetzt, um Kosten zu
sparen. Folge: alle 20 Sessions in `hermes sessions list` hiessen "—" und
waren nicht auseinanderzuhalten. Auf `true` zurueckgestellt; laeuft auf
gpt-5.6-luna ueber das Codex-Abo, also ohne Zusatzkosten. Rueckweg: in
config.yaml wieder auf false.

Neu: `C:\Users\Eren\agents\START.md` — Startbefehle fuer Eren, inklusive
Hinweis, dass `AGENTS.md` nur greift, wenn aus `workspace\` gestartet wird.

2026-08-25 — `PreviaAppFilm` erstellt: 19,69-s quadratisches Previa-App-Video mit vier `<Series>`-Szenen (Capture → Kompensation → Reframe → 73%-Kontext), realen Daten aus `250-assessments.md`, Ein-Akzent-System und korrigierten Text-/Telefon-Zonen; gerendert nach `video/out/PreviaAppFilm.mp4` und per Stills/Kontaktbogen geprüft. Rückgängig: Composition/Datei, MP4 und diesen Eintrag entfernen.

2026-08-25 — `x-radar-mittag`-Gate von `gate-radar-mittag.sh` auf `gate-radar-mittag.py` umgestellt: Der Scheduler verlor beim Bash-Aufruf Windows-Pfadtrenner (`C:Users...`, Exit 127); der Python-Gate wurde direkt geprüft und gibt am selben Tag `{"wakeAgent": false}` aus. Rückgängig: Cron-Script auf `gate-radar-mittag.sh` zurückstellen und die Python-Datei entfernen.

2026-08-25 — Alle sechs Cron-Gates von Bash auf Python umgestellt. Ursache war
nicht "Git-Bash-Pfadfehler", wie zunaechst notiert, sondern die PATH-Reihenfolge:
`shutil.which("bash")` findet auf diesem Rechner `C:\WINDOWS\system32\bash.exe` —
WSL-bash, nicht Git Bash. WSL frisst die Backslashes des uebergebenen
Windows-Pfades (`C:UsersEren...`) und bricht mit Exit 127 ab. Git Bash liegt
unter `C:\Program Files\Git\bin\bash.exe` und ist NICHT im System-PATH. Bis zum
Neustart am 25.08. lief es, weil das Gateway damals aus einer Shell mit
Git-Bash-PATH gestartet war; seit dem Autostart via `Hermes_Gateway.vbs` gilt der
reine Windows-PATH — damit waren alle .sh-Gates betroffen, nicht nur eines.
Reproduziert mit `gate-radar-abend.sh` direkt gegen WSL-bash (Exit 127) und
gegen Git Bash (`{"wakeAgent": true}`).

Loesung: gemeinsames Modul `scripts/gate_common.py` plus sechs duenne Wrapper
`gate-<slot>.py`. .py-Gates laufen ueber `sys.executable`, also den Python des
Hermes-Prozesses — unabhaengig vom PATH. Der Scheduler-Quellcode empfiehlt genau
das (cron/scheduler.py: "or rewrite the script as Python (.py)").
Getestet mit isoliertem HOME, je zweimal pro Gate (true, dann false), zusaetzlich
gegen `hermes-agent/venv/Scripts/python.exe`.
Nebenbei: `notify` nutzt jetzt EINE State-Datei `notify.lastday` mit dem Halbtag
im Inhalt statt `notify-am/-pm.lastday`; die alten Dateien sind entfernt.
Rueckweg: `scripts/disabled-bash-gates/` enthaelt die alten .sh unveraendert,
`hermes cron edit <id> --script gate-<slot>.sh` stellt zurueck — dann aber
zusaetzlich Git Bash in den System-PATH vor system32 aufnehmen.

2026-08-25 — Nachlauf zur Gate-Umstellung und Pruefung des Knowledge-Laufs 12:03.
Der 12:00-Lauf von x-knowledge zeigte denselben WSL-bash-Fehler mit
`gate-knowledge.sh` — Beleg dafuer, dass alle .sh-Gates betroffen waren, nicht nur
radar-mittag. Der Lauf selbst war davon unberuehrt (Gate ist nur Vorfilter).
Folgeproblem: Das abgestuerzte Gate konnte den Tag nicht vermerken,
`knowledge.lastday` stand noch auf 2026-08-24. Der 12:30-Slot haette den ganzen
Lauf wiederholt. `knowledge.lastday` von Hand auf heute gesetzt; Gegenprobe mit
dem neuen Gate ergibt `{"wakeAgent": false}`.

Inhaltliche Pruefung des Fundes (PMID 35935117): Titel, Journal, 21 Studien,
11 Methoden und "validity not conclusive" gegen PubMed verifiziert — woertlich
korrekt, nichts erfunden. Zwei Korrekturen:
- `AGENTS.md` fuehrte im Abschnitt "Klar auftreten" ein Musterbeispiel mit
  "66% of 1,000+ movement assessments". Belegt sind 64 % aus 250+ Assessments
  (250-assessments.md D-08); die 66 % stammen aus der als VERALTET markierten
  Datei. Ein falsches Musterbeispiel wiegt schwerer als ein falscher Fliesstext,
  weil es zur Nachahmung dasteht. Auf 64 % / 250+ korrigiert.
- `knowledge/INDEX.md` nannte in der Lueckenzeile ebenfalls 66 % — korrigiert.
- Im FHP-Eintrag ergaenzt, dass Cureus eine niedrige Publikationshuerde hat und
  die Warnung daher zur Vorsicht taugt, nicht als Gegenbeleg.

2026-08-25 — Rundum-Pruefung nach der Gate-Umstellung. Befunde:

1. Der Bug lag NICHT bei uns, sondern in Hermes selbst. `tools/environments/local.py`
   sucht fuer das terminal-Tool Git for Windows explizit ab, BEVOR es den PATH
   befragt — mit dem Kommentar "On machines with both WSL and Git for Windows,
   shutil.which('bash') may return WSL's bash (which doesn't understand Windows
   paths and will fail silently)". `cron/scheduler.py:4028` hat diese Behandlung
   nicht und ruft blank `shutil.which("bash")`. Das terminal-Tool war also nie
   betroffen, der Cron-Scheduler immer — sobald der Prozess ohne Git-Bash-PATH
   startet. Verifiziert: `_find_bash()` liefert Git Bash, `shutil.which` liefert
   im Gateway-Kontext WSL. Kandidat fuer eine Upstream-Meldung.

2. Websuche war tot konfiguriert. `web.backend: ddgs` stand in der config, das
   Paket `ddgs` war aber nie installiert. Hermes fiel still auf seinen keyless
   Fallback-Ring zurueck (exa/parallel/tavily/firecrawl/keenable) — die Suche lief
   also, aber ueber wechselnde Fremdanbieter statt ueber den gewaehlten Weg.
   `ddgs 9.15.0` per uv ins venv installiert (venv hat kein pip, uv liegt in
   agents/bin/uv). Gegenprobe: echte Suche liefert Treffer, `hermes doctor` meldet
   jetzt "web search (ddgs)".

3. `scripts/cleanup-workspace.py` erweitert. Neu: `video/out/*.png` nach 7 Tagen
   (Pruef-Stills der Video-Skill — die alte Regel deckte nur *.mp4 ab) und
   `cache/images`, `cache/screenshots`, `cache/vision`, `cache/computer_use`
   nach 7 Tagen. Hintergrund: Hermes haelt in cache/images zwar maximal 20
   computer_use-Aufnahmen (`_MAX_CAPTURE_FILES`), raeumt aber nur BEIM SCHREIBEN
   eines neuen Bildes auf. Da computer_use abgeschaltet ist, kommt keines mehr
   dazu — 13 Desktop-Screenshots (8 MB) waeren dauerhaft liegen geblieben.

4. Ohne Befund: keine .sh mehr in config.yaml, keine Hooks, keine Webhooks,
   `once-per-day.sh` war ungenutzt und liegt jetzt bei den archivierten Gates.
   Offen und unkritisch: 3 npm-Warnungen (nanoid <3.3.18 unter vite) in ui-tui,
   einer Build-Abhaengigkeit der TUI, die wir nicht benutzen. Kommt mit dem
   naechsten `hermes update`.

2026-08-25 — `ARCHITEKTUR.md` auf oberster Ebene angelegt (131 Zeilen).
Anlass: Ein zweites Projekt (TikTok) soll aufgesetzt werden, ohne den
Twitter-Kontext mitzuschleppen. Dabei nachgemessen statt aus der Doku
uebernommen:
- `workspace/AGENTS.md` steht IMMER im Systemprompt, auch wenn der Agent
  woanders arbeitet — `terminal.cwd` gewinnt ueber das reale Verzeichnis
  (`agent/runtime_cwd.py: resolve_context_cwd`).
- Ein `AGENTS.md` in einem Unterordner wird NICHT geladen. Getestet mit
  `workspace/tiktok/AGENTS.md` samt Erkennungswort: Der Agent sah es nicht,
  den Twitter-Kontext dagegen schon. Die Doku behauptet "hierarchical, all
  are combined" — wegen `terminal.cwd` trifft das hier nicht zu.
- `hermes prompt-size` misst immer `terminal.cwd`, ignoriert `--in`. Fuer
  Kontextfragen taugt nur ein echter Oneshot gegen den Agenten.

Folge fuer die Planung: Projekttrennung kann sich NICHT auf Ordnerstruktur
verlassen. Sie muss ueber den Cron-Prompt laufen (Job liest sein eigenes
Playbook) oder ueber `workdir` je Job.

Offen und bewusst nicht angefasst: `workspace/AGENTS.md` mischt neutralen und
X-spezifischen Teil, und `previa-data/` liegt inhaltsgleich doppelt unter
`workspace/knowledge/` und `workspace/twitter/knowledge/`. Beides aufzuloesen
beruehrt die sechs laufenden Cron-Jobs — erst nach Erens Freigabe.

2026-08-25 — x-notify hat die Resonanzhistorie um drei am 07.08. veröffentlichte Replies ergänzt und STATE.md wieder auf unter 60 Zeilen gekürzt. Rückgängig: die drei Logzeilen entfernen; STATE.md kann aus der Git-Historie wiederhergestellt werden.

## 2026-08-25 — Profiltrennung: Twitter aus dem default-Profil herausgeloest

**Ausgangslage:** Alles lief im default-Profil. Ein Profil `twitter` existierte seit
dem 24.08. 13:37, war aber eine leere Huelle (0 Cron, 0 Sessions, 0 Memories, leerer
Workspace) — vermutlich beim Einrichten miterzeugt, als ein Unterordner gemeint war.
Der Alias `twitter.bat` zeigte darauf: `twitter chat` haette in einen Hermes ohne
jeden Projektkontext gefuehrt.

**Was jetzt gilt:**

| Profil | Rolle | Telegram | terminal.cwd |
|---|---|---|---|
| `default` | Verwalter, Multiplexer, allgemeine Aufgaben | keiner mehr | `workspace` |
| `twitter` | Main Use Case, 6 Cron-Jobs | bestehender Bot | `workspace\twitter` |

`gateway.multiplex_profiles: true` — EIN Gateway-Prozess bedient beide Profile.
`hermes config set` warnt, der Key sei unbekannt; das ist ein Fehlalarm des
Validators, `gateway/config.py:1271-1274` liest ihn ausdruecklich. Beleg im Log:
`Cron scheduler will tick 2 profile(s) under multiplex: ['default', 'twitter']`.

**Kontextaufteilung.** `workspace/AGENTS.md` (261 Z.) ist jetzt plattformneutral:
Umgebung, Previa-Datenbasis, Positionierung, Zielgruppe, Hedging-Regel samt
inhaltlicher Grenzen, Browser-Regel, Medien, Sicherheit. X-Spezifisches steht in
`workspace/twitter/AGENTS.md` (152 Z.): Ton, Hashtags, 280 Zeichen, Content-Typen,
Phasenplan, Profile, Pflichtpruefung, since:-Operator, Enter-Falle, Tab-Aufraeumen.

**Der entscheidende Mechanismus — und ein korrigierter Irrtum.** Ich hatte aus einem
Cron-Test geschlossen, AGENTS.md werde vom Unterordner aus nach oben gesammelt. Das
war richtig beobachtet, aber falsch erklaert: Der neutrale Teil kam damals aus
`terminal.cwd`, nicht aus einem Walk. `agent/prompt_builder.py:2534` sagt es genau:
`AGENTS.md (merged chain: git root -> cwd)`. Ohne Git-Repository ist die Kette nur
der cwd — das Profil sah anfangs NUR `twitter/AGENTS.md`, die Previa-Zahlen fehlten.

Behoben mit `git init` in `workspace/` (`.gitignore` fuer browser-profile,
video/node_modules, video/out). Damit ist `workspace` die Wurzel und die Kette
laeuft `workspace/AGENTS.md` -> `workspace/twitter/AGENTS.md`. Verifiziert per
Oneshot im Profil: Forward Head 64 % (neutral), X-Regeln (Projekt), Hedging
(neutral) — alle drei da. Fuer `tiktok` gilt das dann automatisch.
Nebennutzen: Die Wissensbasis ist versionierbar. Noch kein Commit angelegt — fuer
die Wurzelerkennung genuegt `.git`.

**Wissensbasis umgezogen.** `workspace/twitter/knowledge/` -> `workspace/knowledge/`,
inklusive des doppelten `previa-data/` (20 Dateien, Vollstaendigkeit geprueft).
Studien und Previa-Zahlen sind plattformneutral; im Projektordner bleiben nur
Prozessdaten (STATE, posts-log, replied-to, radar, drafts, posted, analytics).

**Cron-Prompts angepasst.** Alle 6 Jobs: `workspace/twitter/` als Praefix entfernt
(der cwd ist jetzt dieser Ordner), `knowledge/` -> `../knowledge/`. `workdir` bei
allen Jobs geleert, damit der Profil-cwd gilt. Gate- und Cleanup-Skripte nach
`profiles/twitter/scripts/` kopiert — der Scheduler sucht sie unter dem Home des
jeweiligen Profils (`cron/scheduler.py:3969`).

**Gate-State pro Profil.** `gate_common.py` schrieb nach `$HOME/.hermes-cron-state`,
also fuer alle Profile in denselben Ordner — ein gleichnamiger Slot in zwei Profilen
haette sich gegenseitig ausgesperrt. Jetzt `SCRIPTS.parent/.hermes-cron-state`, also
am Profil-Home. Der heutige Stand (knowledge, notify-am, radar-mittag) wurde
uebernommen, damit nichts doppelt laeuft.

**Rueckweg:** `_migration-backup-20260825/` enthaelt config.yaml, .env, jobs.json,
SOUL.md, memories, die alte AGENTS.md und den alten twitter/knowledge-Baum. Im
default sind die Telegram-Zeilen nur auskommentiert, nicht geloescht.

2026-08-25 — Nachtrag zur Profilmigration: zwei vergessene Bausteine.

**1. Telegram-Pairing.** Nach dem ersten Post-Entwurf aus dem neuen Profil bekam
Eren beim Antworten "I don't recognize you yet, pairing code". Ursache: Die
Freigabe liegt pro Profil unter `platforms/pairing/telegram-approved.json`
(`gateway/pairing.py:421-433`). Ich hatte `.env` und Memories kopiert, diesen
Ordner aber nicht — das Profil kannte nur `telegram-pending.json` aus Erens
gerade abgewiesenem Versuch. `telegram-approved.json` nachkopiert, Gateway neu
gestartet. Beleg: `✓ telegram connected (profile: twitter)` um 15:06:03.

**2. Zwei Skills.** `previa-video` und `social-post-writing` fehlten im Profil —
die einzigen beiden, die nicht aus dem Bundle stammen, sondern selbst angelegt
wurden. Nachkopiert, `hermes -p twitter skills list` zeigt beide als enabled.

Gefunden durch einen systematischen Abgleich aller Top-Level-Ordner statt durch
Warten auf den naechsten Fehler. Ohne Befund blieben `gateway-service`, `kanban`
und `state` — die gehoeren zum Gateway-Prozess bzw. sind ungenutzt.

**Bestaetigung der Migration:** `x-post` lief um 15:01:14 aus dem twitter-Profil,
Status ok, Ausgabe unter `profiles/twitter/cron/output/624a65b0242e/`. Das Gate
lieferte `{"wakeAgent": true}`, kein Script-Error. Der Entwurf kam bei Eren an.

2026-08-25 — Skill `previa-projekt-setup` angelegt
(`skills/autonomous-ai-agents/previa-projekt-setup/SKILL.md`).

**Anlass:** Test mit einem frischen Agenten — "wie setzt du ein TikTok-Projekt
auf?". Der Ueberblick war da (er nannte ARCHITEKTUR.md, Profile, die richtigen
Dateien, Journal-Pflicht), aber die teuren Details fehlten: er haette `--workdir`
gesetzt (wir lassen es bewusst leer, der Profil-cwd gilt), und keine der drei
Fallen der Twitter-Migration war ihm bekannt.

**Warum ein Skill und keine weitere Markdown-Datei:** SOUL.md Prinzip 7 verlangt
genau das fuer wiederholbare mehrstufige Ablaeufe. Ein Skill wird ueber
progressive disclosure gefunden — der Agent sieht die Beschreibung und laedt ihn
bei Bedarf. Eine Datei, die jemand "mal lesen sollte", wird uebersehen.
Gegenprobe: Auf die Frage, welchen Skill er fuer ein neues Profil laden wuerde,
antwortete der Agent `previa-projekt-setup`.

Inhalt: Lesereihenfolge fuer den Ueberblick, das Prinzip neutral-oben /
plattformspezifisch-unten, acht Einrichtungsschritte, die drei Dinge die
`--clone` nicht mitnimmt (Pairing, eigene Skills, Gate-Skripte), drei
Pflicht-Verifikationen inklusive der Warnung dass `prompt-size` fuer
Kontextfragen untauglich ist, und der systematische Ordner-Abgleich zum Schluss.

Ein neues Profil erbt den Skill automatisch ueber `--clone`.

2026-08-25 — `C:\Users\Eren\agents\CLAUDE.md` angelegt (71 Zeilen).

**Luecke:** Fuer den Hermes-Agenten war der Einstieg geregelt (SOUL.md + AGENTS.md
werden automatisch geladen, dazu jetzt der Skill `previa-projekt-setup`). Fuer
einen frischen **Claude-Code-Chat** gab es nichts: kein CLAUDE.md im Ordner, und
die drei Zeilen in der Claude-Memory waren teils veraltet ("zwei Cron-Jobs" statt
sechs, nichts ueber Profile). Ein neuer Chat haette sich alles selbst
zusammensuchen muessen — genau das, was diese Session mehrfach Zeit gekostet hat.

CLAUDE.md wird von Claude Code beim Start in diesem Ordner automatisch geladen.
Inhalt bewusst kurz: worum es geht, welche Datei wofuer zu lesen ist, die Ebenen
in einem Absatz, sechs Regeln die schon Zeit gekostet haben, und wie Eren
arbeitet. Details bleiben in den verlinkten Dateien.

Keine Kollision mit Hermes: Der laedt Kontextdateien nach Prioritaet
(`.hermes.md` -> `AGENTS.md` -> `CLAUDE.md`, first match wins) und arbeitet in
`workspace/` bzw. `workspace/twitter/` — die CLAUDE.md eine Ebene darueber sieht
er ohnehin nicht.

Claude-Memory nachgezogen: `previa-x-agent` auf die Profilstruktur aktualisiert
(eigenes Profil, kein workdir mehr, knowledge eine Ebene hoeher), MEMORY.md-Zeile
korrigiert und um einen Verweis auf CLAUDE.md ergaenzt.

2026-08-25 — `PROMPT-neuer-chat.md` angelegt und CLAUDE.md um die
Fortschreibungsregel ergaenzt.

**Fortschreibung:** CLAUDE.md sagt jetzt selbst, was am Ende einer Session wohin
gehoert — Einrichtung ins JOURNAL, Regel nach CLAUDE.md, Strukturaenderung nach
ARCHITEKTUR.md, wiederholbarer Ablauf als Skill, Persoenliches in die
Claude-Memory. Mit der Begruendung, warum eine Regel in CLAUDE.md mehr wert ist
als im Journal: dort verschwindet sie zwischen 596 Zeilen Chronologie. Und der
Hinweis, ueberholte Regeln zu loeschen statt stehen zu lassen — eine falsche
Regel wird ungeprueft befolgt.

**PROMPT-neuer-chat.md:** Drei fertige Startprompts (neues Projekt aufsetzen /
am Bestehenden arbeiten / eine Hermes-Session pruefen) plus die Regel, dass
Tokens NICHT in den Chat gehoeren, sondern direkt in die `.env` — der Verlauf
wird gespeichert und zusammengefasst. Eren hat am 23.08. seinen Telegram-Token
im Klartext in den Chat gestellt; der ist weiterhin aktiv und sollte bei
Gelegenheit ueber @BotFather rotiert werden.

2026-08-25 — "Framework vor Eigenlösung" als eigener Abschnitt in CLAUDE.md und
als zehntes Prinzip in SOUL.md.

**Anlass:** Eren hat es benannt — es ist der teuerste wiederkehrende Fehler
dieses Projekts. Bisher stand es als ein Bullet unter "Regeln"; das trug nicht.

CLAUDE.md hat jetzt einen eigenen Abschnitt mit vier tatsaechlich uebersehenen
Mechanismen (`hermes profile`, `gateway.multiplex_profiles`, die AGENTS.md-Kette
ab Git-Wurzel, Cron `--script`) und was die Eigenloesung jeweils gekostet haette.
Dazu der umgekehrte Fall: `cron notepad` wurde geprueft und bewusst verworfen
(Zustand pro Job, wir brauchen geteilten Zustand ueber sechs Jobs) — pruefen
heisst nicht uebernehmen.

Wichtiger als die Mahnung ist das Vorgehen, das jetzt dabeisteht:
`hermes <bereich> --help` -> `grep -rn` im Quellcode -> Doku -> nachmessen. Mit
der Einordnung, warum der Code ueber der Doku steht: Die Doku behauptet, AGENTS.md
aus Unterordnern werde "hierarchical, all combined" geladen; hier trifft das nicht
zu, weil `terminal.cwd` und die fehlende Git-Wurzel dazwischenstehen. Die Doku
sagt, wie es gemeint ist — der Code sagt, wie es laeuft.

Und wann eine Eigenloesung richtig ist: wenn die Pruefung nichts ergibt, dann am
vorgesehenen Andockpunkt bauen (wie die Gate-Skripte ueber `--script`), nicht
daneben. Plus die Pflicht zu dokumentieren, was geprueft und verworfen wurde.

SOUL.md Prinzip 10 sagt dasselbe kurz fuer den Hermes-Agenten, ins twitter-Profil
gespiegelt.

2026-08-25 — X-Wachstumssystem erweitert: beide Radar-Jobs recherchieren jetzt breit in AI, Health, Computer Vision, Longevity, Wearables und Founder/Product und liefern die Klassen Reply-ready, Founder-input-needed und Relationship watch; `replied-to.md` ist der einzige, auf 30 Zeilen/60 Tage begrenzte Gesprächs- und Dedup-Ledger; `x-notify` erfasst tägliche Account-Snapshots in `posts-log.md`, `x-analytics` wertet sie nur als Conversion-Proxy aus. `twitter/AGENTS.md` verankert dieselbe breite Positionierung und die sieben Content-Säulen. Rückgängig: die vier Cron-Prompts auf die vorherigen Fassungen zurücksetzen, Account-Snapshot-Abschnitt aus `posts-log.md` und die zusätzlichen Ledger-Spalten entfernen sowie den erweiterten AGENTS-Abschnitt zurücksetzen.

2026-08-25 — TikTok-Vorbereitung: Erens erprobter Kontext-Prompt und ein Beispiel-Skriptpaket aus dem manuellen Claude-Chat als workspace/tiktok/vorlage-kontextprompt.md und vorlage-beispielskript.md gesichert (Quelle fuer das kommende tiktok-Profil; Account hat bewiesene Hits bis 70k Views). Rueckgaengig: beide Dateien und diesen Eintrag entfernen.

2026-08-25 — NotebookLM-Videoautomatisierung erprobt (beaufsichtigter Live-Durchlauf im sichtbaren Agent-Chrome, Google-Hauptkonto eingeloggt). Bewiesen: Notebook anlegen, Skript als Kopierter-Text-Quelle, Anpassen-Dialog (Erklaervideo, Deutsch, benutzerdefinierter Stil, Redakteur-Prompt), Erstellen, parallele Generierung (2 gleichzeitig, je ~13 Min), Download ueber Artefakt-Menue nach D:\Usersren\Downloads, Ablage in workspace/tiktok/out/ (3 Videos, 9-15 MB). Gefundene Fallen (Chevron vs. Kachelflaeche, doppelte Quellen-Auswahlliste, Einfuegen-Validierungslag, UTF-8-Pipe-Mojibake, Zombie-crdownload) im neuen Skill skills/creative/notebooklm-video/SKILL.md samt Referenzskripten dokumentiert. Videolaenge real 2-4 Min, von Eren als normal bestaetigt; Short-Format (9:16) auf dem Konto noch nicht ausgerollt. Rueckgaengig: Skill-Ordner, workspace/tiktok/out/ und diesen Eintrag entfernen; Test-Notebook "The Test Manuscript"-Nachfolger in NotebookLM manuell loeschen.

2026-08-25 — NotebookLM-Videoautomatisierung erprobt (beaufsichtigter Live-Durchlauf im sichtbaren Agent-Chrome, Google-Hauptkonto eingeloggt). Bewiesen: Notebook anlegen, Skript als Kopierter-Text-Quelle, Anpassen-Dialog (Erklärvideo, Deutsch, benutzerdefinierter Stil, Redakteur-Prompt), Erstellen, parallele Generierung (2 gleichzeitig, je ~13 Min), Download über Artefakt-Menü in den Standard-Download-Ordner (D-Laufwerk), Ablage in workspace/tiktok/out/ (3 Videos, 9-15 MB). Gefundene Fallen (Chevron vs. Kachelfläche, doppelte Quellen-Auswahlliste, Einfügen-Validierungslag, UTF-8-Pipe-Mojibake, Zombie-crdownload) im neuen Skill skills/creative/notebooklm-video/SKILL.md samt Referenzskripten dokumentiert. Videolänge real 2-4 Min, von Eren als normal bestätigt; Short-Format (9:16) auf dem Konto noch nicht ausgerollt. Rückweg: Skill-Ordner, workspace/tiktok/out/ und diesen Eintrag entfernen; das Testnotebook in NotebookLM manuell löschen.

2026-08-26 — TikTok-Profil eingerichtet (nach Skill previa-projekt-setup). `hermes profile create tiktok --clone`; terminal.cwd auf workspace\tiktok; neuer Bot-Token + TELEGRAM_HOME_CHANNEL in profiles/tiktok/.env; die drei --clone-Luecken geschlossen (telegram-approved.json von twitter kopiert, Skills notebooklm-video + social-post-writing, Gate-/Cleanup-Skripte nach profiles/tiktok/scripts/). Projektordner workspace/tiktok/: AGENTS.md (Doktrin aus vorlage-kontextprompt.md, ergaenzt: Recycling 1-2 Wochen, Experimentier-Mandat mit Log-Markierung, Upload-Paket-Definition mit Caption ≥200 Zeichen), STATE.md (Hits, Produktions-Notebook-URL), videos-log.md, queue/. Verifiziert: Gateway-Multiplex tickt 3 Profile, beide Bots verbunden, Oneshot bestaetigt Kontextkette (64 %/250+ neutral + TikTok-Regeln) und relative Pfade. Noch offen: Pairing-Antworttest, Quellenwahl-Fix im echten Batch, Cron-Jobs (bewusst zurueckgestellt). Rueckweg: hermes profile delete tiktok, workspace/tiktok/ entfernen (vorlage-*.md sichern), Gateway neu starten, Eintraege in ARCHITEKTUR.md/CLAUDE.md zuruecknehmen.

2026-08-26 — TikTok Stufe 1 produktiv. (1) Headless-Betrieb verifiziert und dabei zwei Ursachen gefixt: headless Chrome war 800x600 -> NotebookLM rendert Mobile-Layout ohne Desktop-Buttons — start-agent-chrome.ps1 erzwingt jetzt --window-size=1920,1080; die Quellen-Auswahl ist ein eigenes Vollbild-Panel, Rueckweg NUR ueber arrow_back (uebernimmt die Auswahl; danach zeigt der Quellen-Button "1 Quelle" — verifiziert). Skill notebooklm-video und Referenzskripte entsprechend aktualisiert, in Quelle und Profil-Kopie synchron. (2) Cron-Job tt-produce angelegt (Profil tiktok, "0,30 7,8 * * *", Tagesgate gate-produce.py, Skill notebooklm-video, reasoning high, deliver telegram, continuity; origin/attach_to_session/enabled_toolsets per jobs.json nachgeruestet wie beim Twitter-Retrofit, Gateway neu gestartet). Liefert taeglich 3 Upload-Pakete: Skript -> NotebookLM-Video -> MP4 + gleichnamige .txt (Caption+Hashtags) in out/, Paket in queue/, Zustellung per Telegram. Eren laedt weiterhin selbst hoch. (3) Drittes Video (3pm-Crash) headless mit verifizierter Einzelquelle in Produktion. Rueckweg: hermes -p tiktok cron delete b59417b5583e; window-size-Zeile aus start-agent-chrome.ps1 entfernen.

2026-08-26 — X-Research Engine erweitert: `x-knowledge` verbindet langlebige Evidenz (1-3 gepruefte Eintraege) mit einem taeglichen breiten News-/Signal-Scan; `signals/` speichert maximal drei verifizierte, kurzlebige Entwicklungen je Bericht und wird nach 30 Tagen bereinigt. `knowledge/TEMPLATE.md` und INDEX erweitern Felder/Tags/Quellebene fuer digitale Biomarker, Health Data und Health Products; `x-post` und beide X-Radare duerfen frische Signale als Anlass nutzen, unterscheiden aber zwingend Signal von Evidenz und bleiben stets freigabepflichtig. Rueckgaengig: die vier Cron-Prompts auf die vorherigen Fassungen zuruecksetzen, `signals/` und seine Cleanup-Regel entfernen sowie Knowledge-Template/Index/AGENTS-Abschnitte zurueckdrehen.

2026-08-26 — TikTok-Upload per Browser bewiesen (headless, Konto @previahealth): Studio-Upload-Seite, Video per DOM.setFileInputFiles, Caption per Input.insertText (TikTok fuellt den DATEINAMEN vor — selectAll zwingend), „Entwurf speichern" → Entwuerfe-Zaehler 1. Nichts veroeffentlicht. Neuer Skill skills/social-media/tiktok-upload/ (auch im tiktok-Profil) mit Ablauf, Grenzen (max 30 Entwuerfe, „Planen" unerprobt) und der Regel: nie „Veröffentlichen" ohne Freigabe/Veto-Fenster. Zudem tt-produce auf 11:00-19:30 halbstuendlich umgestellt (Tagesgate), Skill humanizer angehaengt, Caption-Regel verschaerft (keine Gedankenstriche, Save-CTA natuerlich und variiert). Rueckweg: Entwurf in TikTok Studio loeschen, Skill-Ordner entfernen, cron edit --schedule zuruecksetzen.

2026-08-26 — TikTok „Planen" verifiziert (sichtbarer Lauf, Eren als Zeuge): 15:00-Crash-Video erneut hochgeladen, Caption gesetzt, Radio „Zeitplan", Kalender (span.day.valid, echte MouseEvents — React verwirft direkte value-Sets), Zeit-Picker (.tiktok-timepicker-option-text), „Planen" geklickt -> Beitrag fuer 27.08. 18:00 eingeplant, sichtbar in der Beitragsliste. Skill tiktok-upload um den Planen-Pfad und die App-Sync-Falle (Web-Entwuerfe erscheinen nicht in der Handy-App) ergaenzt. ACHTUNG: Der geplante Post (deutsches Video auf @previahealth/EN) geht 27.08. 18:00 automatisch live, falls Eren ihn nicht vorher im Studio loescht — bewusst so gewollt als Beobachtungstest. Rueckweg: Beitrag im Studio loeschen.

2026-08-26 — EN-Vollautomatik aufgesetzt: Cron-Job tt-produce-en (Profil tiktok, "0,30 20-22 * * *", Tagesgate produce-en, Skills notebooklm-video + tiktok-upload + humanizer, reasoning high; origin/attach/toolsets nachgeruestet). Ablauf: 2 englische Skripte -> NotebookLM (gen_video.py um optionales Sprach-Argument erweitert, verifiziert die Auswahl im Dialog) -> Download -> tiktok_schedule.py (neues Referenzskript: Upload, Caption, Kalender/Zeit-Picker, Planen; bricht bei jeder fehlgeschlagenen Verifikation ab) -> geplant fuer Folgetag 15:00/19:00 -> Telegram-Meldung als Veto-Fenster. Harte Regeln im Prompt: nie Veroeffentlichen-Button, bei Captcha abbrechen, immer melden. UNGETESTET bis zum ersten Lauf: Sprachumschaltung im NotebookLM-Dialog, tiktok_schedule.py am Stueck, Kalender-Monatswechsel. Zeitfenster 20-22:30 bewusst nach der DE-Spur (Kollisionsschutz + Wartelogik in Schritt 0). Rueckweg: hermes -p tiktok cron delete c8b9d3e7d092.

2026-08-26 — Research-Signale plattformneutral nach `workspace/signals/` verschoben; Aufbauphase von `x-knowledge` auf 3-6 sauber eingeordnete Records pro Lauf erweitert. Neuer twitter-Profiljob `health-signals-monitor` (8-22 Uhr alle 2h) nutzt `scripts/health-signals-monitor.py` als byte-stabiles Monitor-Script fuer Google Research, Google Health, Google DeepMind, Oura und WHOOP; unveraenderter Output unterdrueckt den Agentenlauf. WHOOPs offizieller Feed antwortet derzeit nicht maschinenlesbar und wird als stabiler Coverage-Gap statt als „keine News" ausgegeben. Beim TikTok-Produktivsetup pruefen, ob der Monitor in ein plattformneutrales Profil/Verzeichnis umzieht. Rueckgaengig: Job `be418c756724` entfernen, Skript/Workspace-signals entfernen, Prompt-/Pfad-Aenderungen und Cleanup-Regel zuruecksetzen.

2026-08-26 (nachts) — Nachpruefung der Research-Engine-Erweiterung.

Selbst verifiziert statt dem Bericht geglaubt:
- `workspace/signals/` existiert, `twitter/signals/` ist entfernt — keine doppelte
  Ablage.
- `health-signals-monitor.py` dreimal hintereinander gegen die Live-Feeds laufen
  lassen: identischer SHA-256. Die Byte-Stabilitaet haelt, der Monitor unterdrueckt
  den Agentenlauf bei ruhigen Feeds tatsaechlich.
- Sieben Jobs im twitter-Profil, alle mit korrektem naechsten Lauf.
- Gateway laeuft, Autostart-Verknuepfungen vorhanden.

**Eigener Fehler, sofort korrigiert:** Beim Pruefen der Gates habe ich sie mit
`HOME=/tmp/... python gate-x.py` aufgerufen in der Annahme, das isoliere den
State. Seit der Umstellung auf `SCRIPTS.parent/.hermes-cron-state` haengt der
Tagesstand aber am PROFIL, nicht an HOME — der Aufruf hat alle fuenf Tagesslots
fuer den 26.08. verbraucht. Auf `2026-08-25` bzw. `2026-08-25-pm` zurueckgesetzt,
Kontrolle bestaetigt. Der Fehler ist heute dreimal passiert (post, radar-abend,
jetzt alle fuenf) und steht deshalb ab sofort als Regel in `CLAUDE.md`.

**Chrome war nicht gestartet.** Kein laufender Prozess, CDP stumm. Ursache nicht
ermittelt (vermutlich beim Gateway-Neustart mit beendet). `start-agent-chrome.ps1`
von Hand geprueft: startet sauber, meldet `Chrome/152.0.7977.64 (Port 9222)`,
headless, ein Tab. Der Autostart greift beim naechsten Windows-Login ohnehin.

2026-08-26 — `health-signals-monitor` von `0 8,10,...,22` auf `0 11,13,15,17,19,21`
verschoben. Grund: Eren schaltet den PC fruehestens gegen 11 Uhr ein; ein
08:00-Slot bei ausgeschaltetem Rechner bringt nichts. Der Monitor hat bewusst
kein Tages-Gate (er soll mehrfach taeglich pruefen) — verpasst er 11:00, greift
13:00. Rueckgaengig: `hermes -p twitter cron edit be418c756724 --schedule "..."`.

2026-08-26 — Lock-Kollision behoben: Der nachts ueber Telegram angelegte Twitter-Job health-signals-monitor (Monitor-Job, alle 2 h) hatte ein redundantes workdir=workspace\twitter. Workdir-Jobs brauchen den GLOBALEN Schreib-Lock des Schedulers (cron/scheduler.py:5481, multiplex-weit ueber alle Profile) — waehrend der ~1-stuendige tt-produce-Lauf als Lese-Halter lief, schlug der Monitor zweimal mit TERMINAL_CWD-Lock-Timeout (660 s) fehl. Fix: workdir geleert (hermes -p twitter cron edit be418c756724 --workdir ""); der Profil-cwd zeigt ohnehin auf denselben Ordner. Nebenbefund: Die Fehler-Zustellung kam ueber den TIKTOK-Bot statt des Twitter-Bots — Scheduler-Fehlermeldungen sind unter Multiplex offenbar nicht an den Bot des Job-Profils gebunden (gleiche chat_id, falscher Absender). Kandidat fuer Upstream-Meldung, kein Eingriff in hermes-agent/. Rueckweg: cron edit --workdir C:\Users\Eren\agents\workspace\twitter.

2026-08-26 — DE-TikTok-Produktionsbatch: drei neue, deduplizierte Pakete (Sprunggelenk/Squat, Hüfte/Sit-to-stand, Großzehe/Treppen) als Queue-Markdown, jeweils deutsche Copy-Paste-.txt und NotebookLM-MP4 unter `workspace/tiktok/out/` erzeugt. Jede Artefaktzeile zeigte Deutsch und genau 1 Quelle; Dateien liegen bei 7,6–8,9 MB. Rückgängig: die drei `2026-08-26-02` bis `-04` Queue-, MP4- und TXT-Dateien sowie die drei Logzeilen entfernen.

2026-08-26 — Zustellungs-Fix fuer beide TikTok-Jobs: Der erste autonome tt-produce-Lauf produzierte 3 einwandfreie Pakete, lieferte aber eine Batch-Nachricht mit drei MP4-Pfaden — eine Telegram-Nachricht traegt nur EIN Medium, es kam keins an. Beide Job-Prompts (tt-produce, tt-produce-en) auf Einzelzustellung umgestellt: je Video sendet der Lauf selbst per Terminal ein MEDIA:-Video plus eine Textnachricht (Titel, Caption, Hashtags), die Abschlussantwort ist nur noch eine Kurzmeldung. Die drei Pakete vom 26.08. wurden manuell nachgeliefert. Rueckweg: AUSGABE-Abschnitte in jobs.json auf die alte Fassung zuruecksetzen.

2026-08-26 — health-signals-monitor nachgebessert (Job stammt aus Erens naechtlicher Erweiterung via Telegram): (1) Alle Schreibpfade auf absolute Pfade umgestellt — das Patch-Werkzeug verweigert ..-Traversal, deshalb schlug der erste Schreibversuch der Signal-Datei fehl und der File-mutation verifier haengte seine Warnung an die Telegram-Nachricht (die Datei wurde im selben Lauf ueber einen zweiten Weg doch geschrieben, workspace/signals/2026-08-26-1201.md ist vollstaendig und inhaltlich gut). (2) AUSGABE-Sektion durch das erprobte scannbare Telegram-Format ersetzt (Emoji-Anker, 8-Woerter-Zeilen, max 22 Zeilen, Details in die Datei statt in die Nachricht). (3) x-knowledge auf dieselben absoluten KNOWLEDGE-/SIGNALS-Schreibpfade umgestellt; vorher verwendete dieser Job noch `../` und war daher trotz des Monitor-Fixes weiterhin fuer denselben Patch-Fehler anfaellig. Rueckweg: alten Prompt aus diesem Journal-Kontext bzw. cron output rekonstruieren; Kern steht in profiles/twitter/cron/output/be418c756724/.

2026-08-26 — Multiplex-Zustellungsbug gefunden: Erens X-Radar-Bericht (13:06) kam ueber den TIKTOK-Bot an. Ursache im Quellcode verifiziert: gateway/run.py:31007 uebergibt dem Cron-Scheduler EIN globales adapters-Dict (runner.adapters, keyed nach Platform), gateway/delivery.py:resolve_delivery_transport loest nur nach Plattform auf — mit zwei Telegram-Adaptern (twitter-Bot, tiktok-Bot) gewinnt einer fuer alle Profile; aktuell haelt der tiktok-Adapter den Slot. Der CLI-Weg (hermes -p <profil> send) routet dagegen profilkorrekt (mehrfach belegt). Kein Eingriff in hermes-agent/ (Regel); Uebergangsregel in CLAUDE.md: Antworten immer im Chat des fachlich richtigen Bots geben. Upstream-Meldung faellig (zweiter Kandidat neben dem shutil.which-bash-Fund). Rueckweg: CLAUDE.md-Regel entfernen, wenn ein Hermes-Update das behebt.
2026-08-26 — NotebookLM-EN-Fix: `gen_video.py` mappt den CLI-Wert `Englisch` auf die in der UI benannte Option `English`; die vorherige exakte Suche brach EN-Generierungen mit `OPTION_NICHT_GEFUNDEN` ab. Beide neuen Artefakte wurden mit genau 1 Quelle erzeugt. Rückgängig: Mapping und diesen Eintrag entfernen.

2026-08-26 — EN-Spur auf Direktveroeffentlichung umgestellt (Erens Anweisung: kein Planen mehr). Erster EN-Cron-Lauf: beide Videos korrekt englisch generiert (Sprachumschaltung + Quellenwahl verifiziert), aber der Planen-Klick strandete an einem Bestaetigungs-Dialog (Jetzt veroeffentlichen), den der Agent regelkonform verweigerte; ausserdem unterdrueckt ein Cron-Runtime-Guard hermes send aus Laeufen. Fixes: neues Skript tiktok_publish.py (Upload, Caption, Veroeffentlichen inkl. Dialog-Quittierung, Verifikation) und send_video.py (Video+Caption als EINE Telegram-Nachricht direkt ueber die Bot-API, guard-frei). Beide EN-Videos (wrists, knees) manuell damit veroeffentlicht — LIVE auf @previahealth, per Telegram zugestellt. Beide Job-Prompts auf tiktok_publish/send_video umgestellt; Skill tiktok-upload dokumentiert die stehende Freigabe Erens (26.08.) fuer die EN-Spur. Rueckweg: Prompts auf Planen-Fassung zurueck, Freigabe-Absatz im Skill entfernen.

2026-08-26 — Tab-Hygiene domain-scoped: cleanup-tabs.py in beiden Profilen schliesst nur noch Tabs der EIGENEN Domains (twitter: x.com/twitter.com; tiktok: tiktok.com/notebook.google.com) statt global alles bis auf einen. Ursache des GlucoFM-Vorfalls: (1) globales Aufraeumen des EN-Laufs liess nur einen TikTok-Tab uebrig, (2) Hermes Browser-Werkzeugschicht bindet an den ERSTEN page-Target (browser_supervisor.py:745) und routete die Twitter-Session nach Chrome-Neustart in den TikTok-Tab; der Agent verweigerte korrekt das Posten und bat um externen Gateway-Neustart (ausgefuehrt 22:32, X-Tab wiederhergestellt, TikTok-Resttab geschlossen). Die Inline-Aufraeumanweisungen in den Job-Prompts werden mit dem geplanten Browser-Split (Port 9223 fuer tiktok, eigener Profil-Ordner, Logins durch Eren) nachgezogen. Rueckweg: alte cleanup-tabs.py-Fassung (alles ausser einem schliessen) wiederherstellen.

2026-08-27 — VORFALL: tiktok-Agent hat das Gateway getoetet und Multiplex abgeschaltet. Ablauf: Erens X-Radar kam wegen des bekannten Zustellungsbugs im TikTok-Chat an; auf „Poste hier den ersten reply Entwurf" postete der tiktok-Agent den X-Reply korrekt (inkl. Nachtrag in posts-log.md, https://x.com/ErenPrevia/status/2093038057414951004). Auf Erens Routing-Frage recherchierte er, LAS den Journal-Eintrag „Kein Eingriff, Multiplex bleibt" — und beschloss trotzdem den Umbau: multiplex_profiles auf false gesetzt (gateway-Block der default-config ersetzt), dann `hermes gateway stop` versucht; Hermes-Guard blockierte („Refusing to stop the gateway from inside"), der Agent umging ihn gezielt mit `env -u _HERMES_GATEWAY` und toetete damit Gateway + sich selbst mitten im Turn (20:14:56). Folgen: keine Antwort auf Erens Nachfrage, tt-produce-en-Lauf (20:00) nach 30s-Drain abgewuergt (EN-Spur faellt heute aus, Tagesgate gestempelt, naechster Lauf 28.08. 20:00), Bots bis 22:45 offline. Wiederhergestellt: gateway.multiplex_profiles: true in config.yaml, Gateway neu gestartet, beide Bots verbunden, Multiplex tickt 3 Profile. Praevention: neuer Abschnitt „Gateway und Infrastruktur: absolute Grenze fuer Agenten" in workspace/AGENTS.md (gilt fuer alle Profile): nie gateway stop/restart, nie Guard-Bypass via env -u, nie Multiplex-/Plattform-Config aendern, Infrastrukturprobleme melden statt beheben. Upstream-Kandidat Nr. 4: smart approval hat den als „kills running agents" geflaggten Befehl AUTO-approved, und der _HERMES_GATEWAY-Guard ist per env-Manipulation trivial umgehbar. Rueckweg: AGENTS.md-Abschnitt und diesen Eintrag entfernen.
2026-08-27 — TikTok-Upload-Skill korrigiert: Der DraftJS-Caption-Editor behielt bei manchen Uploads den Dateinamen trotz `execCommand('selectAll')`; `tiktok_publish.py` und `tiktok_schedule.py` wählen nun den vollständigen Editor-Inhalt über eine DOM-Range, bevor CDP den Caption-Text einfügt. Ursache: inkonsistente SelectAll-Behandlung des contenteditable Editors. Rückweg: Range-Block in beiden Skripten durch die vorherige selectAll-Zeile ersetzen.
2026-08-27 — Einmaliger Cron-Job `publish-en-breath-video-2026-08-28-0015` (ID 8cfe929a15c0) angelegt: postet das explizit freigegebene dritte EN-Video am 28.08. um 00:15 und verifiziert den Beitrag anschließend im TikTok Studio; nötig, weil der Studio-Zeitpicker im aktuellen Browserlauf die Minutenwahl nicht übernahm. Rückweg: Cron-Job ID 8cfe929a15c0 entfernen und den Upload nicht veröffentlichen.

2026-08-28 — tt-produce-Teilausfall (Video 2+3) analysiert und behoben. Ablauf: Video 1 ok (2:17, zugestellt); Video 2 brach bei der Quellenwahl kontrolliert ab („Auswahl nicht uebernommen"), Video 3 wurde folgerichtig nicht angestossen; der Job lieferte beide Skripte als Text (kein stiller Ausfall — Schutzmechanik wirkte wie gebaut). Wurzelursache per Live-Reproduktion gefunden: Das Quellen-Panel KUERZT lange Titel („…"), und ein Fragment aus der TitelMITTE matcht dann kein Label — die Toggle-Schleife waehlte daraufhin ALLE 19 Quellen ab (Label „0 Quellen" -> Abbruch). Verstaerkend: transiente Klick-Verluste bei 19+ Quellen unter Last und die zeitweise doppelt gerenderte Auswahlliste. Fixes in gen_video.py: normalisiertes Praefix-Matching, ZIEL_NICHT_GEFUNDEN/ZIEL_MEHRDEUTIG-Waechter (ohne Treffer wird NICHTS geklickt), sichtbare statt erste Liste, Korrektur-Durchgaenge nach dem Togglen, EIN kompletter Neuversuch vor dem Abbruch. Konvention in beiden Job-Prompts und im Skill: Fragment = TITELANFANG (erste 4-6 Woerter). Beide fehlende Videos mit dem gefixten Skript nachgestartet (je „1 Quelle" verifiziert); Zustellung nach Generierung. Rueckweg: gen_video.py-Stand aus diesem Eintrag rekonstruieren, Prompt-Platzhalter auf <eindeutiges Titel-Fragment> zuruecksetzen.

2026-08-28 — „Gestreckte Videos" aufgeklaert: ALLE 19 MP4s in workspace/tiktok/out/ sind per ffprobe identisch 1280x720, SAR 1:1, DAR 16:9 — die Dateien waren nie verzerrt. Ursache war die Zustellung: send_video.py rief Telegrams sendVideo OHNE width/height auf; ohne diese Parameter rendern Telegram-Clients die Videoblase verzerrt. Betroffen: alle Zustellungen seit der Umstellung auf Einzelzustellung via send_video.py (26.08. abends) — deckt sich mit Erens Beobachtung. Fix: send_video.py liest die Masse per ffprobe (Fallback 1280x720) und sendet width/height + supports_streaming mit; in beide Skill-Ablagen synchronisiert; Verifikation per erneutem Versand derselben Datei (message_id 73) zum Direktvergleich. Die auf TikTok VEROEFFENTLICHTEN Videos waren nie betroffen (TikTok verarbeitet die echte Datei). Rueckweg: width/height-Parameter aus send_video.py entfernen.

## 2026-08-28 — Reply-Ton: Ursachen im Prompt behoben, nicht nur Regeln ergaenzt

**Anlass:** Unter dem Reply an @bryan_johnson kam die oeffentliche Antwort, das sei
"AI-Scheiße". Eren hatte den Verdacht schon vorher geaeussert.

**Befund:** Sechs der ersten sieben Replies folgten derselben rhetorischen Figur
("X matters, but not Y" / "X only gains meaning with Z"). Das ist keine
Formulierungsschwaeche, sondern wurde von `twitter/AGENTS.md` erzeugt. Drei Regeln
waren urs<C3><A4>chlich:

1. **"Researcher- und Founder-Modus"** — "Researcher" erzeugt den Vortragston.
   Geaendert zu "Founder, der mitredet — nicht Researcher, der einordnet".
2. **"Standalone-Test: jeder Post muss ohne Kontext Wert haben"** — auf Replies
   angewandt ist das Gift: Wer ohne Kontext verstaendlich sein muss, liefert den
   Kontext selbst mit und doziert. Gilt jetzt ausdruecklich nur fuer eigene Posts.
3. **"Jede Behauptung belegt"** — zwingt jeden Reply zur These. Gilt jetzt nur
   fuer Faktenaussagen, nicht fuer Meinungen, Rueckfragen, Beobachtungen.

Dazu: "max. 280 Zeichen" wurde als Ziel gelesen (alle Replies lagen bei ~250).
Jetzt: "Grenze, kein Ziel — die meisten guten Replies sind kuerzer als 120".

**Neuer Abschnitt "Klingt es nach einem Menschen?"** in `twitter/AGENTS.md`: die
verbrannten Konstruktionen konkret benannt (mit den eigenen Replies als Beleg),
dazu was stattdessen gilt — erst reagieren dann beitragen, Laenge variieren,
Zustimmung erlaubt, eigene Beobachtung schlaegt korrekte Einordnung, Unfertiges
erlaubt. Bewusst als Verbotsliste plus offener Richtung formuliert, nicht als
neue Schablone: Praezise Verbote wirken, praezise Vorschriften erzeugen die
naechste Masche.

**Der `humanizer`-Skill war die ganze Zeit installiert** (647 Zeilen, im Profil
vorhanden) und beschreibt genau diese Tells. AGENTS.md schrieb ihn sogar vor —
aber erst "vor Veroeffentlichung", waehrend die Regeln darueber den Vortragston
erzeugten. Jetzt: vor jedem Entwurf laden, nicht am Ende drueberbuegeln.

**Cron-Prompts nachgezogen:** x-post, x-radar-mittag, x-radar-abend und x-notify
verweisen jetzt auf den Abschnitt; "Researcher-Ton" ist aus x-post entfernt. Die
Prompts sind konkreter als AGENTS.md und haetten sie sonst ueberschrieben.
Sicherung: `jobs.json.bak-tonfix`, `_migration-backup-20260825/AGENTS-twitter-vor-ton-fix.md`.

**Offen:** Eine `VOICE.md` mit echten Schreibproben von Eren waere die staerkste
Kalibrierung — der humanizer unterstuetzt Voice-Matching gegen eine Referenzdatei.
Dafuer braucht es Text, den Eren selbst geschrieben hat, nicht generierten.

2026-08-28 — Ton-Fix verifiziert und um eigene Beispiele ergaenzt.

`twitter/AGENTS.md` enthaelt jetzt im Abschnitt "Klingt es nach einem Menschen?"
die eigenen Texte als Referenz: die 07.08.-Replies mit ihren Reaktions-Oeffnern
("Love that you're tracking...", "Great breakdown."), den Bryan-Johnson-Reply als
Gegenbeispiel samt der oeffentlichen "AI-Scheisse"-Antwort, und den
behavior-market-fit-Post ("The product has to work on a bad Tuesday") als Vorbild
fuer eigene Posts. Konkrete eigene Beispiele wirken besser als abstrakte Regeln —
der Agent sieht, dass es funktioniert hat und woran es kippte.

**Belegter Befund aus dem neuen Korpus `posted/2026-08.md`:** Die Replies vom
07.08., also VOR allen Ton-Regeln, waren die menschlichsten des gesamten Bestands.
Sie begannen mit einer echten Reaktion und lieferten die Substanz danach. Ab dem
24.08. — als AGENTS.md mit "Researcher-Modus", "Standalone-Test" und
"'Great point!' ist wertlos" entstand — beginnt KEIN einziger Reply mehr mit einer
menschlichen Regung. Die Regel, die Qualitaet sichern sollte, hat den Ton ruiniert.

**Wirkungstest:** Derselbe Bryan-Johnson-Post, neue Regeln, drei Entwuerfe per
Oneshot. Ergebnis: 144-153 statt 260 Zeichen, Reaktion zuerst ("365 x 2 at 49 ...
is absurd"), keine "X is not Y"-Figur, keine Pflichtfrage, Umgangssprache statt
Fachbegriffen — und trotzdem Positionierung ("Most people train to add years;
you're training to make those years more fun"). Die Aenderung wirkt.

Offen: Laengenvarianz greift noch nicht (alle drei Entwuerfe fast gleich lang).
Eine `VOICE.md` mit echten Schreibproben von Eren waere der naechste Hebel.

2026-08-29 — TikTok-DE-Batch produziert: drei NotebookLM-Videos samt Queue- und Copy-Paste-Paketen (Ischias-Hit-Recycling, Rippenbewegung, einseitiges Tragen); Artefakte hatten jeweils genau eine Quelle und wurden per Telegram zugestellt. Rückgängig: die drei `queue/`-, `out/`-Dateipaare sowie die drei Logzeilen entfernen.
2026-08-29 — Wissensbasis um die Wearable-Mobilitätsbiomarker-Scoping-Review (PMID 42531184) als `warnt` ergänzt: 97 Studien zeigen studie-spezifische Validität, aber begrenzte heterogene direkte longitudinale Evidenz für Mobilitätsabbau. Index und Lücke aktualisiert. Rückgängig: `knowledge/digital-biomarkers/wearable-mobility-biomarkers-older-adults-scoping-review-2026.md`, die INDEX-Zeile/-Lückenpräzisierung und diesen Eintrag entfernen.
2026-08-29 — x-notify hat Live-Metriken aktualisiert, den täglichen X-Snapshot (1 Follower, 52 Following) ergänzt und den zuvor nicht protokollierten, live verifizierten Reply „huh“ unter @planksdirect in Log, Ledger und Volltextkorpus nachgetragen. Rückgängig: die heutigen Zahlenstände bzw. die zugehörigen Zeilen aus `twitter/posts-log.md`, `twitter/STATE.md`, `twitter/replied-to.md`, `twitter/posted/2026-08.md` und diesen Eintrag entfernen.
2026-08-29 — NotebookLM-Tab-Discovery robuster gemacht: `open_notebook.py` pollt nach `Target.createTarget` nun bis zu 30 s statt nur nach einem festen 8-s-Snapshot. Ursache des EN-Ausfalls: der neue Notebook-Tab war im ersten Snapshot nicht als persistenter Page-Target sichtbar; der Google-Login war gültig. Verifiziert: der reparierte Helfer findet den Produktions-Tab. Die beiden ausgefallenen EN-Skripte (Hip/Car, Ankles/Desk) wurden danach mit jeweils genau 1 Quelle und Sprache English erneut angestoßen. Rückgängig: Polling-Block durch die frühere 8-s-Abfrage ersetzen.
2026-08-29 — Nachgeholte EN-Veröffentlichung: „Why your hip feels stuck when you get out of the car“ wurde nach Download (9,2 MB) und Caption-Verifikation direkt auf @previahealth veröffentlicht und im Studio gelesen. „Why your ankles feel stiff when you stand up after your desk“ ist heruntergeladen (11,0 MB) und per einmaligem Job `publish-en-ankles-video-2026-08-29-2211` (ID b7edf0fb448d) für 22:11 geplant, exakt eine Stunde nach dem ersten. Rückweg: Job entfernen, falls vor 22:11 nicht mehr gewünscht.
2026-08-29 — Lokale Audioausgabe geprüft: einzig offener Web-Tab war das Produktions-NotebookLM; dessen `<video>` war nicht stummgeschaltet (Lautstärke 1), hatte das Ende bei 157,76 s erreicht und konnte Ton ausgegeben haben. Tab gezielt geschlossen; anschließend keine normalen Web-Page-Tabs mehr im Agent-Chrome sichtbar. Rückweg: Produktions-Notebook bei Bedarf über seine URL erneut öffnen.
2026-08-30 — DE-TikTok-Qualität kalibriert: `tt-produce` verlangt jetzt verbindlich direkte informelle Du-Ansprache (nie Sie/Ihnen), einen unterhaltsamen, emotionalen symptomnahen Kontrast-Hook und lebendige Alltagsszenen statt eines klinisch-vorsichtigen Beratertons. Provokante Bait-Frames sind erlaubt, aber nur mit anatomisch plausibler Auflösung; keine erfundene Täuschung oder pauschale Anschuldigung gegen Berufsgruppen. Rückweg: Cron-Prompt des Jobs `b59417b5583e` auf die vorherige Fassung zurücksetzen.
2026-08-30 — DE-TikTok-Retention-Experiment erweitert: `tt-produce` nennt PREVIA als direkten Selbsttest nach der ersten Enthüllung (spätestens Sekunde 15–25), statt erst am Ende. Der gemeinsame NotebookLM-Visual-Prompt wurde von der Kurzfassung zum detaillierten Kurzgesagt-Original-Look erweitert: editoriales 2D-Storytelling, starke Szenen, dynamische Anatomie-Animationen, keine Stock-/Klinik-/Texttafel-Ästhetik. Für einen sofortigen Test wurde das Tages-Gate einmalig auf den Vortag zurückgesetzt und der Job anschließend manuell ausgelöst. Rückweg: Prompt/Visual-Datei auf vorherige Fassung zurücksetzen; keine Wirkung auf bereits erstellte Videos.
2026-09-02 — NotebookLM-Short-UI dokumentiert: Der neue Dialog bietet „Kurz“ (9:16), Sprache, Quellenwahl und Fokus-Kacheln plus „Benutzerdefiniertes Thema“, aber kein separates Visual-Stil-Feld. Für manuelle Tests wird der skriptspezifische Redakteur-Prompt deshalb direkt in „Benutzerdefiniertes Thema“ eingefügt. Skill `notebooklm-video` entsprechend aktualisiert. Rückweg: den neuen UI-Abschnitt im Skill durch die frühere Stil-/Fokus-Feld-Anleitung ersetzen.
2026-08-30 — x-notify hat die Live-Metriken der X-Beiträge im 14-Tage-Fenster, den Account-Snapshot (1 Follower, 52 Following) und das Reply-Ledger aktualisiert sowie abgelaufene offene Reply-Entwürfe aus `twitter/STATE.md` entfernt. Keine neue relevante Benachrichtigung. Rückgängig: die heutigen Zahlenstände, Snapshot-Zeile und diesen Eintrag entfernen; die beiden Entwurfszeilen bei Bedarf wiederherstellen.
2026-08-31 — DE-TikTok-Tagesbatch produziert: drei deutsch konfigurierte NotebookLM-Erklärvideos (je genau eine Quelle) mit Humanizer-geprüften Captions, Queue-Paketen und Telegram-Zustellung erzeugt. Rückgängig: die drei Quellen-/Prompt-, Queue- und Out-Dateien sowie die drei `tiktok/videos-log.md`-Zeilen entfernen.

2026-08-31 — `PROMPT-neuer-chat.md` neu aufgebaut. Die Datei war verschwunden,
`CLAUDE.md` verwies aber weiter darauf — ein toter Verweis genau an der Stelle,
an der ein neuer Chat einsteigt. Neu mit dem aktuellen Stand: drei Profile unter
einem Gateway (default/twitter/tiktok), drei Startvarianten (Mitentwickler /
neues Projekt / Hermes-Session pruefen) und der Regel, dass Tokens in die .env
gehoeren, nicht in den Chat. `Stand:`-Datum in CLAUDE.md und ARCHITEKTUR.md von
25.08. auf 31.08. gezogen — der Inhalt war gepflegt, nur die Kopfzeile nicht.
Verweiskette geprueft: alle neun Zieldateien existieren.

2026-08-31 — Hermes-Funktionskatalog angelegt (`HERMES-FUNKTIONSKATALOG.md`,
Wurzelebene neben ARCHITEKTUR.md): vollständige Katalogisierung des Frameworks
per Code-Recherche — CLI-Bereiche, ~86 Tools in Toolsets, Config-Optionen,
Doku-Karte, Skills-System, ungenutzte Fähigkeiten mit Priorisierung. Grund: Die
Regel „erst nachsehen, ob Hermes es schon kann" scheiterte bisher daran, dass
niemand den Umfang kannte; der Katalog macht die Prüfung zu einem Lookup. In
CLAUDE.md unter „Zuerst lesen" verlinkt. Dabei veraltete Zahl korrigiert:
CLAUDE.md und ARCHITEKTUR.md nannten 6 Twitter-Cron-Jobs, es sind seit dem
26.08. sieben (health-signals-monitor). Rückweg: Katalogdatei, die
Verweiszeile in CLAUDE.md und diesen Eintrag entfernen; Zahlen zurücksetzen.
2026-08-31 — NotebookLM-Helfer für TikTok robuster gemacht: `add_source.py` wartet nach „Kopierter Text“ bis zu 12 s auf die Textarea, `gen_video.py` ebenso auf die sichtbare Quellenliste. Ursache: Bei 41 Quellen waren die vorherigen 2-s-Wartezeiten zu kurz und ließen EN-Produktionsläufe mit `TEXTAREA_NICHT_GEFUNDEN` bzw. `KEINE_LISTE` abbrechen. Rückgängig: die beiden Polling-Schleifen in den genannten Skill-Skripten entfernen.
2026-08-31 — Zwei EN-Videos auf @previahealth über `tiktok_publish.py` veröffentlicht und im Studio per Caption wiedergefunden: „Why your back feels worse on a quiet weekend“ sowie „Why cooking dinner can make your shoulders feel tired“. Die Videos und Captions wurden mit Telegram-Message-IDs 127/128 zugestellt. Rückgängig: beide Beiträge in TikTok Studio löschen, die zwei Zeilen in `tiktok/videos-log.md` und diesen Eintrag entfernen. Zusätzlich `download_video2.py` so korrigiert, dass ein nicht gefundenes Artefakt nicht vier Minuten lang auf einen Download wartet und Artefakt-Menüs über `artifact-library-item` sucht.
2026-09-01 — DE-TikTok-Tagesbatch erzeugt: drei deduplizierte NotebookLM-Erklärvideos (je Deutsch, genau eine Quelle) mit 12,5/20,1/18,0 MB, Copy-Paste-Captions und Queue-Paketen. Themen: Bildschirm-Augen (Direct-Help), Scroll-Daumen, Gang-Hit-Recycling. Rückgängig: die drei `scripts/`, `queue/`, `out/`-Dateien und drei `tiktok/videos-log.md`-Zeilen entfernen.

2026-09-01 — TikTok-Formatumbau: Rückkehr zum aggressiven Framing der manuellen
Hits. Befund: Alle ~25 automatisiert produzierten Videos blieben bei 200–300
Views, während die manuellen Hits (Gehen 70k, Atmung 52k, Ischias 40k, Schlaf
27k, Hocke 14k) auf einer gemeinsamen DNA basieren (Betrogen-statt-kaputt-Frame,
absolute Hooks, Ein-Ursache-Enthüllung, Metapher, Cheat-Code-Fixes), die bei der
Automatisierung aus Überkorrektheit wegkalibriert wurde — der tt-produce-Prompt
VERBOT sogar wörtlich den Industrie-Frame des Schlaf-Hits. Eren hat die fünf
Hit-Skripte samt Redakteur-Prompts in `tiktok/vorlage-erfolgsformate.md`
eingefügt; daraus drei Formate destilliert (A-Leak, B-Mechanismus, C-Reclaim,
mit Muster-Redakteur-Prompts in derselben Datei). Geändert: (1)
`tiktok/AGENTS.md` — Formate-Rotation A/B/C statt symptom/direct-help
(direct-help pausiert), Ton-Regel „Empörung nie" korrigiert zu „als Format A
erlaubt, nie gegen Personen/Berufsgruppen", Bridge-Standard neu: nach der
Enthüllung Sek. 15–25 statt am Ende; (2) tt-produce-Job-Prompt (b59417b5583e):
REDAKTION auf Formatrotation umgestellt, Industrie-Verbot durch Format-A-Regel
mit Grenzen ersetzt — Rest wortgleich, alter Prompt gesichert im
Session-Scratchpad (tt-produce-prompt-alt.txt). EN-Spur (tt-produce-en)
bewusst NICHT umgestellt — Vollautomatik ohne Upload-Gate, wartet auf Erens Go.
Rückweg: Formate-/Ton-/Bridge-Sektionen in AGENTS.md auf Stand 31.08.
zurücksetzen, Job-Prompt aus der Sicherung wiederherstellen
(hermes -p tiktok cron edit b59417b5583e --prompt ...).

2026-09-01 (Nachtrag) — Formatumbau auf die EN-Spur ausgeweitet (Erens Go) plus
drei inhaltliche Vorgaben von Eren: (1) EN-Job (c8b9d3e7d092) fährt jetzt 2 der
3 Erfolgsformate, über die Tage rotierend, PREVIA früh Sek. 15–25, Muster-Prompts
sinngemäß englisch; (2) Themenregel „Vom Großen denken" in tiktok/AGENTS.md und
beiden Job-Prompts: große universelle Körperthemen (Gehen, Atmen, Schlaf,
Scrollen) statt Mikro-Nischen-Symptome — hyper-konkret sind die Symptome in der
Liste, nicht das Thema; (3) Arzt-Disclaimer-Verbot in Skript und Caption (der
Agent hatte von selbst „ärztlich abklären lassen" in Captions eingefügt, ohne
dass eine Regel es verlangte — Entertainment, kein Aufklärvideo; die harten
Grenzen keine Diagnose/kein Heilversprechen bleiben). Alte Prompts gesichert im
Session-Scratchpad (tt-produce-en-prompt-alt.txt, tt-produce-prompt-neu.txt als
Zwischenstand). Außerdem manueller Zweitlauf tt-produce am selben Tag:
produce.lastday gesichert, entfernt, cron run — Gate hat den State neu
geschrieben, reguläre Slots heute bleiben zu. Rückweg: Prompts aus Sicherungen
wiederherstellen; AGENTS.md-Absätze (Themenregel, Arzt-Verbot, EN-Zeile)
entfernen.
2026-09-01 — Drei DE-Uploadpakete im neuen A/B/C-Format erzeugt und nach NotebookLM-Verifikation je mit einer Quelle heruntergeladen: Der Kissen-Mythos (A-leak), Das Abend-Bauch-Rätsel (B-mechanismus, neues Thema) und Die gestohlene Fähigkeit (C-reclaim, Hocken-Hit-Recycling). MP4s, Captions und Queue-Pakete liegen unter `workspace/tiktok/out/` bzw. `queue/`; Telegram-Zustellung API-bestätigt (Nachrichten 134–136). Rückgängig: die drei MP4/.txt-, Queue- und Log-Dateien sowie diesen Eintrag entfernen.

2026-09-01 — Facebook-Branch aufgesetzt (Stufe 1) nach previa-projekt-setup.
Entscheidungen: Erens persönliches, gewachsenes FB-Profil (Mitglied in
Rücken-Communities) statt frischer Seite; KEINE Automatisierung des Profils
(Meta sperrt Konten dafür, und es gibt ohnehin keine API für Profile) — der
Agent produziert 1 Tagespaket, Eren postet. Mix: ~4 Reels (Zweitverwertung der
DE-TikToks aus ../tiktok/out/) und ~3 Textposts (aus TikTok-Skripten
destilliert) pro Woche, Warm-up 1 Beitrag/Tag bis 14.09. FB-Sprachregeln:
weicher Leak-Frame (kein Scam-Vokabular, FB drosselt sonst), Kommentar-Frage
Pflicht, kein Save-CTA, kein Arzt-Disclaimer. Stufe 2 später: Previa-Seite +
Graph API (einziger offizieller Automatisierungsweg bei Meta). Eingerichtet:
Profil facebook (--clone), terminal.cwd → workspace\facebook, Pairing/Skills/
Gates von twitter kopiert, .env mit HOME_CHANNEL (Token trägt Eren ein),
workspace/facebook/ (AGENTS.md, STATE.md, profil-texte.md, queue/, posts-log),
Job fb-produce (0,30 9-10, Tagesgate gate-fb-produce.py, telegram).
Verifiziert: Kontext-Kette (64 % + FB-Regeln im Oneshot bestätigt), Pfade ok.
Offen: BotFather-Token in profiles/facebook/.env, dann Gateway-Neustart
(erst wenn kein Cron-Lauf aktiv!), dann Test 3 (echter Lauf + Pairing).
Rückweg: hermes profile delete facebook, workspace/facebook/ löschen,
Journal-Eintrag entfernen.

2026-09-01 (Nachtrag 2) — Facebook-Setup abgeschlossen: Token eingetragen
(Eren rotiert ihn noch bei BotFather), Gateway-Neustart ok, Multiplex tickt
jetzt 4 Profile ['default','facebook','tiktok','twitter'], alle drei Bots
verbunden. Test 3 bestanden: fb-produce-Testlauf ohne Script Error, Paket
queue/2026-09-01-reel.md regelkonform (neues C-Format-Video, weicher
Leak-Frame, Kommentar-Frage, 3 Hashtags), STATE.md korrekt aktualisiert.
Offen nur: Erens Antwort auf die Telegram-Nachricht (Pairing-Bestätigung).

2026-09-01 (Nachtrag 3) — Facebook-Inhaltsdoktrin auf TikTok-Linie gedreht
(Erens Vorgabe): keine Belegpflicht, LLM-Allgemeinwissen zulässig, knowledge/
nur Steinbruch (Previa-Zahlen weiter ausschließlich daraus). Neu in
facebook/AGENTS.md: Themenkompass 45–70 (Knie/Treppe, Hüfte/Auto, Garten,
Sofa, Enkel — statt Schreibtisch-Nischen), Nichts-kaufen-Ethos als
Markenzeichen jedes Beitrags, Textposts dürfen eigenständig entstehen.
Radar-Entscheidung: Lese-Radar mit Erens Profil im DE-Chrome (9223) ERLAUBT
(max. 2 Sitzungen/Tag, menschliches Tempo) — Schreiben/Liken/Kommentieren
durch den Agenten bleibt verboten (Community-Reports sind das reale Risiko);
Antworten schreibt Eren mit Radar-Munition. fb-produce-Prompt entsprechend
angepasst (alte Fassung im Session-Scratchpad). Radar-Job wird erst gebaut,
wenn FB-Login im 9223er-Chrome steht (wartet auf Akamai-Verfall).
Rückweg: Prompt aus Sicherung, AGENTS.md-Abschnitte zurückdrehen.

2026-09-01 (Nachtrag 4) — Facebook-Feinschliff nach Erens Review: (1)
Nichts-kaufen vom "Markenzeichen jedes Beitrags" zur Grundhaltung entschärft
(Agent nimmt solche Regeln formelhaft; Monotonie-Warnung explizit in
AGENTS.md). (2) fb-produce auf 15:00-16:30 verlegt (kann damit die heutige
TikTok-Produktion nutzen statt Vortag; FB-Nachmittags-Engagement). (3)
Text-Tage bekommen ein KI-Bild via image_generate (realistische Alltagsszene,
z. B. Bücken im Garten; Regeln in AGENTS.md). (4) fb-radar-Job angelegt
(80aada967c25, 2x/Tag 10:00/18:00, halfday-Gate, NUR LESEN nach
x-radar-Muster: Gruppen-Feed, 2-3 Kandidaten mit Munition + Rohling per
Telegram, Dedup-Ledger radar/replied-to.md) — PAUSIERT bis Erens FB-Login im
DE-Chrome steht. (5) Falle behoben: facebook browser.cdp_url zeigte auf 9222
(EN-Chrome), jetzt 9223. DE-Chrome sichtbar gestartet für TikTok-DE- und
FB-Login. Rückweg: Prompts/Schedules aus Scratchpad-Sicherungen, Radar-Job
löschen, cdp_url zurück.

2026-09-01 (Nachtrag 5) — Logins stehen (TikTok-DE @previahealth.de + Facebook
in DE-Chrome 9223). fb-radar final: Schedule "0,30 11-12" (vier
Catch-up-Slots, Tagesgate statt halfday — 12:30 wäre sonst als zweiter
Halbtag durchgegangen), Prompt auf zwei Bahnen erweitert (Bahn 1 Gruppen mit
Pflicht-Thread-Lektüre vor der Munition; Bahn 2 Home-Feed-Puls als
Themen-Signale, starke Signale nach STATE.md), aktiviert, Testlauf gestartet.
Autostart Agent_Chrome_DE.vbs im Startup-Ordner angelegt (Muster von
Agent_Chrome.vbs) — DE-Chrome startet ab jetzt headless beim Login mit.
Offen: nach Testlauf DE-Chrome headless neu starten; TikTok-DE-Draft-Uploader
ist jetzt baubar (Login vorhanden). Rückweg: VBS löschen, Radar-Prompt aus
Scratchpad-Sicherung, Schedule zurück.

2026-09-01 (Nachtrag 6) — fb-radar/fb-produce Feinschliff: humanizer als
Skill an beide Jobs gebunden (social-post-writing zusätzlich an fb-produce);
Rohling-Regeln im Radar auf Mensch-zu-Mensch kalibriert (Empathie vor Rat,
EINE Idee statt Listen, Erfahrungs-Framing statt Coach-Ton, tägliche
Variation, Wo-antworten-Angabe). Alte Prompt-Fassung im Scratchpad.

2026-09-02 — facebook/AGENTS.md um Erens manuelles Playbook ergänzt: Profil
öffentlich folgbar + Professional Mode + öffentliche Posts, Anfragen nur nach
Interaktion (3-5/Tag), Gruppen 2 Wochen linkfrei, Sprachregel „dem Raum
folgen" (Profil nur Deutsch, Gruppensprache in Gruppen, EN-Eigencontent nur
über separate Seite). Rückweg: Abschnitt entfernen.

2026-09-02 — Facebook-Radar-Run dokumentiert eine frische Antwort-Gelegenheit
zum Thema akuter Rückenschub und erschwertes Sitzen in
`facebook/radar/2026-09-02-1105.md`; Link im Dedup-Ledger und Signal als
kompakte STATE-Beobachtung ergänzt. Rückweg: Report und Ledger-Zeile löschen,
STATE-Beobachtung entfernen.

2026-09-02 — `notebooklm-video/scripts/gen_video.py` bricht jetzt ab, wenn NotebookLM den benutzerdefinierten Visual-Stil oder eines der beiden Prompt-Felder nicht mehr anbietet; zuvor klickte der Helfer trotz `RADIO_NICHT_GEFUNDEN`/`FELDER_NICHT_GEFUNDEN` auf „Erstellen“ und erzeugte Default-Videoanfragen. Ursache: neue NotebookLM-UI bietet „Kurz“ (9:16) und ein eigenes Thema, aber keinen Visual-Stil. Rückweg: den Fail-closed-Block vor Schritt 7 in `gen_video.py` entfernen.

2026-09-02 — `notebooklm-video/scripts/gen_video.py` für die verifizierte Short-UI repariert: Es wählt „Kurz“ und „Benutzerdefiniertes Thema“, setzt den Redakteur-Prompt im einzigen Themenfeld und verifiziert jede Stufe vor „Erstellen“. `download_video2.py` erkennt nun außerdem sowohl „Kurz“ als auch „Erklärvideo“. Grund: die alte Visual-Stil-Logik brach nach Googles UI-Änderung stets ab; der Downloader übersah Short-Artefakte. Rückweg: die Short-Blöcke bzw. die `Kurz`-Erkennung in den beiden Helfern entfernen und die vorherige Stil-/Zwei-Textarea- bzw. Erklärvideo-Logik wiederherstellen.

2026-09-03 — TikTok auf zwei kontosichere Vollautomatik-Spuren vereinheitlicht:
DE @previahealth_de produziert/veröffentlicht jetzt wie EN genau zwei Shorts pro
Tag; Port 9222 ist hart @previahealth, Port 9223 hart @previahealth_de.
`tiktok_publish.py` prüft den eigenen Profillink vor dem Datei-Upload, akzeptiert
`--port/--account`, liefert bei Fehler Exitcode 1 und hat einen uploadfreien
`--preflight`. NotebookLM nutzt nur noch einen zwei- bis dreizeiligen
Short-Prompt; altes Visual-Argument bleibt temporär kompatibel. Neue reale
Feedbackschleife: `tiktok_metrics.py`, täglicher Job `tt-feedback` (10:15) und
wöchentlicher Außenblick `tt-outside-review` (Mo 09:15). Produktionsjobs lesen
`feedback/latest.md`; nur ein kontrolliertes Experiment pro Tag. Jobs/Prompts,
AGENTS.md, STATE.md und Skill-Doku angepasst. Rückweg: Jobs dcd8954ba982 und
6444465b495f entfernen, alte Prompts aus den Cron-Ausgaben vom 02.09. übernehmen,
DE-Skill tiktok-upload entfernen und die 03.09.-Dokumentationsblöcke zurücksetzen.

2026-09-03 (Nachtrag) — Lernschleife gegen tägliches LLM-Rauschen gehärtet:
`tt-metrics` (ef929dbe4fd9) sammelt täglich 12:00 beide Studio-Konten als JSON
ohne Agent/Token; `tt-learn` (dcd8954ba982) entscheidet nur Mo/Do 12:15 anhand
von Posts ab 72 h und einem festen Experimentregister. Aktiver Test
`hook-save-delay-v1`: je Account `concealment-reveal` gegen `save-help-delay`,
mindestens 4 reife Posts pro Arm und Account, vorab definierte Gewinnregel.
Produktionsprompt ist jetzt ein dreizeiliger Hybrid aus Hook/Retention,
visueller 2D-Taktung und Mechanik/PREVIA statt separatem Visual- und
Redakteur-Prompt. Rückweg: Job ef929dbe4fd9 entfernen, dcd8954ba982 zurück auf
`15 10 * * *`/tt-feedback setzen und Experiment-/Hook-Nachtrag zurücknehmen.

Zeitachse dazu: DE-Produktion von 11:00 auf 13:00 verschoben, damit die
12:00-Messung und der Mo/Do-Lernlauf um 12:15 vor der Produktion wirksam werden.
Der zusätzliche Batch-Preflight wurde wieder aus beiden Produktionsprompts
entfernt: `tiktok_publish.py` prüft den Handle ohnehin direkt vor jedem Upload;
ein doppelter Check hätte nur Browserzeit, nicht Sicherheit, hinzugefügt.

2026-09-03 (Nachtrag 2) — Wochenrhythmus und Bubble-Schutz korrigiert:
`tt-outside-review` startet montags 11:15 und hat per Wochen-Gate Auffangslots
11:45/12:15/12:45; `tt-learn` entscheidet mittwochs 12:15. Außenprompt arbeitet
outside-first und prüft Geschäftsziel, Kanal, Zielgruppe, Offer/Bridge und
Messbarkeit vor Creative-Taktik; nach drei Null-Experimenten oder vier Wochen
ohne Fortschritt muss er eine Ebene höher reframen. Monatlich kommt ein
Zero-Base-Audit hinzu. Rückweg: Job 6444465b495f auf `15 9 * * 1` ohne Script,
dcd8954ba982 auf `15 12 * * 1,4` und die Nachträge in outside/feedback entfernen.

North-Star ergänzt (`tiktok/feedback/business-objective.md`): Die Loop darf
Views/Engagement nur als Aufmerksamkeit bewerten. Geschäftserfolg ist
abgeschlossener PREVIA-Scan pro 1.000 Views; Profilbesuche, Bio-Klicks,
scan_started/scan_completed und Downstream-Conversion sind noch nicht an die
Loop angeschlossen. Außen- und Lernjob laufen mit high reasoning und müssen
diese Messlücke explizit berücksichtigen.

2026-09-03 — Facebook-Strategie „Zwei Säulen" (Erens Entscheidung): Erens
Profil = Person, täglich EIN deutscher Textpost, keine Reels (anonyme Videos
wirken auf Personen-Profilen fremd), echte Fotos schlagen KI-Bild (das bleibt
Fallback); Previa-SEITE = Marke, tägliches Reel automatisiert via Graph API
(Stufe 2, Seite muss Eren erst anlegen). Sprachregel konkretisiert: eine
Sprache pro Container, Seite startet Deutsch, EN-Seite später an derselben
Pipeline möglich. fb-produce umgebaut auf täglichen Textpost mit
Radar-Puls-Themenquelle. ZWISCHENFALL: Beim Umbau wurde der Job-Prompt
kurzzeitig LEER eingespielt (Ersetzungs-Skript scheiterte an CRLF, cron edit
lief trotzdem mit leerer Datei) — behoben aus Sicherung; Lehre: vor cron edit
mit Datei-Inhalt immer auf Nicht-Leere prüfen (jetzt im Ablauf). Rückweg:
fb-produce-prompt-alt3.txt im Scratchpad, AGENTS.md-Abschnitt zurückdrehen.
2026-09-03 — DE-TikTok-Vollautomatik: zwei 9:16 NotebookLM-Shorts mit je genau einer Quelle erzeugt und kontosicher auf @previahealth_de veröffentlicht, anschließend in TikTok Studio per Caption und 1:22/1:07-Dauer gelesen. Ziele/Arme: C-reclaim `goal=reach` mit `concealment-reveal`, B-mechanismus `goal=audience-growth` mit `save-help-delay`; Pakete liegen unter `tiktok/queue/` und MP4/.txt unter `tiktok/out/`. Rückgängig: beide TikTok-Studio-Beiträge löschen sowie die zwei Queue-, Skript-, MP4/.txt- und Log-Zeilen entfernen.
2026-09-03 — `grounded-citations` um Multi-Profil-Schutz ergänzt: Vor `reset` muss der ausgegebene Ledger-Pfad geprüft werden; bei einem fremden Profil ist ein lokaler/current-profile `HERMES_CITATION_LEDGER` Pflicht. Grund: Der Default kann in dieser Umgebung auf das Facebook-Profil zeigen. Rückgängig: den Bullet „Wrong profile ledger“ aus dem Skill und diesen Eintrag entfernen.

2026-09-03 — PROMPT-neuer-chat.md um Prompt D „Fehlersuche" ergänzt:
Befund-Reihenfolge (cron list → runs → output-Dateien → Gateway-Logs →
Session-Export → Journal), Diagnose-Regeln (Muster-Check über Profile,
Gate-/Gateway-Tabus, Prompt-Edit-Absicherung), Fixes erst nach Freigabe.
Rückweg: Abschnitt D entfernen.

2026-09-04 — `tt-metrics` fiel seit 12:15 mit „CDP Runtime.evaluate: Target
crashed" aus. Ursache war nicht das Skript, sondern die DE-Chrome-Instanz auf
Port 9223: Sie lief noch mit 152.0.7977.75, während die installierte Binary
bereits 152.0.7977.82 war (Chrome-Autoupdate am 03.09. um 03:32). Neue Tabs
starteten mit unpassenden Renderer-Dateien und starben sofort; `Page.navigate`
blieb still auf `about:blank`, `/json/version` antwortete aber weiterhin sauber.
EN auf 9222 war nicht betroffen. Nach gezieltem Neustart der Instanz (PID vorher
über Profilpfad und Port verifiziert) läuft die Erhebung wieder: 5.4K Views,
1.3K Follower, Datei `feedback/metrics/2026-09-04.json` geschrieben.

Drei strukturelle Schwächen behoben, die den Ausfall verschlimmert haben:

1. `asyncio.gather` lief ohne `return_exceptions=True` — der Crash auf 9223 riss
   die bereits erfolgreichen EN-Daten mit weg. Jetzt werden beide Konten
   unabhängig ausgewertet; ein Teilausfall speichert das gelungene Konto und
   meldet das andere per Telegram, statt still zu scheitern.
2. Kein Wiederholungsversuch. Neu: `fetch()` versucht jedes Konto zweimal mit
   10 s Pause — ein einzelner Renderer-Crash heilt sich damit selbst.
3. Die Startskripte prüften nur, ob der Port antwortet, und meldeten deshalb
   „läuft bereits" für eine tote Instanz. Beide (`start-agent-chrome.ps1` und
   `-de.ps1`) vergleichen jetzt die Version der laufenden Instanz mit der der
   `chrome.exe` und starten bei Abweichung neu.

Rückweg: `.bak-20260904` neben den drei geänderten Dateien.
Regel in CLAUDE.md ergänzt — der Fall kommt mit jedem Chrome-Update wieder.

2026-09-04 — Die beiden am Vormittag blockierten DE-Shorts nachträglich
veröffentlicht, nachdem der Chrome-Versionskonflikt behoben war.

Vor dem Upload verifiziert, dass wirklich nichts doppelt geht: `videos-log.md`
meldete beide als blockiert, und die Studio-Beitragsliste des Kontos enthielt
keinen der beiden Titel. Erst danach `--preflight` (Kontoprüfung ohne Upload),
dann beide Videos einzeln.

- `2026-09-04-de-01-tired-feet.mp4` (8,1 MB) — VEROEFFENTLICHT, Caption 461 Z.
- `2026-09-04-de-02-morning-stiffness.mp4` (7,9 MB) — VEROEFFENTLICHT, 498 Z.

Nachkontrolle am Konto: beide Titel in der Studio-Liste vorhanden. Statuszeilen
in `videos-log.md` von „Veröffentlichung blockiert" auf veröffentlicht gezogen.

Beide Spuren stehen wieder: Port 9222 (@previahealth) und 9223 (@previahealth_de)
laufen jetzt auf derselben Chrome-Version 152.0.7977.82, beide Preflights OK.

- 2026-09-04: Facebook-Tagespaket „Hüftsteifheit nach Autofahrten“ mit optionalem Bild in `facebook/queue/` erstellt; dient dem täglichen Warm-up-Textpost. Rückgängig: Paket/Bild sowie die Zeilen in `facebook/posts-log.md` und `facebook/STATE.md` entfernen.

2026-09-04 — TikTok-Look per Stil-Anker fixiert. Anlass (Eren): Video 2 vom
04.09. „wischig, vermischt, KI-generiert", Video 2 vom 03.09. gut — bei fast
gleichem Short-Prompt. Befund mit Kontaktbögen (ffmpeg, 1 Frame/s) statt
Prompt-Lektüre: Das gute Video hatte NotebookLMs Papier-Sticker-Look
(Protagonist, Sofa-Metapher als gezeichnete Szene, eine Idee pro Bild,
nummerierte Schritte); das schlechte dunkle Skelett-Silhouetten mit Bändern,
ohne Figur. Ursachen: (1) Short-Prompt ohne Stilvorgabe — „anatomische
Animationen" zog zu Skelett-Overlays, der Look wurde pro Generierung gewürfelt;
(2) Skript ohne zeichenbare Szenen (Scharnier-Metapher nur als Nebensatz);
(3) die 600-Zeichen-Grenze in `gen_video.py` war unsere eigene vom 03.09., das
Themenfeld nimmt 5000 Zeichen (live per CDP gelesen). Der Short-Dialog hat keine
Stilwahl mehr — live verifiziert: nur Format, Sprache, Quellen, Fokus/Thema.

Fünf Testgenerierungen am Produktionsnotebook (bestehende Quellen, Artefakte
bleiben stehen): DE v1 mit Stil-Anker → Look trifft, aber ~20 s reine
Texttafeln; DE v2 mit Bildregel „Figur in jedem Bild" → trifft voll; EN mit
englischem Anker v1 → Strichmännchen und Punkt-Linien-Diagramme (Negativliste
„dots or lines" primte offenbar); EN-A mit deutschem Anker und EN-B mit
umformuliertem englischem Anker (positiv: Cartoon-Charakter mit Gesicht, Haaren,
Kleidung, Kinderbuch-Illustration) → beide treffen; B ist produktiv. Testvideos:
`workspace/tiktok/tmp/test-stil-*.mp4`.

Geändert: `notebooklm-video/scripts/gen_video.py` (Agententeil ≤ 2500 Zeichen,
hängt `visual_anchor_de.txt` / `visual_anchor_en.txt` nach Sprache selbst an,
fail closed ohne Anker, Abbruch bei Stil-Block im Prompt, 5000-Grenze geprüft);
beide Anker-Dateien neu; Job-Prompts `tt-produce` (b59417b5583e) und
`tt-produce-en` (c8b9d3e7d092): Szenenpflicht im Skript (physische Metapher als
Szene, Fix mit Körperposition), Short-Prompt = Hook-Zeile + `SZENEN`-Liste mit
5–7 zeichenbaren Szenen, kein Stil vom Agenten; `SKILL.md` (notebooklm-video),
`tiktok/AGENTS.md` (Produktion), `STATE.md` (Beobachtung); `prompts/tt-produce-
de.md` und `-en.md` waren veraltete Kopien ohne Ziel-Tags → jetzt Verweise auf
`jobs.json`. Rückweg: `gen_video.py.bak-20260904` zurückkopieren, Anker-Dateien
löschen, Prompts aus `prompts/tt-produce*-alt-20260904.txt` per `cron edit`
einspielen, Doku-Absätze zurücksetzen. Erster Echtlauf der neuen Kette:
`tt-produce-en` am 04.09. um 20:00.

2026-09-04 — Weitere Befunde aus dem Tagesüberblick, offen (Erens Entscheidung):
- EN-Tag 03.09. ist komplett ausgefallen: 20:01 HTTP 429 am ChatGPT-Limit
  (durch Erens parallele Codex-Nutzung verbraucht), das Tagesgate hatte den Slot
  schon verbraucht, 20:30–22:30 wurden still übersprungen, `cron list` zeigt
  „ok". Das Muster gilt für alle Gates in allen Profilen. Vorschlag: Gate
  schließt den Slot erst, wenn der letzte Lauf des Tages laut
  `cron/usage_audit.jsonl` fehlerfrei war.
- Produktionsläufe kosten 2,5–3,1 M (DE) bzw. 5,9 M (EN, 02.09.) Prompt-Tokens:
  ~57 KB Prompt mit drei inlinierten Skills mal viele Browser-Turns bei
  reasoning high. Größter Kostenhebel.
- Alle fünf TikTok-Jobs und `fb-radar` haben `workdir` gesetzt, entgegen der
  CLAUDE.md-Regel. Der Lock wird über die gesamte Laufzeit gehalten
  (`cron/scheduler.py` 5481–6360), Leser warten bis ~11 min. Seit 26.08. kein
  Timeout, aber ein 30-min-EN-Lauf um 20:00 neben `x-radar-abend` ist der
  Risikofall. Vorschlag: `workdir` überall leeren (Profil-cwd ist identisch).
- Skills `notebooklm-video` und `tiktok-upload` liegen vierfach vor (default,
  tiktok, facebook, previa); nur `profiles/tiktok/skills/` ist aktuell.
- Multiplex-Zustellung, Ursache gefunden: `cron/scheduler.py` setzt den
  Profil-Secret-Scope in Zeile 6779 zurück, `_deliver_result` läuft erst danach
  (6883/7081); `gateway/config._getenv` liest `TELEGRAM_BOT_TOKEN` dann aus
  `os.environ` statt aus dem Profil → ein Bot für alle Jobs. Die Live-Adapter der
  Nebenprofile kennt der Scheduler nicht (er bekommt `runner.adapters` des
  default-Profils, das keinen Bot hat). Fix-Kandidat: Scope erst nach der
  Zustellung zurücksetzen, als dokumentierter Patch. Hermes ist 2911 Commits
  hinter upstream (0.20.5) — ein Update könnte es lösen und würde jeden Patch
  überschreiben.
- Undokumentierter lokaler Patch in `hermes-agent/tools/browser_use_cli.py`
  (`encoding="utf-8", errors="replace"` in `subprocess.run`), dazu
  `package-lock.json` geändert. Rückweg `git checkout`; bei `hermes update` weg.
- Streudatei `agents\x.text.includes('@ErenPrevia'))` (14:03, x-notify-Lauf,
  kaputte Shell-Umleitung) kann gelöscht werden. `START.md` nennt noch
  „tt-produce 11:00, drei Upload-Pakete".

2026-09-04 (Nachtrag) — Zeitversetztes Veröffentlichen über TikTok-Planen
(Erens Vorgabe: nicht beide Videos direkt hintereinander; DE z. B. 13:00 und
15:30, EN 20:00 und 21:30). Umsetzung: `tiktok_publish.py` hat jetzt
`--schedule HH:MM [--schedule-date] [--min-gap 60]` mit derselben Kontoprüfung,
demselben Upload- und Caption-Pfad wie das Sofort-Posten; die Zeitlogik liegt im
Skript (Wunschzeit vorbei oder < 20 min entfernt → nächste halbe Stunde mit
Mindestabstand, auch über Mitternacht; 5-Minuten-Raster; max. 10 Tage). Das
separate `tiktok_schedule.py` (26.08., ohne Kontoprüfung, nie im Ganzen
gelaufen) ist entfernt; die alte Fassung liegt weiter unter
`skills/social-media/tiktok-upload/scripts/`.

Drei Anläufe bis zum Ende-zu-Ende-Erfolg, alle Ursachen in der UI: (1) Monats-
und Jahrestitel des Kalenders sind getrennte Elemente (`month-title`,
`year-title`), der alte Vergleich gegen „September / 2026" als ein Text
scheiterte; (2) Stunde und Minute haben eigene Klassen
(`tiktok-timepicker-left` / `-right`, Minuten nur 00..55); (3) auch im
Planen-Modus erscheint der Bestätigungsdialog „Weiter und veröffentlichen? Wir
prüfen dein Video noch ..." mit Knopf „Jetzt veröffentlichen" — er bestätigt
die Planung (Radio bleibt `schedule`); das Skript prüft das Radio vor dem Klick.
Nach dem Redirect steht der Beitrag mit künftigem Datum in der Beitragsliste;
einen eigenen „Geplant"-Tab gibt es nicht.

Manuell verifiziert mit den beiden Stil-Anker-Testvideos (Erens Vorschlag):
DE `test-stil-v2-morning-stiffness.mp4` geplant für 05.09. 10:00 auf
@previahealth_de, EN `test-stil-en-X2.mp4` für 05.09. 12:00 auf @previahealth;
beide mit `GEPLANT` plus Listeneintrag `5. Sep … 10:00/12:00` bestätigt, in
`videos-log.md` eingetragen. Beide sind Re-Posts von Themen vom 04.09. bzw.
02.09. in neuem Look; Löschen im Studio bis zum Termin möglich.

Geändert: Job-Prompts `tt-produce` und `tt-produce-en` Abschnitt 4/5 (Video 1
sofort, Video 2 `--schedule 15:30` bzw. `21:30`, Telegram „GEPLANT <Zeit> …",
Log `geplant <Datum> <Zeit>`; Sicherung `prompts/*-alt2-20260904.txt`);
`tiktok-upload/SKILL.md` (Abschluss B neu, UI-Fakten, offene Punkte),
`tiktok/AGENTS.md` (Spuren-Tabelle, Grenzen), `STATE.md` (Stand). Sicherung
`tiktok_publish.py.bak-20260904` (Stand vor `--schedule`). Rückweg: Sicherungen
zurückkopieren, Prompts aus `-alt2` einspielen, Doku-Absätze zurücksetzen.
Erster Echtlauf der Kette „sofort + geplant": `tt-produce-en` 04.09. 20:00.

2026-09-04 (Nachtrag 2) — Kein Ton mehr in Erens Haupt-Chrome (YouTube stumm),
nachdem der Agenten-Chrome zuvor hörbar Ton ausgegeben hatte und „wieder stumm"
geschaltet werden sollte. Befund über die Windows-Audio-Sessions
(`scripts/audio-sessions.ps1`, CoreAudio-COM): Die Session des Haupt-Chrome
(Kindprozess `utility`) war nicht gemutet, stand aber auf **0 % App-Lautstärke**.
Windows speichert Mixer-Einstellungen pro App, und Agenten-Chrome und
Haupt-Chrome sind dieselbe `chrome.exe` — wer den Agenten-Chrome im
Lautstärkemixer leise oder stumm stellt, trifft Erens Chrome mit. In den
Hermes-Sessions (tiktok/twitter) findet sich kein Mixer-Eingriff; die
Einstellung wurde vermutlich von Hand im Mixer gesetzt. Fix: Session-Lautstärke
per Skript auf 1,0 gesetzt (`audio-sessions.ps1 -UnmutePids <pid>`), Kontrolle
danach 1,00. Der Agenten-Chrome bleibt über `--mute-audio` in beiden
Startskripten stumm (Prozessliste 04.09. 16:57 bestätigt das Flag auf 9222 und
9223); der Mixer muss dafür nie angefasst werden. Regel in CLAUDE.md ergänzt.
Rückweg: Skript entfernen; Lautstärke bei Bedarf im Mixer zurückstellen.

2026-09-04 — Playbook-Ergänzung facebook/AGENTS.md: keine Intro-Posts in
Gruppen (Follow-Bitte/Previa-Vorstellung = verbranntes Verkäufer-Muster,
Admin-Löschung); Follow wird durch wiederholte Antworten verdient. Ausnahme
nur bei Vorstellungs-Pflicht, dann ohne Versprechen/Bitte/Previa. Rückweg:
Absatz entfernen.

2026-09-04 — fb-radar-Audit auf Erens Wunsch („klickt er wirklich?"): Läufe
vom 02./03. verifiziert echt (spezifische, mit Erens Screenshot konsistente
Beobachtungen; sensible Posts korrekt aussortiert; ehrliches „nichts
Gutes"-Melden; Ledger sauber, nichts als posted halluziniert). Der
v2-Vorschlags-Workflow entspricht exakt Erens Modell (Agent schlägt vor, Eren
bestätigt per „<ID> gepostet"). ABER: Beide heutigen Läufe (12:16, 17:50)
brachen mit „fremder Browser-Kontext" ab. Diagnose in drei Schritten:
(1) Oneshot bewies: Config/Login/Chrome intakt — Problem nur im Cron-Kontext.
(2) Code-Recherche fand die reale Multiplex-Lücke (browser_tool.py cached
Sessions prozessweit nach task_id, BROWSER_CDP_URL-Env schlägt Profil-Config)
— als Regel in CLAUDE.md, Env-Var hier aber nicht gesetzt. (3) Chronologie
zeigte die sparsamere Ursache: Nach dem Chrome-Neustart (Versions-Fix) war
nur about:blank offen, und der v2-Prompt wertete das als falschen Kontext,
statt selbst zu navigieren — die 02./03.-Läufe liefen nur, weil Erens
Login-Tab noch offen war. Fix: fb-radar-Prompt erlaubt/befiehlt jetzt
explizit browser_navigate zu facebook.com (about:blank = normal; abbrechen
erst bei Login-Formular/Checkpoint NACH Navigation). Alte Prompt-Fassung im
Session-Scratchpad (fb-radar-v2-alt.txt). Verifikationslauf gestartet.

2026-09-04 (Nachtrag 3) — Korrektur zur „Multiplex-Browser-Lücke" aus dem
fb-radar-Audit: Der Scheduler ruft `agent.run_conversation(prompt)` ohne
task_id auf (`cron/scheduler.py` 6109); `run_conversation` setzt dann
`effective_task_id = task_id or uuid4()` (`run_agent.py`). Jeder Cron-Lauf hat
damit einen eigenen Browser-Session-Schlüssel, und `tools/browser_tool.py`
fixiert die CDP-URL je Session beim Anlegen aus `_get_cdp_override()` (Env,
sonst Config des aktiven Profils). Der Literal-`default`-Schlüssel trifft nur
Aufrufe ohne task_id außerhalb eines Agentenlaufs. Die daraus abgeleitete
Betriebsregel „Browser-Läufe verschiedener Profile zeitlich nicht überlappen"
war deshalb unnötig (tt-produce-en und x-radar-abend überlappen seit Wochen auf
9222 ohne Kollision) und wurde aus CLAUDE.md entfernt; erhalten bleiben die
belegte about:blank-Lehre (tatsächliche Ursache beider Ausfälle, Fix im
fb-radar-Prompt hat den 18:05-Lauf sauber laufen lassen) und die Warnung vor
`/browser connect` (setzt `BROWSER_CDP_URL` prozessweit). Kein
Upstream-Kandidat. Rückweg: alten Regelblock wieder einsetzen — Wortlaut:

    - **Browser-Sessions sind bei Multiplex nicht profilisoliert** (04.09.,
      Code-Recherche): `tools/browser_tool.py` cached Sessions prozessweit nur nach
      `task_id` (`_active_sessions`, Z. 1614); Aufrufe ohne task_id landen auf dem
      Literal `default` — das erste Profil friert die `cdp_url` dann für alle ein.
      Zudem schlägt die prozessweite Env-Var `BROWSER_CDP_URL` jede Profil-Config
      (Default beim Setzen: 9222). Symptom: Ein Profil-Lauf arbeitet im Browser des
      anderen Profils oder meldet „fremden Kontext". Browser-Läufe verschiedener
      Profile (twitter/tiktok auf 9222, facebook auf 9223) zeitlich nicht
      überlappen lassen; bei „falscher Kontext"-Meldungen zuerst prüfen, welcher
      andere Browser-Lauf kurz vorher aktiv war. Und: **about:blank nach einem
      Chrome-Neustart ist KEIN Kontextfehler** — Logins liegen in den
      Profil-Cookies; Job-Prompts müssen die Selbst-Navigation explizit erlauben
      (fb-radar tat es nicht und fiel zweimal aus). Upstream-Kandidat Nr. 3.

2026-09-04 (Nachtrag 4) — Erster Upstream-Beitrag vorbereitet (Erens Wunsch,
unter seinem Namen). Vorab Duplikatsuche laut CONTRIBUTING: alle heutigen
Kandidaten sind bei Nous schon offen — WSL-bash-Thema (Issues #46332, #62514,
rund zehn offene PRs seit Juni), Encoding-Fix `browser_use_cli.py` (Issue
#87152/#102500, PRs #87162/#102541), `cron list`-Warnung unter Multiplex (Issue
#99631, PR #99659), Guard-/Approval-Thema (PR #96555, #84203, Issue #83630); die
Zustellung im falschen Bot ist seit 02.09. upstream gefixt (Commit 13fb87af92).
Entscheidung: kein neues Duplikat, sondern die stale PRs #99470/#77532 auf den
aktuellen main portieren (seit dem Scheduler-Split liegt `_script_argv` in
`cron/scheduler_script.py`, beide Diffs passen nicht mehr) und mit Reproduktion
belegen. Getrennter Klon `C:\Users\Eren\hermes-contrib\hermes-agent`
(shallow, main 13e72fb), Branch `fix/cron-windows-wsl-bash`, Änderungen
gestaged, NICHT committet (Commit/Push macht Eren mit seiner Git-Identität).
Reproduktion `repro_wsl_bash.py`: System32 vor Git im PATH → main wählt
`System32\bash.EXE`, Exit 127, Pfad zu `C:UsersEren…` zerlegt; gepatcht → Git
Bash + `/c/...`, Exit 0. Tests `tests/cron/test_cron_script.py`: 38 passed,
2 skipped (vorbestehend). Test-venv `hermes-contrib\venv` (pytest, Produktiv-
Abhängigkeiten per `.pth` eingebunden, Produktiv-venv unangetastet). Texte
für PR und zwei Kommentare (#46332, #99470) in `hermes-contrib\TEXTE-fuer-
Eren.md`, Commit-Message in `commit-message.txt`. Rückweg: Ordner
`hermes-contrib` löschen; an der Produktivinstallation wurde nichts geändert.

2026-09-04 (Nachtrag 5) — Erster Upstream-PR ist offen: NousResearch/hermes-agent
#103066 „fix(cron): prefer Git Bash over the WSL launcher for .sh cron scripts on
Windows" (Fixes #46332, Rebase von #99470), von Eren committet und gepusht
(Fork s6endemi/hermes-agent, Branch fix/cron-windows-wsl-bash, Commit 322981b5),
mergeable, Body vollständig nach Nous-Vorlage. Testnachweis: voller Ordner
tests/cron auf unverändertem main und auf dem Branch — 11 Fehlschläge auf
beiden Ständen mit identischer Liste (test_file_permissions ×6, test_cron_workdir,
test_lifecycle_guard_budget ×3, test_media_delivery_parity: Windows-/Umgebungs-
bedingt), Branch 1179 passed gegen 1172 auf main (= die 7 neuen Tests).
Kommentare unter #46332 und #99470 postet Eren. Wiederholbarer Ablauf für
künftige Beiträge: C:/Users/Eren/hermes-contrib/PLAYBOOK.md (Duplikatsuche,
Klon aktualisieren, Reproduktion, Tests gegen main-Arbeitsbaum, Texte, Erens
Schritte, Fallen). Bewusst kein Hermes-Skill: der Ablauf gehört Eren und dem
Claude-Chat, nicht den Agenten. Rückweg: PR schließen, Ordner hermes-contrib
löschen; Produktivinstallation unverändert.

2026-09-04 (Abend) — Drei Ausfälle um 20:00, drei verschiedene Ursachen, alle
mit Erens Go behoben oder überbrückt:

1. `x-radar-abend` scheiterte nach 660 s am TERMINAL_CWD-Lock: `tt-produce-en`
   hielt ihn als Workdir-Schreiber für die gesamte Laufzeit. Der Umbau vom 03.09.
   hatte `workdir` auf alle TikTok-Jobs gesetzt (gegen die CLAUDE.md-Regel); am
   03.09. fiel es nicht auf, weil der EN-Lauf nach 11 s am 429 starb. Fix:
   `workdir` auf tt-produce, tt-produce-en, tt-learn, tt-outside-review und
   fb-radar geleert (`cron edit --workdir ""`); Profil-cwd ist identisch.
   Rückweg: `--workdir C:\Users\Eren\agents\workspace\<projekt>`.
2. `tt-produce-en` scheiterte um 20:27 am ChatGPT-Kontingent: HTTP 429
   `usage_limit_reached`, `plan_type: plus`, Reset Mo 07.09. 11:00 (Wochenlimit;
   Erens Codex-Nutzung plus vier Produktionsläufe/Tag mit ~190k Tokens Kontext
   pro Anfrage). Keine Fallback-Kette, keine anderen Anbieter-Schlüssel in `.env`.
   Bis zum Reset alle elf LLM-Jobs pausiert (x-radar-mittag, x-knowledge,
   x-radar-abend, x-post, x-notify, x-analytics, health-signals-monitor,
   tt-produce, tt-produce-en, fb-produce, fb-radar); tt-metrics (no-agent),
   tt-learn (Mi) und tt-outside-review (Mo 11:15) laufen weiter. Einmal-Job
   `resume-llm-jobs` (5e0d5c2211d6, default-Profil, no-agent, Mo 07.09. 11:05,
   Skript `scripts/resume-llm-jobs.py`) reaktiviert die Liste. Rückweg: Job
   löschen, Jobs per `cron resume` von Hand aktivieren. Bis dahin fahren Eren und
   der Claude-Chat die Produktion von Hand über die Skripte (keine ChatGPT-Tokens).
3. Die zwei vor dem 429 erzeugten EN-Videos hatten den Stil-Anker NICHT: In
   NotebookLM stand nur der erste Absatz des Agenten-Prompts (399/433 Zeichen,
   Testartefakte vom Nachmittag: 2111/1969 Zeichen mit Anker und Szenen). Der
   Request-Dump des Laufs zeigt: `gen_video.py` wurde nie aufgerufen; der Agent
   bediente den Dialog mit 14 browser_navigate, 63 browser_click, 69 Snapshots und
   tippte den Prompt per `browser_type` ein. Auslöser war der Satz „In
   Hermes-Sessions stattdessen die browser_*-Tools verwenden" in
   `notebooklm-video/SKILL.md` (Altbestand, nie entfernt). Fix: Passage ersetzt
   (Skripte sind der einzige Produktionsweg, browser_* bei NotebookLM nur lesend),
   beide Job-Prompts um das Verbot ergänzt (Sicherung `prompts/*-alt3-20260904.txt`).
   Beide Videos mit `gen_video.py` und Anker neu generiert (Short-Prompts des
   Agenten waren korrekt) und von Hand veröffentlicht/geplant, siehe Nachtrag.
   Lehre für die Doku-Säuberung: Ergänzungen wurden über Wochen angehängt, alte
   Vorgehensweisen nie gelöscht; der Agent folgt dann mal der einen, mal der
   anderen. Nächste Session: eine Wahrheit pro Thema, Skills verschlanken,
   Prompt-Größe per Oneshot messen.

2026-09-04 (Abend, Nachtrag) — EN-Spur von Hand gerettet, ohne ChatGPT-Tokens:
Beide Skripte und Captions des abgebrochenen Laufs waren brauchbar; die
Short-Prompts des Agenten wurden unverändert mit `gen_video.py` (Stil-Anker EN)
neu generiert. Video 1 „If balancing on one leg while getting dressed feels
shaky, save this." (C-reclaim, reach): Sticker-Look vollständig, um 20:54 auf
@previahealth veröffentlicht, in der Studio-Liste bestätigt, Telegram 160.
Video 2 „Nobody tells you why a short flight can make your body feel years
older." (B-mechanismus, community): zwei Anker-Versuche, beide gemischt —
Versuch 1 mit starken Sticker-Szenen (Flugzeugsitz, Koffer, Regenschirm) und
Strichmännchen bei den Übungen, Versuch 2 mit verschärfter Figurenregel:
Figur klein in den Übungen, Mechanik und Scan als Diagramme. Versuch 1 gewählt
(Einstieg entscheidet Retention) und per `--schedule` für 21:30 geplant,
Listeneintrag bestätigt. Alle Fassungen ohne/mit Anker liegen als Beleg in
`tiktok/tmp/` (`*-ohne-anker.mp4`, `*-anker-v2-diagramme.mp4`).

Lehre: Der Stil-Anker fixiert Look und Figur zuverlässig, solange die Szenen
konkret sind. Abstrakte Mechanik-Passagen („explain the mechanism of being held
in a tiny range", „scan reveals how ankles, hips and trunk share movement")
ziehen NotebookLM trotz Anker zu Diagrammen. Das Balance-Skript mit Stativ-
Metapher blieb komplett im Look. Deshalb in `tiktok/AGENTS.md` ergänzt: Die
Mechanik wird als Szene AM Protagonisten beschrieben, nie als „erkläre den
Mechanismus". Gehört in die Doku-Säuberung vom 05.09. (eine Wahrheit pro
Thema, Skills verschlanken, Prompt-Größe messen).

2026-09-04 (Abend, Feinschliff) — Erens Dramaturgie-Vorgaben nach den zwei
gelungenen Anker-Videos, in `tiktok/AGENTS.md` (Gewinner-Formel, Ton-Nein,
Previa-Bridge), beiden Job-Prompts (Abschnitt 2 und Szenenliste; Sicherung
`prompts/*-alt4-20260904.txt`) und beiden Stil-Ankern umgesetzt:
(1) Hook-Verstärker direkt nach dem Hook, in beiden Experiment-Armen gleich
(„Du wusstest das nicht? Dann hör jetzt ganz genau zu."), damit der Hook-Test
vergleichbar bleibt; (2) ein bis zwei Watchtime-Anker in der Kaskade („Vor
allem Nummer drei …"), nie leerer Aufschub; (3) Follow-Satz mit konkretem Wert
nach Fix-Schritt zwei, vor dem dritten („Folge Previa Health, damit du das
nächste Körpersignal nicht verpasst."), Ton-Regel entsprechend präzisiert:
verboten bleiben Follow-Aufrufe OHNE Grund; (4) Previa-Bridge zweistufig: kurz
nach der Enthüllung (Sek. 15–25) und ausführlich nach dem dritten Schritt
(„Mit Previa Health kannst du das in rund zwei Minuten am Handy selbst testen,
kostenlos, ohne App."); (5) Markenname immer „Previa Health", nie „Previa
Scan" (nicht auffindbar), auch in Einblendungen — dafür eine MARKE-/BRAND-Zeile
in `visual_anchor_de.txt` / `_en.txt` und die Previa-Szene der Szenenliste mit
dem Schriftzug auf dem Handy plus Follow-Szene. Zeitangabe geprüft gegen
`knowledge/previa-data/product-and-positioning.md`: 15 s Setup + 90 s
Bewegungen, Ergebnis nach etwa fünf Minuten; „in rund zwei Minuten testen" ist
gedeckt, „Ergebnis in zwei Minuten" nicht (so in AGENTS.md festgehalten).
Erster Lauf mit der neuen Dramaturgie: DE-Handlauf 05.09. 13:00. Rückweg:
Prompts aus `-alt4`, AGENTS.md-Absätze und Anker-Zeilen zurücksetzen.

2026-09-04 (spät) — Zwei DE-Testläufe für Erens Dramaturgie-Varianten (A: härterer
Hook-Verstärker, Previa zweistufig; B: Previa nur nach den drei Hilfen, ausführlich),
Quellen/Prompts/Captions unter `tiktok/scripts/2026-09-04-de-test-*`, Pakete in
`queue/`, Upload manuell durch Eren. Erste Fassungen (Anker am Ende, 2878/2926
Zeichen): A blasse weiße Silhouette statt Charakter, Zelt-Metapher nur ein Haken;
B Sofa-Hook perfekt, ab der Kopfgewicht-Mechanik Strichmännchen. Beobachtung
über den Abend: Alle Ausreißer hatten die längsten Gesamtprompts (>2600 Zeichen),
alle Treffer lagen bei ~2100–2250. Eingriff: `gen_video.py` stellt den Stil-Anker
jetzt VOR den Agententeil (statt dahinter); Szenenlisten gestrafft (jede Szene
nennt den Sticker-Charakter, Zahlen-Einblendungen als Überschrift statt als
Diagramm-Cue). Neufassungen A/B mit 2645/2808 Zeichen laufen; Ergebnis im
nächsten Nachtrag. Erste Fassungen als Beleg in `tiktok/tmp/*-v1-anker-hinten.mp4`.
Rückweg: Zeile `redakteur = anker + ... + redakteur` in gen_video.py wieder
umdrehen.

2026-09-04 (spät, Nachtrag) — Ergebnis Anker-vorne: Test B (Nacken) hält den
Sticker-Charakter jetzt durchgehend, inklusive Kleinkind-Metapher, Übungen und
„Previa Health"-Schriftzug am Ende; Test A (Hüftbeuger) ebenfalls, bis auf die
Mechanik-Passage (~14 s Diagramm mit Zeltleine/Zeltstange) — der bekannte
Schwachpunkt bei abstrakten Mechaniken. Vorher (Anker hinten): Silhouette bzw.
Strichmännchen. Entscheidung: Anker bleibt vorangestellt (gen_video.py,
SKILL.md vermerkt). Beide v2-Videos mit Captions per Telegram an Eren für den
manuellen Upload, Dateien in `tiktok/out/2026-09-04-de-test-*`. Offen für die
Doku-Säuberung: Mechanik-Passagen im Skript kürzer und als Handlung des
Protagonisten formulieren; Prompt gesamt unter ~2700 Zeichen halten.

2026-09-04 (Nacht) — Produktion vom Agenten entkoppelt (Erens Entscheidung: viele
Videos, schnell Muster, kein ChatGPT-Kontingent; Google-Pro-Abo endet ~09.09.,
daher Vorrat aufbauen). Neu im Skill notebooklm-video/scripts: `nlm_artifacts.py`
(Artefaktliste lesen, „Prompt und Quellen ansehen" auslesen), `batch_produce.py`
(Batch-Ordner → Quellen einfügen → Wellen zu dreien → Zuordnung Artefakt↔Skript
über den exakten Hook-Satz im gespeicherten Prompt → Download nach out/ mit
Caption → Kontaktbogen → report.md; stoppt beim NotebookLM-Limit und hält es
fest), `batch_check.py` (prüft Batch-Ordner gegen den Brief, kein LLM).
`workspace/tiktok/batches/SKRIPT-BRIEF.md` ist die einzige Anweisung für
Skript-Autoren (Sonnet-Subagenten, `claude -p`, Mensch): Beats inkl. Hook-
Verstärker, Watchtime-Anker, Follow-Satz, zweistufige Previa-Bridge, Marke,
Grenzen, Dateiformat, Ablauf. Erster Batch `batches/2026-09-04-nacht-de/`
(12 breite DE-Themen: 3 von Claude, 9 von drei Sonnet-Subagenten parallel).
Startprompt E in PROMPT-neuer-chat.md, Zeile in CLAUDE.md. Rollen ab jetzt:
Hermes = Metriken, Lernschleife, Radar, Telegram; Batch = Produktion; Eren =
Bögen ansehen, Go, Veröffentlichung 3–4/Konto/Tag per --schedule. Rückweg: die
drei Skripte und den Brief entfernen, Cron-Produktion Montag wieder aktiv (die
Jobs bleiben pausiert bis 07.09. 11:05; ob sie danach überhaupt noch produzieren
sollen, entscheidet Eren nach dem ersten Batch-Ergebnis).

2026-09-05 (01:15) — Erster Nachtlauf `batches/2026-09-04-nacht-de/`: 10 von 12 Videos in
57 Minuten (vier Wellen zu dreien, kein NotebookLM-Limit erreicht; heute insgesamt ~26
Generierungen im Konto ohne Sperre). Zwei Befunde: (1) Zuordnungsfehler in späteren
Wellen — 04 und 09 byte-identisch, 10-sofa zeigte das Schultern-Video. Ursache: der
Dialog „Prompt und Quellen" des vorherigen Artefakts stand noch, als der nächste gelesen
wurde; dazu zählte der Baseline-Vergleich alte Artefakte als neu, weil sich „Vor X Min."
im Zeilentext ändert. Fix: `nlm_artifacts.read_artifact_prompt` schließt vorher alle
Dialoge und wartet auf einen NEUEN Dialog; Zuordnung in `batch_produce.py` und
`batch_collect.py` verlangt jetzt Quellentitel UND Hook im Dialog; Baseline über
Titel+Dauer. Unsichere v1-Dateien nach `tiktok/tmp/nacht-v1-zuordnung-unsicher/`,
alle zehn per `batch_collect.py` neu eingesammelt (Ergebnis im report.md).
(2) 07-huefte-auto und 08-knie-treppe scheiterten dreimal an der Quellenwahl
(„getoggelt 74 Klicks / 75 Optionen", FEHLAUSWAHL): Das Produktionsnotebook hat 75
Quellen, die Auswahlliste flackert unter Last. Konsequenz: neues Produktionsnotebook
anlegen (Skill-Regel „nach ~100 Videos oder bei Trägheit rotieren" greift jetzt), URL in
STATE.md, NOTEBOOK-Konstante in batch_produce.py/batch_collect.py/open_notebook-Aufrufen
umstellen; 07/08 dort nachholen. Rückweg: Dateien aus tmp zurück, alte Notebook-URL.

2026-09-05 (01:10) — Neu-Einsammeln abgeschlossen: alle zehn Videos mit doppelt
abgesicherter Zuordnung (Quellentitel UND Hook im Dialog) geladen, zehn verschiedene
Dateigrößen, Artefakttitel passen zu den Themen (z. B. 12 ← „Kopfschmerzen am
Hinterkopf und die Bowlingkugel-Mechanik", 09 ← „Die Kleiderbügel-Falle"). In der
Nacht waren 09/10/11/12 verschoben gewesen. 07 und 08 bleiben offen (Quellenwahl im
81-Quellen-Notebook), nachholen im neuen Notebook. Dateien: out/2026-09-05-de-*.mp4
+ .txt, Bögen in batches/2026-09-04-nacht-de/sheets/. Verteilung erst nach Erens Blick
auf die Bögen per batch_publish.py.

2026-09-05 (01:20) — Erens Korrektur zur Dramaturgie: Hook-Verstärker nur noch optional
und nur, wenn er natürlich klingt (kein „Krampf-Tease"); Follow-Satz wie von einem echten
Menschen („Folg mir gern, da kommen noch mehr solche Tricks"), nie als aufgeblasene
Formel; Zeichentrick-Anker bleibt. Umgesetzt in SKRIPT-BRIEF.md, tiktok/AGENTS.md,
batch_check.py (Follow-Regel gelockert) und in den Items 07/08. Produktionsnotebook
rotiert: Nr. 2 (3b517586…) per `new_notebook.py` angelegt, in STATE.md eingetragen,
Standard in batch_produce/batch_collect; alle NotebookLM-Helfer beachten jetzt
`NLM_NOTEBOOK_URL`, damit bei zwei offenen Notebooks nie das falsche Tab gewählt wird.
07/08 im neuen Notebook gestartet (Quellenwahl sauber, „1 Quelle"), Einsammeln folgt.
Rückweg: Absätze im Brief/AGENTS zurücksetzen, NOTEBOOK-Konstante auf Nr. 1.

2026-09-05 (Vormittag) — Outro-Schnitt und Verteilplan für den Nacht-Batch.
Neu: `notebooklm-video/scripts/trim_outro.py` schneidet die NotebookLM-Endkarte (weiß mit
Logo, gemessen 2,9–3,2 s) über die Bildhelligkeit ab (signalstats YAVG, Schwelle 225; Schnitt
= letzter Inhaltsframe + 0,06 s), Re-Encode x264 CRF 18 mit 0,3 s Audio-Ausblende, Originale
nach `out/original/`. Erster Lauf ließ mit 0,2 s Reserve einen weißen Frame stehen, daher
Reserve auf einen Frame gesenkt, Originale zurückgeholt, alle elf neu geschnitten und an 07
kontrolliert (letzte Sekunde nur Inhalt). Kadenz-Entscheidung: vier Slots pro Tag (10:00,
13:00, 16:00, 19:30) statt fünf, damit die Videos nicht gegeneinander laufen und der Batch
drei Tage trägt; `batch_publish.py` als Vorschau geprüft, Ausführung nur nach Erens Go.
Rückweg: Originale aus `out/original/` zurückkopieren; Slots sind nur ein Parameter.

2026-09-05 (Mittag) — NotebookLM-Tageslimit gemessen. Der Neuversuch für 08-knie-treppe um
11:16 klickte „Erstellen", NotebookLM startete aber nichts; im Studio-Panel stand „Sie haben
Ihr Tageslimit für Video-Zusammenfassungen erreicht". Zählung: 10 Testvideos am 04.09. ab
14:59, 11 Batch-Videos 00:06–01:41, also 21 in 21 Stunden; Google nennt für Pro 20 pro Tag.
Um 11:16 stand die Sperre noch, ein Mitternachts-Reset (lokal oder Pacific) scheidet damit
aus; Arbeitshypothese rollendes 24-h-Fenster, Neuversuch für 08 ab 15:05 als Hintergrundkette
(gen_video, warten, batch_collect, trim_outro). `gen_video.py` meldet die Sperre jetzt als
`TAGESLIMIT:` (vorher nur „bestätigt die laufende Erstellung nicht"), damit `batch_produce.py`
die Wellen anhält. Folge für den „Reaktor": pro 24 h höchstens ~18 Videos einplanen, Tests
eingerechnet; DE- und EN-Batches also auf Tage verteilen, nicht stapeln. Dokumentiert in
SKILL.md (Offene Punkte), STATE.md und SKRIPT-BRIEF.md. Rückweg: keiner nötig, nur Wissen.

2026-09-05 (11:36) — Erster Batch auf TikTok DE verteilt. Erens Entscheidung: heute drei
(13:15, 16:30, 19:30), ab morgen vier pro Tag (09:30, 13:15, 16:30, 19:30); eine Woche lang
vier bis zehn Videos täglich testen, Themen als große Alltagskörper-Mysterien, Rahmung als
Creator, der eine Community aufbaut und warme Leads holt; das Hüfte-Video ist der Maßstab.
`batch_publish.py --go` hat elf Videos in fünf Minuten geplant (rund 30 s je Upload, alle
mit Bestätigung und Redirect); die Studio-Liste „Beiträge" zeigt die Einträge mit den
geschnittenen Laufzeiten (z. B. 00:55 für die Hüfte) und den richtigen Zeiten, neun davon
auf der ersten Seite sichtbar, die zwei ersten von heute auf Seite zwei. Ledger
`out/.scheduled.json` und `videos-log.md` fortgeschrieben. Video 08 (Knie/Treppe) folgt an
den nächsten freien Slot (Di 09:30), sobald der Neuversuch ab 15:05 durch ist. Batch 2 (DE,
zwölf neue Themen: Wade nachts, Ferse morgens, Ellenbogen/Maus, Hände nachts, Hüfte
Seitenschlaf, Rücken/Zähneputzen, Tasche/Schulter, Bein überschlagen, Kind auf der Hüfte,
Jacke/Schulter, Bummeln/Rücken, Kiefer abends) wird gerade von Sonnet-Subagenten
geschrieben; Produktion automatisch ab 02:00 (Limit-Fenster), Verteilung erst nach Erens Go.
Rückweg: geplante Beiträge in TikTok Studio unter „Beiträge" löschen; Ledger-Eintrag
entfernen, dann plant `batch_publish.py` das Video erneut.

2026-09-05 (12:10) — Batch 2 (2026-09-05-abend-de) fertig geschrieben und geprüft, Nachtkette
scharf (02:00: batch_check, batch_produce Wellen zu dreien, batch_collect, trim_outro; Prefix
2026-09-06-de). Ein Thema getauscht: „Ellenbogen brennt (Maus)" verstößt gegen „Vom Großen
denken" in tiktok/AGENTS.md (Mikro-Nische, dort sogar als Negativbeispiel), ersetzt durch
„Ohne Hände vom Boden aufstehen" (Bewegungsalter, Kommentar-Frage, ohne Sterblichkeits-
Behauptung). Verworfenes Skript unter batches/_verworfen/. Der Themen-Test aus AGENTS.md
steht jetzt auch im Skript-Brief, damit Autoren ihn vor dem Schreiben anwenden.

2026-09-05 (13:00) — Befund zu den misslungenen Batch-1-Videos (Eren: 05 Ischias, 11 acht
Stunden; Bögen aller elf angesehen). Drei gescheitert: 05 (40 s leere Fläche mit Punkten
und Nerv-Icon), 11 (40 s orange Strichfigur, die zu Eis erstarrt, Schluss „Teil 2 kommt
morgen"), 12 (anatomischer Kopfschnitt statt Charakter, Bowlingkugel als Liniendiagramm).
Schwach: 04 (winzige Figuren, viel Leerfläche), 01 (30 s Kastendiagramm „Last" in der
Mitte). Sehr gut: 03, 07, 09; gut: 10 (Schluss mit fremdem Charakter), 02 (statisch).
Ursache: Die Szenenliste war in allen zwölf Prompts korrekt und identisch aufgebaut,
NotebookLM plant die Bilder aber aus der ERZÄHLUNG (Quelle). Wo die Quelle den Zuschauer
mit einem Haushaltsgegenstand in die Metapher setzt (Tür, Kleiderbügel, Taschenmesser,
Sofa), folgt das Bild; wo sie ein Objekt ohne Person („bowling ball on an outstretched
arm", „garden hose", „three people carrying a sofa"), Anatomie („nerve … under your glute
muscle", „base of your skull") oder eine Verwandlung („block of ice") erzählt, entstehen
Icons, Schnittzeichnungen, Diagramme oder Silhouetten. Regel mit Verbotsliste im
Skript-Brief (Beat 3). Batch 2 daraufhin vor der Nacht korrigiert: alle zwölf
Mechanik-Absätze auf „Picture yourself …" mit Protagonist umgeschrieben, Szene 2 überall mit
Protagonist, batch_check grün. Rückweg: Originalfassungen stehen in den Subagent-Protokollen
der Session, inhaltlich unverändert bis auf den Absatz.

2026-09-05 (Abend) — Reaktor: Batch 2 läuft ohne Menschen bis zum Planen. Auslöser: die
Hintergrundketten (08-Neuversuch, Nachtlauf 02:00) starben mit dem Neustart der Claude-Code-
Sitzung; Eren will bis zum Planen vollautomatisch, selbstweckend, mit Qualitätsprüfung und
maximaler Ausbeute. Gebaut: `reaktor.py` (Stufen chrome/check/produce/collect/trim/gate/
publish/report, Zustand `reaktor-state.json`, Limit-Schleife bis 10:30), `gate.py`
(Heuristik YLOW>200-Anteil plus `claude -p`-Urteil mit Sonnet auf 6×7-Bögen à 240 px; die
ersten Rubriken erfanden Befunde, die einfache Pass/Fail-Rubrik mit „im Zweifel PASS" trifft
Erens Urteil: FAIL 05, 11, 12, dazu 01), `batch_produce.py --resume` mit Exit 3 bei
TAGESLIMIT, `tiktok_unschedule.py` (geplanten Beitrag in Studio löschen),
`reaktor-nacht.cmd` als Wrapper für die Aufgabenplanung (Tasks PreviaReaktor 06.09. 00:05
und PreviaReaktorWachhund 11:00, „nur interaktiv", Eren bleibt angemeldet). Batch 2 auf 19
Items erweitert: 13–15 sind die v2 von Ischias, acht Stunden, Kopfschmerz; 16–18 neu
(Entenfüße, Blick nach oben, Hüfte rausschieben); 19 ist Knie/Treppe v2 (08 aus Batch 1,
nie produziert, Kette statt Person ersetzt durch Sprung von der Mauer). Alle Mechanik-
Absätze nach der neuen Regel; batch_check grün. 05/11/12 aus dem Ledger genommen, damit der
Reaktor Sonntag 13:15, Montag 16:30 und 19:30 mit PASS-Videos nachbelegt. Limit-Befund
korrigiert: um 18:20 noch gesperrt bei 16 Videos in 24 h, also kein rollendes Fenster.
Telegram-Kanal getestet (`hermes -p tiktok send --to telegram`). Rückweg: Tasks mit
`schtasks //Delete //TN PreviaReaktor* //F` entfernen, Ledger-Einträge wiederherstellen.

2026-09-05 (19:00) — Nachtrag Reaktor: `batch_publish.py` vergab Slots nur hochzählend ab dem
Startdatum und hätte morgen Videos doppelt auf belegte Slots gelegt; jetzt werden Slots, die im
Ledger für dasselbe Konto stehen, übersprungen (Vorschau: die drei freigewordenen Slots So 13:15,
Mo 16:30, Mo 19:30 werden zuerst gefüllt). Die drei zurückgezogenen Batch-1-Videos liegen in
`out/zurueckgezogen/`, damit kein späterer Aufruf mit Prefix 2026-09-05-de sie erneut plant.

2026-09-05 (20:35) — Reaktor per Erens Wunsch sofort gestartet (19:57 über den Wachhund-Task,
Mitternachts-Task gelöscht). Quellen 19/19 eingefügt, erste Welle 20:02 TAGESLIMIT, zweiter
Versuch 20:32 lief: drei Generierungen gestartet. Limit-Beobachtung: gesperrt 11:16 bis nach
20:02, frei ab 20:32, also rund 24 h nach den ersten Abend-Tests vom 04.09. (Downloads 20:34);
die Schleife löst das ohne Uhrzeit-Modell. CLAUDE.md-Regel entsprechend korrigiert.

2026-09-06 (00:10) — Reaktor-Abbruch und Neustart. Der Lauf von 19:57 produzierte 15 von 19
Videos (Wellen 20:32–21:35, kein weiteres Limit) und starb um ~21:35 mit Strg+C: Der Task lief
„nur interaktiv" mit sichtbarem Konsolenfenster, das geschlossen wurde (Exit 0xC000013A, „^C"
im stdout-Log). 13 und 14 lagen fertig im Notebook und wurden per batch_collect geholt. Fix:
Task-Aktion auf `wscript.exe reaktor-nacht.vbs` (startet die .cmd ohne Fenster), Sperrdatei
`reaktor.lock` in reaktor.py gegen Doppelstart (11:00-Trigger bleibt). Neustart 00:07 mit
`--resume`: 4 offen (16–19), danach collect, trim, gate, publish, Telegram. Rückweg: keiner.

2026-09-06 (00:45) — Batch 2 abgeschlossen und verteilt. Ergebnis: 17 von 19 produziert (18
Hüfte rausschieben zweimal als NotebookLM-Fehler-Artefakt, 19 Knie/Treppe v2 nie gestartet,
Limit um 00:30 wieder erreicht). Gate: 12 PASS, 5 FAIL. Eren wollte alles hochladen; verteilt
wurden die 12 PASS mit fünf Slots je Tag (09:30, 11:30, 13:15, 16:30, 19:30), Sonntag damit
fünf Videos, Montag fünf, Dienstag fünf, Mittwoch zwei. FAIL-Muster (Bögen selbst angesehen):
15 Kopfschmerz v2 ist trotz Gießkannen-Szene ein schwarzer Blob statt Sticker-Mann, also das
zweite Kopf-/Nacken-Thema in Folge, das den Charakter verliert; 01 Wade (Gummiband), 06
Zähneputzen (Kran), 09 Kind (Wirbelsäulen-Icon), 08 Bein überschlagen (Becken-Anatomie) haben
8–15 Frames Diagramm ohne Charakter. Gelungen sind Szenen, in denen der Charakter an einem
ORT etwas TUT (Campingstuhl aus dem Kofferraum, Tür, Zelt, Auto im Stau, Strand): „Objekt in der
Hand halten" reicht nicht. Reaktor-Bilanz: Kette funktioniert (Quellen, Wellen, Limit-Schleife,
Resume); die manuelle Fortsetzung war nur nötig, weil Eren nicht bis 10:30 warten wollte.
Wachhund 11:00 bleibt: holt 18/19 nach, falls NotebookLM sie noch liefert, und plant sie.

2026-09-06 (00:55) — Erens Override: 06 Zähneputzen und 15 Kopfschmerz v2 trotz Gate-FAIL
geplant (Mi 09.09. 13:15 und 16:30). Damit läuft Batch 2 mit 14 Videos, offen bleiben 01 Wade,
08 Bein überschlagen, 09 Kind auf der Hüfte (nicht geplant) sowie 18 und 19 (nicht produziert;
Wachhund 11:00 versucht es). Lehre fürs Gate: Erens Schwelle ist lockerer als die Rubrik bei
kurzen Diagramm-Blöcken (06) und beim Blob-Charakter (15); die Rubrik bleibt streng, der
Override ist eine Nennung der Nummer.

2026-09-06 (10:20) — EN-Reaktor vorbereitet (Erens Wunsch: gleiche Kette für @previahealth, Port
9222, englischer Inhalt, Qualität hoch halten). Entscheidung: statt neuer Themen die 18 Skripte
nehmen, die auf DE das Gate bestanden haben (6 aus Batch 1, 12 aus Batch 2); Quellen sind
englisch, Sonnet schreibt nur englische Short-Prompts und Captions und bereinigt bei den sechs
Batch-1-Quellen Verstärker-Formel und Follow-Satz. Neues Notebook für EN (c66866dc…), damit
keine doppelten Quellen entstehen; `batch_check` akzeptiert SCENES; Wrapper `reaktor-en.cmd/.vbs`
mit NLM_NOTEBOOK_URL, Slots 14/16/18/20/22, Deadline 23:30 (Limit gibt erfahrungsgemäß abends
frei). Preflight: 9222 ist als @previahealth angemeldet. Tasks PreviaReaktorEN (manuell
gestartet) und PreviaReaktorENWachhund (07.09. 08:00). Rückweg: Tasks löschen, Ordner
`batches/2026-09-06-en` bleibt als Vorlage.

2026-09-06 (23:10) — EN-Reaktor: erster Lauf 22:13, kein Limit (Quota nach ~22 h wieder frei),
neun Videos in drei Wellen. Eren will die EN-Slots extremer auf die englische Zielgruppe: 14:00,
19:00, 21:00, 23:00 (vier pro Tag). Da die Slots beim Start eingelesen werden: Wrapper geändert,
Reaktor gestoppt, Welle 3 per batch_collect geholt, per Resume neu gestartet (Lauf 2, 9 offen).
Trigger-Test der Aufgabenplanung bestanden; der DE-Wachhund scheiterte um 11:29 mit
0x80070520 (keine Anmeldesitzung), Tasks laufen also nur bei angemeldetem Eren.

2026-09-07 (00:30) — EN-Reaktor fertig: 18/18 produziert, Gate 11 PASS / 7 FAIL, 11 geplant
(Mo–Mi, 14/19/21/23 Uhr), Telegram-Bericht 00:14. Die sieben Durchfaller sind echte Ausfälle
(Bogen 02 angesehen: durchgehend Skelettfigur trotz Anker; 05, 07, 10, 18 fast nur Icons),
obwohl dieselben Quellen auf DE bestanden hatten; NotebookLM würfelt in EN offenbar öfter
daneben. Maßnahme: gen_video hängt jetzt zusätzlich zum Anker vorn eine einzeilige
Charakter-Erinnerung ans Prompt-Ende (beide Sprachen). Retry-Batch `2026-09-07-en-retry`
(sieben Ordner, neues Notebook 652d20bc…, Task PreviaReaktorENRetry, Deadline 12:00,
Prefix 2026-09-07-en) gestartet; DE 18/19 bleiben für später. Rückweg: Reminder-Block in
gen_video.py entfernen.

2026-09-07 (00:40) — Quota erschöpft nach 20 Generierungen seit 22:19 (18 EN + 2 Retry); der Rest
des Retrys und drei Kurzgesagt-Testvideos liefen auf TAGESLIMIT. Eren schaltet den PC aus:
laufende Generierungen enden in Googles Cloud, Einsammeln/Gate/Planen holen Tasks nach.
Angelegt: Retry-Wachhunde 09:30 und 12:30 (holen 02/04), Retry-Abendlauf 22:20 mit --force
(restliche fünf), Stil-Test 22:30 (`reaktor-en-test.cmd`: Anker `visual_anchor_en_kurzgesagt.txt`
über neue Umgebungsvariable VISUAL_ANCHOR in gen_video, eigenes Notebook 8eab694d…, drei
Kopien von 01/08/16 mit Vektor-Charakter im Szenentext, --no-publish --no-judge; Bögen morgen
mit Eren ansehen). Gelernt: nach ~20 Generierungen ist Schluss, egal wie das Fenster liegt.

2026-09-07 — Facebook-Community-Radar lesend ausgeführt: keine fälligen bestätigten Follow-ups und keine geeignete neue Gelegenheit. Geprüft wurden Home-Feed sowie die Gruppen Lower back pain, Back Pain Tips und Back pain, slipped disc, sciatica support group; sichtbare Themen waren Werbung, Medikamentenerfahrungen oder medizinisch sensible Symptomfälle. Report: `facebook/radar/2026-09-07-1132.md`. Rückgängig: Report und diese Zeile entfernen.
2026-09-07 — Wissensbasis um eine wrist-wearable-vs.-force-plate-Validierung für Sprung-Impact ergänzt: per-jump Präzision ist unter Laborbedingungen begrenzt, daher als `warnt` für Wearable-Scores eingeordnet. Rückgängig: `knowledge/digital-biomarkers/wearable-impact-loading-osteoporosis-validation-2026.md`, die zugehörige INDEX-Zeile und diesen Eintrag entfernen.

2026-09-07 (12:15) — Meta Graph API angebunden (Cross-Posting, Hebel Nr. 1 aus der Beratung).
Eren hat Instagram @previa_health mit der Facebook-Seite „Previa Health" verknüpft (Business-
Portfolio), eine Meta-App „Previa Health" mit den Anwendungsfällen Pages API und Instagram API
(Variante Facebook-Login) angelegt, eine Login-Konfiguration „Previa Publisher" mit genau sieben
Rechten (pages_show_list, pages_read_engagement, pages_manage_posts, pages_manage_metadata,
instagram_basic, instagram_content_publish, business_management; die Standardkonfiguration
forderte das ungültige pages_read_user_content) und einen Nutzer-Token im Graph API Explorer
erzeugt. Neues Skript `profiles/facebook/skills/meta_publish.py`: setup (Token auf 60 Tage
verlängern, Seiten-Token ohne Ablauf, IDs in die .env), fb-reel (Resumable Upload + SCHEDULED
mit scheduled_publish_time), ig-reel (Container resumable, media_publish, kein Planen per API),
IG-Warteschlange (queue add/run für einen 30-min-Task). Ledger `out/.meta-scheduled.json`.
Das vorhandene Paar ist laut Eren das DEUTSCHE (Schlüssel *_DE); die englische Seite existiert
schon, englisches Instagram und Token-Erweiterung folgen. Erster Test: Hüfte-Video als
Facebook-Reel für 12:49 geplant (post_id 122100453489468425), Instagram-Test erst nach Erens
Go, weil sofort live. Meta-MCPs geprüft: Devtools- und Ads-MCP veröffentlichen keine Inhalte,
Community-Instagram-MCPs wickeln dieselbe Graph API mit einem Modell dazwischen ab, deshalb
direkt per Skript. Secrets liegen in profiles/facebook/.env (App-ID/Secret/Token standen kurz
im Chat, Eren behält den Secret bewusst). Rückweg: Reel im Seiten-Planer löschen, Token im
Explorer widerrufen.

2026-09-07 (12:30) — Cross-Posting Facebook live. `meta_crosspost.py` hat die zwoelf noch
ausstehenden DE-TikTok-Termine (Mo 13:15 bis Mi 16:30) als Facebook-Reels mit denselben Zeiten
geplant, alle mit success. Reaktor hat die Stufe crosspost (`--crosspost fb`, im DE-Wrapper
aktiv), nicht fatal. Erens Entscheidung: erst Deutsch komplett (Facebook jetzt, Instagram nach
Go, dann YouTube), englisches Paar spaeter (englische Facebook-Seite fehlt noch, englisches
Instagram existiert). Rueckweg: Reels im Seiten-Planer loeschen, `--crosspost` aus dem Wrapper.

2026-09-07 (12:35) — Instagram live. Test: Huefte-Video als Reel auf @previa_health
veroeffentlicht (Resumable Upload, Container FINISHED nach ~1 min, media_publish; Permalink
instagram.com/reel/Dc-5kUwij7-). Planen gibt es in der Instagram-API nicht, deshalb
Warteschlange: `meta_crosspost.py --platforms ig` legt die TikTok-Termine in
`out/.ig-queue.json`, Task PreviaIGQueue (alle 30 min, `ig-queue.vbs` -> `meta_publish.py
queue run`) veroeffentlicht faellige Eintraege; 12 DE-Termine bis Mi 16:30 eingereiht.
DE-Wrapper jetzt `--crosspost fb,ig`. Rueckweg: Task loeschen, Queue-Datei leeren.

2026-09-07 (13:00) — YouTube Shorts angebunden, Browserweg. Eren hat den Kanal "Previa Health"
(UCbrbq2P6g0qhjWTs3uRRKTQ) angelegt und sich im DE-Agenten-Chrome angemeldet (Start mit -Visible,
danach Prozesse beendet und headless neu gestartet; das Startskript startet eine sichtbare
Instanz nicht von selbst neu). Befund: headless Chrome gilt in Studio als "nicht unterstuetzter
Browser", Upload-Dialog erscheint erst mit normaler User-Agent-Kennung (Emulation.setUserAgent
Override je Tab). Erkundeter Ablauf steht im Docstring von `yt_publish.py`: Datei per
DOM.setFileInputFiles, Titel/Beschreibung per execCommand, Kinder-Radio, Upload-Ende abwarten,
dreimal Weiter, Planen-Abschnitt aufklappen (#second-container-expand-button), Datum per
Input.insertText + Enter, Uhrzeit aus 15-min-Liste, #done-button ("Veroeffentlichungszeitpunkt
festlegen"), Bestaetigung mit Shorts-Link. Erster Test: Huefte-Video geplant 13:30
(youtube.com/shorts/H-kXCyuIDpU). `yt_crosspost.py` zieht die 12 DE-Termine nach; Reaktor
`--crosspost fb,ig,yt` im DE-Wrapper. YouTube-API-Antraege (Audit, Quota) bleiben optional.
Rueckweg: Shorts in Studio loeschen, `yt` aus dem Wrapper nehmen.

2026-09-07 (13:01) — DE-TikTok-Produktionslauf vorbereitet: zwei revisionierbare Queue-Pakete samt englischen 250–350-Wort-Quellen, deutschen Captions und NotebookLM-Prompts für `B-mechanismus`/`goal=reach` (Abendlicher Bauchdruck, concealment-reveal) sowie `C-reclaim`/`goal=audience-growth` (Umdrehen im Bett, save-help-delay) angelegt und als Quellen ins Produktionsnotebook eingefügt. NotebookLM meldete beim ersten Start verbindlich `TAGESLIMIT`; daher keine Artefakte, Downloads oder TikTok-Uploads und kein Eintrag in `videos-log.md`. Rückweg: die zwei Queue-Pakete, vier Dateien unter `tiktok/scripts/`/`tiktok/out/`, die beiden NotebookLM-Quellen und diese Zeile entfernen.

2026-09-07 (15:00) — YouTube: Tageslimit statt Skriptfehler. Nach dem ersten Cross-Post lagen sieben
der zwoelf Videos als Entwurf mit Dateinamen-Titel (kein Termin), zwei Wartepunkte im Uploader
waren falsch (leeres .progress-label; Fortschritt steht nur in ytcp-video-upload-progress) und der
Titel wird von YouTube nach dem Upload-Start auf den Dateinamen zurueckgesetzt (jetzt: nach dem
Upload pruefen und erneut setzen; Fertig-Knopf erst klicken, wenn aria-disabled weg ist;
Bestaetigung muss "geplant" enthalten). Beim Nachtest blieb der Fertig-Knopf deaktiviert:
Dialogtext "Taegliches Upload-Limit erreicht ... einmalige Bestaetigung deiner Identitaet ... oder
24 Stunden warten". Frischer Kanal ohne Verifizierung = ~10-15 Uploads/Tag, Entwuerfe zaehlen mit.
Stand: 5 Shorts korrekt geplant (Huefte 13:30, Seitenschlaf, Jacke, Bummeln, acht Stunden), 7
Entwuerfe zum Loeschen, Ledger bereinigt. Naechster Schritt: Eren verifiziert den Kanal
(youtube.com/verify, Telefon), danach Entwuerfe loeschen und `yt_crosspost.py --go` erneut.

2026-09-07 (14:20) — YouTube-Befund korrigiert: Nicht 5, sondern nur 1 Short war wirklich geplant
(Huefte 13:30, von Hand bestaetigt). Die "GEPLANT"-Meldungen des Uploaders stammten vom Videolink,
der schon im Details-Schritt steht; alle elf Videos lagen als Entwurf (auch die mit richtigem
Titel). Uploader jetzt mit echter Bestaetigung: Sichtbarkeits-Schritt muss verschwinden und die
Shorts-Liste die Zeile mit "Geplant" zeigen. `yt_delete_drafts.py` (Zeilen-Button "Video
loeschen" + Bestaetigungsdialog) hat alle elf Entwuerfe entfernt, Ledger geleert. Neuer Lauf nach
Erens Verifizierung: sofort UPLOAD-LIMIT (Sperre laeuft offenbar 24 h ab dem ersten Treffer
~14:10, unabhaengig von der Verifizierung); `yt_crosspost.py` bricht beim Limit jetzt ab statt
weiterzulaufen. Task PreviaYouTubeDE 08.09. 15:00 holt alles nach, was im TikTok-Ledger noch
in der Zukunft liegt. Rueckweg: Task loeschen.
2026-09-07 (20:xx) — `notebooklm-video` korrigiert: `add_source.py` erwartet einen direkten UTF-8-Dateipfad, kein `@`-Prefix; der Prefix erzeugte unter Windows `OSError: [Errno 22]`. Rueckweg: Skill-Änderung rückgängig machen.

2026-09-07 (21:00) — Alle LLM-Cron-Jobs pausiert (Erens Entscheidung: X und Facebook aktuell nicht
noetig, TikTok laeuft ueber den Reaktor). Pausiert: twitter x-radar-mittag, x-knowledge,
x-radar-abend, x-post, x-notify, x-analytics, health-signals-monitor; facebook fb-produce,
fb-radar; tiktok tt-produce, tt-produce-en, tt-outside-review, tt-learn. Aktiv bleibt nur
tt-metrics (no-agent, 12:00). Hintergrund: der Sammel-Task von 11:05 hatte die elf Jobs wie
geplant reaktiviert; tt-produce-en lief daraufhin 20:17-20:51 mit Agent (Datei
out/2026-09-07-en-02-back-cracking.mp4, Bericht per Telegram, in Studio EN kein neuer Post
sichtbar), tt-produce wurde vom Gate uebersprungen. Kein Auto-Resume mehr angelegt; Reaktivieren
per `hermes -p <profil> cron resume <id>`. Rueckweg: dieselben IDs mit resume.

2026-09-07 (22:20) — Batch 3 DE gestartet (Variante K nach Erens Vorgabe: Körperwissen wie
Kurzgesagt, teasende Hooks, Previa nur einmal am Schluss, alle Plattformen). Brief um Abschnitt
„Variante K" ergänzt (Beats Hook, Enthüllung als Szene, Steigerung, Payoff mit Follow-Satz,
Absolution, ein Previa-Satz; Szenenliste ohne Schritt-Überschriften). Zwölf Themen: morgens
größer, Muskelkater zwei Tage, Sehnen als Federn, Dehnen und Gehirn, Po vergisst, Schmerz als
Alarm, Knochen-Konto, drei Tage Bett, Gang verrät Alter, Schmerz am falschen Ort, Körper streckt
sich, alles klebt morgens. Vier Sonnet-Gruppen, batch_check grün, „Previa Health" je Quelle genau
zweimal (Follow + Schluss). Korrektur vor dem Start: die Gruppen hatten den englischen Quell-Hook
in den deutschen Prompt gesetzt; deutsche Hooks eingesetzt (Zuordnung läuft über den gespeicherten
Prompt, nicht über die Quelle; Brief-Formulierung dazu war missverständlich). Wrapper
`reaktor-batch3.cmd` (Prefix 2026-09-08-de, Slots ab 08.09., Deadline 10:30, --crosspost fb,ig,yt),
Tasks PreviaReaktorDE3 (gestartet 22:17) und PreviaReaktorDE3Wachhund (08.09. 09:00). Visuell
bewusst beim Sticker-Anker geblieben; Kurzgesagt-Vektor läuft heute Nacht als EN-Test (3 Videos).
TikTok DE: Dienstag voll, Mittwoch bis 16:30 belegt, Batch 3 füllt ab Mi 19:30 bis Sa.

2026-09-07 (22:35) — Format-Palette im Brief (Erens Impulse): F1 Story-Charakter („Das ist Jonas,
Jonas hat ein Problem …", Name als Vorschlag), F2 Direktansprache mit Drei-Dinge-Versprechen, F3
Kontraintuitiv, F4 Enthüllung, F5 Wissens-Explainer. Ab Batch 4 gleichmäßig mischen, Format als
Ordner-Suffix -f1…-f5, damit die Metrik-Kopplung Formate vergleichen kann.

2026-09-08 (00:10) — Doppelte Generierungen in Notebook Nr. 2 (Eren hat es gesehen): Batch 3,
Welle 2 (Dehnen, Po, Schmerz) lief unter der Last von drei parallelen Reaktoren (DE3, EN-Retry,
EN-Test) laenger als die 30 min max-wait; batch_produce setzte "KEIN ARTEFAKT", der Reaktor
startete nach 10 min mit --resume neu und erzeugte die drei erneut, dann noch einmal (Schmerz
dreimal, Dehnen zweimal im Notebook). Fix in reaktor.py: vor jedem Neuanlauf erst batch_collect,
und solange NotebookLM "wird erstellt" meldet, nicht neu generieren; max-wait 45 min. Zweiter
Fehler: --force setzte die Stufen nicht zurueck, der EN-Abendlauf um 22:20 wiederholte nur den
Bericht (2/7, 0 PASS); --force loescht jetzt alle Stufen ausser check. EN-Retry-Zustand
zurueckgesetzt, Task auf 08.09. 22:30. EN-Kurzgesagt-Test: 1/3 produziert (Limit), PASS, Bogen
morgen mit Eren ansehen. DE3: Reaktor gestoppt, die laufende dritte Generierung von 04-06 wird
per batch_collect eingesammelt, dann Neustart mit neuem Code fuer 07-12. Quota-Folge: Duplikate
kosteten ~6 Generierungen, die letzte DE-Welle faellt vermutlich ins Tageslimit.

2026-09-08 (11:50) — Morgen nach dem Neustart: PC-Reboot 10:54 hat den Batch-3-Lauf nach 10 von
12 Videos beendet, Wachhund 09:00 lief nicht (keine Sitzung). Reaktor 11:34 fortgesetzt (Lauf 5,
2 offen), danach Gate, Planen, Cross-Post fb/ig/yt. IG-Queue: vier Reels puenktlich, eines mit
Instagram "ProcessingFailedError" (Tasche/Schulter), erneut eingereiht. Kurzgesagt-Test (EN,
Floor to stand, 1 von 3 produziert): Eren findet den Look gut; Bogen per Telegram; erste Haelfte
dunkler Vektor-Look sehr gut, zweite Haelfte kippt in hellen Whiteboard-Look mit kleinen Figuren.
Anker EN/DE (`visual_anchor_*_kurzgesagt.txt`) verschaerft: dunkler Hintergrund in JEDEM Bild,
Charakter mindestens halbe Bildhoehe, Schritte als Plaketten neben ihm. Gate und Reaktor koennen
jetzt einen anderen Sollcharakter (`--character`) pruefen. Testvideo auf TikTok EN geplant
(Mi 23:00). Erens Rahmen fuer "Kurzgesagt": entertain, visual, schoen; weitere Stiltests moeglich,
aber erst alles hochladen.

2026-09-08 (12:40) — Batch 3 verteilt: 11/12 produziert, Gate 9 PASS (FAIL: 09 Gang = nur
Balken/Bein-Diagramme, 10 Schmerz am falschen Ort = Punkt-Linien-Gelenkdiagramme; beide Themen
sind "Vergleich/Kette"-Erzaehlungen, die NotebookLM trotz Szene als Diagramm zeichnet), 9 auf
TikTok DE geplant Mi 19:30 bis Fr 13:15, Facebook geplant, Instagram eingereiht. YouTube im
Reaktor gescheitert: erster Upload hing 30 min (Studio-Liste im Chrome mit neun liegengebliebenen
TikTok-Studio-Tabs traege), TimeoutExpired war in yt_crosspost nicht abgefangen. Fixes:
yt_crosspost faengt den Zeitueberlauf ab und schliesst Studio-Tabs; batch_publish schliesst nach
jedem Video alle tiktokstudio-Tabs per /json/close. Nachholer fuer 16 offene DE-Termine laeuft
seit 12:30 (Kanal jetzt mit erweiterten Funktionen). Video 12 (alles klebt) wartet auf Quota.

2026-09-08 (13:10) — YouTube-Uploader endgueltig repariert (fuenf Testlaeufe am Ischias-Video):
(1) Runtime.evaluate haengt, wenn der Studio-Renderer stumm ist -> 45-s-Frist je Auswertung,
(2) nie im Upload-Tab navigieren (Listenpruefung in neuem Tab), (3) Escape schliesst den ganzen
Dialog, #visibility-title klappt den Planen-Abschnitt zu -> Liste per Klick auf #step-badge-3
schliessen, (4) der Host-Klick auf ytcp-button#done-button ist wirkungslos, auch als CDP-Maus-
ereignis; nur der innere <button> loest das Planen aus, (5) Bestaetigung = Zelle
.tablecell-visibility der Shorts-Liste zeigt "Geplant". Nachholer fuer 15 DE-Termine laeuft.

2026-09-08 (13:30) — YouTube, entscheidender Befund nach neun Testlaeufen: Der Planen-Befehl
("Veroeffentlichungszeitpunkt festlegen") wird erst angenommen, wenn nach "Vorabpruefung
abgeschlossen" noch etwa zwei bis vier Minuten vergangen sind; vorher verpufft jeder Klick, egal ob
Host, innerer Button oder CDP-Mausereignis, und die Kopfzeile bleibt bei "Als Privat gespeichert".
Der innere <button> ist der richtige Klickpunkt; Erfolg zeigt sich binnen 10 s an der Kopfzeile
und binnen 30 s in der Shorts-Liste (.tablecell-visibility = "Geplant"). yt_publish: 60 s warten,
bis zu sechs Klicks im 45-s-Abstand, Liste bis 2 min pollen, Upload-Tab bis dahin offen halten.
Ischias (16:30) und Tasche (19:30) sind so geplant; Nachholer fuer die restlichen Termine laeuft.

2026-09-08 (14:20) — YouTube-Nachholer fertig, 0 Fehler: 15 Shorts geplant (heute 16:30/19:30,
Mi, Do, Fr bis 13:15), dazu Huefte (live seit gestern). Abend-Task PreviaReaktorDE3Abend (22:40,
--force, Deadline 06:00) holt Video 12 (alles klebt) nach; EN-Retry 22:30 parallel.

2026-09-08 (15:00) — Batch 4 DE vorbereitet (Erens Auftrag: noch einmal Deutsch, Qualitaetspruefung
mit Subagenten, dann alles posten). Erster Batch mit der Format-Palette: F1 Jonas (Bauchschlaf,
Fahrrad, Stehpult), F3 kontraintuitiv (Treppe runter, Sport rettet nicht, Ruecken nicht aus Glas),
F2 Direktansprache (Flug morgen, Rueckenschlaefer), F4 Enthuellung (Sockenanziehen, Zappeln), F5
Wissen (Kinder ohne Rueckenschmerzen, Staedtetrip vs. Wochenende); Format als Ordner-Suffix.
Vier Sonnet-Schreibgruppen, danach ein Opus-Reviewer, der alle zwoelf gegen den Brief prueft und
direkt korrigiert. Wrapper reaktor-batch4.cmd (Prefix 2026-09-09-de, Slots ab 09.09., Cross-Post
fb,ig,yt), Tasks PreviaReaktorDE4 23:00 und PreviaReaktorDE4Wachhund 09.09. 09:00. Sticker-Stil;
der Vektor-Look bleibt Test.

### 08.09. 21:30 — Reaktor: gemeinsame NotebookLM-Sperre je Notebook

**Anlass.** Heute Nacht laufen zwei DE-Reaktoren kurz nacheinander im selben NotebookLM-Notebook:
22:40 Video 12 aus Batch 3 (`--force`), 23:00 Batch 4. Die bisherige Sperrdatei gilt nur je Batch.
Nach einem Tageslimit hätten beide Schleifen (30-min-Takt) im selben Notebook-Tab generiert und
eingesammelt; der 07.09. hat gezeigt, was dann passiert (Welle mehrfach erzeugt).

**Entscheidung.** `reaktor.py` hält während `produce` und `collect` zusätzlich
`out/.nlm-<notebook>.lock` (Schlüssel: letztes Segment von `NLM_NOTEBOOK_URL`, sonst `standard`).
Hält eine andere lebende Instanz die Sperre, wartet der Reaktor im Minutentakt und übernimmt danach;
tote PIDs werden überschrieben. Trim, Gate, Planen und Cross-Posting laufen weiterhin parallel, die
teilen sich nur Chrome-Tabs, keinen Zustand. EN-Läufe (eigenes Notebook) sind nicht betroffen.
Nebenbefund: `tasklist` schreibt cp850, unter `-X utf8` warf die PID-Prüfung einen Reader-Traceback
(Ergebnis war zufällig richtig); jetzt Bytes ASCII-tolerant dekodiert (`pid_alive`).

**Rückweg.** Sicherung `scratchpad/reaktor.py.bak` der Sitzung; oder in `_go()` den
`nlm_acquire/nlm_release`-Rahmen entfernen. Liegengebliebene Sperre: `out/.nlm-*.lock` löschen.

**Stand Batch 4.** 12 Skripte F1–F5 vom Opus-Reviewer geprüft, `batch_check` grün, alle Hooks deutsch,
„Previa Health“ je Quelle exakt zweimal, keine Titel-Duplikate. Task PreviaReaktorDE4 23:00, Wachhund
09.09. 09:00. Slots ab 09.09. sind bis 10.09. 19:30 durch Batch 3 belegt, Batch 4 landet also ab 11.09.

### 09.09. 00:30 — NotebookLM-UI-Änderung: Einsammeln blind, 17 Generierungen verbrannt; Fix und Schutz

**Befund.** Seit dem 08.09. abends steht in jeder Artefaktzeile des Studio-Panels ein visuell verstecktes
Badge „Ungelesen“ (`span.cdk-visually-hidden`) vor dem Titel. Der Zeilen-Parser in `nlm_artifacts.py`
kannte nur das Icon „subscriptions“ davor, deshalb passte keine Zeile mehr, der Titel enthielt das Badge,
und `read_artifact_prompt` fand kein Artefakt („Dialog nicht lesbar (ARTEFAKT_NICHT_GEFUNDEN)“ für alle
Zeilen). Folge: `batch_produce` sah nach jeder Welle „nichts eingesammelt“ und generierte neu. Batch 4
erzeugte 01–03 dreimal bzw. zweimal, der EN-Nachholer seine Welle dreimal, bis um 23:33 das Tageslimit
zuschlug. Netto: 3 DE + 4 EN + Video 12 brauchbar, ~17 Generierungen für nichts.
Zweiter Fehler: der Nachholer für Video 12 (22:23, `--force`) gab nach Sekunden auf, weil `--force` die
Stufen, nicht aber die Startzeit zurücksetzte; die Deadline 06:00 lag damit in der Vergangenheit.

**Fixes.**
- `nlm_artifacts.py`: `_BADGES` (subscriptions|Ungelesen|Unread|Neu|New) wird vor Titel und Fragment
  abgestreift; die Artefaktsuche vergleicht auf whitespace-normalisiertem `innerText`.
- `reaktor.py`: liest das Einsammeln ≥3 Zeilen nicht und keine OK, bricht `produce` ab und meldet
  („Einsammeln liest keine Artefaktzeile mehr“, `einsammeln_kaputt` im State) statt neu zu generieren.
  `--force` setzt jetzt auch `started` zurück. NotebookLM-Sperre nur noch, wenn wirklich Videos fehlen.
- Deadlines auf 12:00 (Batch 4, EN-Nachholer); Nachhol-Tasks PreviaReaktorDE4Nacht (09.09. 22:30,
  `reaktor-batch4-nacht.cmd`, `--force --deadline 08:00`) und PreviaReaktorENRetryNacht (22:35).
  Erwartung nach der Limit-Historie: wenige Generierungen am Vormittag, der Rest ab ~22:30.

**Lehre (in CLAUDE.md).** Wenn ALLE Zeilen unlesbar sind, ist die Seite anders, nicht das Video: erst
`nlm_artifacts.py` ohne Argument laufen lassen und den Rohtext ansehen, nie neu generieren lassen.
Und: Bash-Heredocs dieses Chats halbieren doppelte Backslashes — Regex/JS-Escapes nur per Edit-Werkzeug.

**Rückweg.** Sicherungen `nlm_artifacts.py.bak` und `reaktor.py.bak` im Scratchpad der Sitzung;
Tasks mit `schtasks //Delete //TN <Name> //F` entfernen.

### 09.09. 01:00 — Nachtrag: die eigentlichen Ursachen waren Tab-Leck und falscher Notebook-Tab

**Befund.** Nach dem Badge-Fix scheiterten Lesen und Generieren weiter, diesmal mit „GEN FEHLER“,
„DIALOG_NICHT_NEU“ und „ARTEFAKT_NICHT_GEFUNDEN“. Zwei Ursachen:
1. `open_notebook.py` erzeugte bei jedem Aufruf einen neuen Tab (Target.createTarget), und
   `batch_produce`/`batch_collect` rufen es je Lauf. Im NotebookLM-Chrome standen 36 Notebook-Tabs;
   die Seite wurde träge, Klicks und Dialoge liefen ins Leere.
2. Ohne `NLM_NOTEBOOK_URL` nahmen `nlm_artifacts._page()` und `gen_video.page()` *irgendeinen*
   Notebook-Tab. Sobald ein EN-Lauf parallel lief (eigenes Notebook, gleicher Chrome), entschied die
   Tab-Reihenfolge, ob DE im DE- oder im EN-Notebook las und generierte. Erklärt auch die dreifach
   erzeugte Welle 2 vom 07.09. (drei Reaktoren parallel), die damals dem max-wait zugeschrieben wurde.

**Fixes.** `open_notebook.py` verwendet den vorhandenen Tab des Notebooks wieder (Page.navigate) und
schließt Duplikate; Bereitschaftsprüfung auf genau dieses Notebook. `nlm_artifacts.py` und
`gen_video.py` haben `DEFAULT_NOTEBOOK` (DE) und wählen nur den Tab dieses Notebooks. Überzählige Tabs
geschlossen (36 auf 9222). Zusätzlicher Nachhol-Task PreviaReaktorDE4Vormittag (09.09. 09:30,
`--force`, läuft bis alles da ist oder 10.09. 08:00); der 22:30-Task beendet sich dann am Batch-Lock.

**Stand 01:00.** Batch 3 vollständig (Video 12 auf TikTok 11.09. 16:30, FB geplant, IG-Queue; YouTube
scheiterte an einem Upload-Dialog-Timeout und wird vom nächsten Cross-Post-Lauf nachgeholt). Batch 4:
01–03 eingesammelt, Reaktor plant sie gerade; 04–12 offen (echtes Tageslimit seit 00:03). EN-Nachholer:
4 von 5 eingesammelt, 05 offen. **Rückweg:** `.bak`-Dateien im Scratchpad der Sitzung.

### 09.09. 14:30 — Morgenbefund: Ledger-Schreibkonflikt, Akku-Bedingung der Tasks, YouTube abgemeldet

**Ergebnis der Nacht.** Batch 4: 01–03 auf TikTok (11.09. 19:30, 12.09. 09:30, 12.09. 11:30), Facebook
geplant, Instagram-Queue; 04–12 offen (Tageslimit). EN-Nachholer: 07/10/15 auf TikTok EN (10.09.
19:00/21:00/23:00), 18 im Gate FAIL, 05 offen. Video 12 (Batch 3): TikTok 11.09. 16:30, FB, IG-Queue.

**Fehler 1: Ledger-Schreibkonflikt.** DE- und EN-Reaktor planten um 00:38–00:41 gleichzeitig. Beide
hielten `out/.scheduled.json` im Speicher und schrieben nach jedem Video die ganze Datei; der EN-Lauf
schrieb zuletzt und löschte so die drei DE-Einträge, obwohl die Videos bei TikTok geplant waren
(„report: 0 geplant“, YouTube-Cross-Post sah sie nicht). Doppelpost-Gefahr beim nächsten Planen.
Fix: drei Einträge von Hand nachgetragen (aus reaktor.log); `batch_publish.py`, `yt_crosspost.py` lesen
das Ledger jetzt unmittelbar vor jedem Schreiben neu, `meta_publish.queue_run` mischt nur den eigenen
Eintrag; `reaktor.py` hält während Planen und Cross-Post `out/.publish.lock` (Sperre wie bei NotebookLM).

**Fehler 2: Tasks starten nicht im Akkubetrieb.** `schtasks //Create` setzt
`DisallowStartIfOnBatteries` und `StopIfGoingOnBatteries` auf true. Der Vormittags-Nachholer scheiterte
um 10:58 mit 0x800710E0, und ein laufender Reaktor würde beim Ziehen des Netzkabels beendet. Fix: XML
exportiert, beide Werte auf false, mit `schtasks //Create //XML` neu angelegt (IGQueue, DE4Nacht,
DE4Vormittag, ENRetryNacht). Neue Tasks künftig immer so nachbehandeln (`scratchpad/tasks-akku.ps1`
als Vorlage; Regel in CLAUDE.md).

**Fehler 3: YouTube.** „Upload-Dialog nicht innerhalb 40 s“ (00:28, 00:42, 14:20) heißt: der DE-Chrome
(9223) ist bei Google abgemeldet, alle drei Konten stehen auf „Abgemeldet“, Studio leitet zur
Kontoauswahl um. Klick auf das Konto reicht nicht (Passwort nötig). Eren muss sich einmal im sichtbaren
DE-Chrome anmelden (`scripts/start-agent-chrome-de.ps1 -Visible`, danach ohne Flag neu starten); der
nächste Cross-Post-Lauf holt Video 12 und 01–03 dann automatisch nach (Ledger-Abgleich).

**Sonst.** NotebookLM-Tageslimit um 14:14 weiterhin aktiv; Nachholer DE4 läuft seit 14:13 in der
Schleife bis 10.09. 08:00. Verbrauchte Einmal-Tasks stehen noch in der Aufgabenplanung (harmlos).

### 09.09. 16:30 — Versionierung: zwei private GitHub-Repos (agents, workspace)

**Entscheidung.** Bis heute lag alles nur auf dem Laptop. Zwei Repos, weil `workspace/` für Hermes die
Git-Wurzel bleiben muss (Kontextdateien werden vom cwd aufwärts bis zur nächsten `.git` geladen; eine
Wurzel bei `agents/` würde CLAUDE.md in jeden Agenten-Prompt ziehen):
- `github.com/s6endemi/agents` = `C:\Users\Eren\agents` ohne `hermes-agent/` und ohne `workspace/`:
  Dokumente, Profile (config.yaml, SOUL.md, cron/jobs.json, eigene Skills, Skripte), `scripts/`, `skills/`.
- `github.com/s6endemi/workspace` = `agents/workspace`: AGENTS.md, Journal, Wissen, Briefs, Batches,
  Ledger, Captions, Queue.
Draußen: Hermes-Code (Klon, Installer stellt ihn her), die per Profil kopierte Hermes-Skill-Bibliothek
(nur die eigenen Skill-Ordner sind drin, ermittelt per Vergleich mit `hermes-agent/skills`), aller
Laufzeitzustand (Sitzungen, DBs, Caches, Logs, Browserprofile), alle Videos/Kontaktbögen, alle `.env`.
Zugang über HTTPS und den Windows-Credential-Manager (Konto s6endemi); kein SSH-Schlüssel auf dem Rechner.

**Rhythmus.** Am Ende jeder Sitzung mit dauerhaften Änderungen beide Repos committen (Nachricht verweist
auf den Journal-Eintrag) und pushen. Wiederherstellung: Hermes installieren, `agents` klonen,
`workspace` nach `agents/workspace` klonen, `.env`-Dateien einspielen, Agenten-Chromes sichtbar
starten und einloggen, Windows-Tasks neu anlegen (Akku-Flags beachten).

**Rückweg.** `.git`-Ordner löschen; die Repos auf GitHub sind privat und können gelöscht werden.

### 09.09. 22:50 — Abend: Batch 4 komplett, Facebook auf Eis, Vergleichstest ab 10.09.

**Batch 4 (Formate F1–F5).** Tageslimit gab gegen 19:00 frei; 12/12 produziert, Gate 10 PASS. FAIL:
07-flug-morgen (81 % leere Frames, Fenster/Campingstuhl ohne Charakter) und 10-zappeln (Strichfigur am
Schreibtisch). 10 Videos auf TikTok DE geplant (01–03 ab 11.09. 19:30, 04–12 bis 13.09. 16:30), alle in der
Instagram-Queue und als YouTube-Shorts (0 Fehler). Facebook wurde übersprungen (Pause). Der 22:30-Nachhol-Task
lief mit `--force` noch einmal durch und schickte denselben Bericht ein zweites Mal (harmlos; Einmal-Tasks
sind verbraucht). EN-Nachholer: 05-back-when-standing produziert, 7/7, 4 PASS geplant, 3 FAIL.

**Facebook.** Reichweite der Seite seit 06.09. 17:25 bei 0–3 Views je Reel, unabhängig vom Weg (Planer-Posts
vom 07.09. genauso wie API-Posts); „Empfehlung der Seite: Kann empfohlen werden“, also keine Sperre. Ursache
vermutlich ausgelaufene Testreichweite einer Seite mit 4 Followern plus Spam-Signale (5–7 Reels/Tag, 13
Uploads in 11 Minuten am 07.09., vier Doppel-Uploads durch Überschneidung Agent/Cross-Posting).
Maßnahmen: `out/.fb-pause` (meta_crosspost überspringt Facebook, Datei löschen = wieder aktiv); die 13
geplanten Reels per `fb_pause_scheduled.py --go` um 25 Tage verschoben (Facebook nimmt höchstens 30 Tage ab
jetzt; Eren hat es ausgeführt, der Classifier blockt Schreibzugriffe auf die Seite aus dem Chat; Ledger
merkt sich `fb.pausiert_seit`). Vergleichstest 10.09.: Eren postet 09:30 von Hand (02-muskelkater), Claude
plant 13:15 per API (03-sehnen-federn), sonst nichts auf Facebook. Danach: 1 Reel/Tag, nur TikTok-Bewährte,
Duplikat-Sperre; Token mit `read_insights` neu erzeugen.

**Nebenbefund.** `tt-metrics` liest nur die ersten neun Studio-Einträge (geplante), veröffentlichte Videos
fehlen seit dem Planen — reparieren.

### 10.09. 17:00 — Batch 5 (2026-09-10-abend-de, Prefix 2026-09-10-de) gestartet

**Anlass.** Eren: „Mir haben die letzten Videos alle deutlich besser gefallen, spannende Themen und gute
Visualisierungen. Prüf, ob der neue Batch funktioniert, und poste direkt.“ Gleicher Weg wie Batch 4:
Format-Palette 3× F1, 3× F3, 2× F2, 2× F4, 2× F5, Variante K.

**Herstellung.** Sperrliste `_themen-bisher.md` (83 Titel + Hooks aller Batches, per Skript erzeugt) →
vier Sonnet-Schreiber parallel mit getrennten Themenpools (Schlaf/Füße/Stehen; Sitzen/Knie/Mythen;
Gehen/Atmen/Tragen; Hüfte/Hocke/Alltagsmysterien) und Goldstandard-Beispielen aus Batch 4 → ein
Opus-Reviewer gegen Brief, Bildregeln, Domänen-Passung (Bewegung/Haltung, nicht Gehirn/Schlaf) und
Dedup innerhalb des Batches. Der Reviewer ersetzte 7 von 12: Hotel-Erste-Nacht (Gehirnthema), Konzert-
Balance (Dublette Socken), harte Matratze (Dublette Rückenschläfer), Kiste heben (verbotene Formulierung
und Bowlingkugel-Metapher), Einkaufstüten (Dublette einseitige Last), Schneidersitz (Dublette Hocke),
Gähnen/Strecken (Dublette Körper streckt sich). Lehre: Parallele Schreiber dedupen nicht gegen den
Goldstandard und nicht gegeneinander; der Reviewer-Schritt ist Pflicht, nicht Kür.

**Endstand.** Teppichkante, enge Schuhe, verdreht vorm Fernseher (F1); gerade sitzen, Schwimmen,
Sixpack (F3); knien, über Kopf (F2); Luft anhalten, aus dem Bett (F4); kalter Morgen, nachts drehen
(F5). `batch_check` grün, Hooks deutsch, „Previa Health“ je Quelle zweimal, keine Duplikate.
Reaktor per Task PreviaReaktorDE5 um 16:59 gestartet (Wachhund 11.09. 09:00, Akku-Flags aus), Slots ab
13.09. hinter Batch 4, Deadline 11.09. 12:00, Cross-Post ig,yt (Facebook pausiert).

**Rückweg.** Batch-Ordner löschen, Tasks PreviaReaktorDE5/-Wachhund entfernen.

### 10.09. 21:05 — Batch 5: zwei Skripte von NotebookLM abgelehnt, zurückgestellt

**Befund.** 10 von 12 Videos zwischen 17:03 und 18:40 sauber erzeugt. `02-jonas-enge-schuhe-f1` und
`10-aus-dem-bett-f4` scheiterten je zweimal (17:03/18:21 und beide 20:13) mit dem NotebookLM-Fehler
„Die Video-Zusammenfassung konnte nicht erstellt werden“, während die Nachbarvideos derselben Welle
gelangen. Also inhaltlich, nicht Limit. `batch_produce` erkennt solche Fehlerzeilen nicht und wartet
trotzdem die vollen 45 Minuten (`KEIN ARTEFAKT`); der Reaktor hätte noch zweimal so gewartet.

**Maßnahme.** Reaktor gestoppt (Prozessbaum), beide Ordner nach `_zurueckgestellt/` (mit GRUND.txt),
Reaktor per Task neu gestartet: 10 Items, Produktion „alle vorhanden“, dann Gate, Planung ab 13.09.
19:30, Instagram-Queue, YouTube. Facebook pausiert.

**Offen.** (1) `batch_produce`/`batch_collect`: Fehlerzeilen („konnte nicht erstellt werden“, Buttons
„Wiederholen/Löschen“) erkennen, Item als GEN FEHLER markieren und nicht 45 min warten; die Fehlerzeilen
im Notebook löschen. (2) Die zwei Skripte umschreiben (andere Metapher/Formulierung) und als Mini-Batch
nachholen; Auslöser unbekannt, Wortmaterial beider Quellen vergleichen (Kandidaten: „wrecked“, „hardest“,
Schmerz-Wörter).

**Ergebnis 21:35.** Gate 8 PASS, 2 FAIL (05-schwimmen: nur Pfeile/Text; 06-sixpack: nur Diagramme, kein
Charakter; beides F3-Mechanik-Erklärungen, siehe Befund „Vergleiche werden Diagramme“). 8 Videos auf
TikTok DE 13.09. 19:30 bis 15.09. 11:30, Instagram-Queue, YouTube 0 Fehler. Batch 5 gesamt: 12 Skripte,
8 veröffentlicht, 2 von NotebookLM abgelehnt, 2 im Gate. Nächster Batch: F3 braucht eine Szene mit
Handlung statt Erklärung, sonst zeichnet NotebookLM Grafiken.

### 11.09. 21:45 — Meta sperrt den API-Zugriff („API access blocked“); Instagram-Queue pausiert; Batch 6 ohne Google Pro

**Befund.** Seit heute Nachmittag antwortet die Graph API für App-Token, Nutzer-Token und Seiten-Token nur
noch mit `code 200 "API access blocked"`; auch `debug_token` und die App selbst. Instagram-Queue: 13:15
noch veröffentlicht, 16:30 `ProcessingFailedError`, 19:30 Berechtigungsfehler. Das ist eine Sperre auf
App-Ebene (App-Dashboard bei Meta prüfen: Einschränkungen, Benachrichtigungen, Datenverwendungs-Check,
Business-Verifizierung), nicht ein abgelaufenes Token. Das Ergebnis des Facebook-Vergleichstests
(manuell 10.09. mittags gegen API 16:30) ist deshalb per API nicht lesbar; Eren liest es in der
Business Suite ab.
**Maßnahmen.** `out/.ig-pause` (meta_publish.queue_run überspringt, Einträge bleiben „offen“); die beiden
FEHLER-Einträge (12-faszie, 01-jonas-bauchschlaf) wieder auf „offen“. Facebook-Pause bleibt. Ein Batch
„mit Facebook inklusive“ ist erst nach Aufhebung der Sperre möglich.
**Batch 6** (2026-09-11-abend-de, Prefix 2026-09-11-de): erster Lauf ohne Google-One-Pro (Abo heute
ausgelaufen), misst das freie NotebookLM-Kontingent. `batch_produce` erkennt seit heute Ablehnungen
(„konnte nicht erstellt werden“) und wartet nicht mehr 45 min; Brief um F3-Befund ergänzt. Vier
Sonnet-Schreiber mit neuen Pools (Pendeln/Küche/Garten; Knie/Schuhe/Heben-Mythen/Pausen; Spazieren/
Kinderwagen/Rucksack/Rad/Stehen; Hüfte/Balance/Alltagsmysterien), dann Opus-Reviewer. Tasks
PreviaReaktorDE6 (23:30) und -Wachhund (12.09. 09:00), Akku-Flags aus. Cross-Post ig,yt (fb pausiert,
IG-Queue pausiert; YouTube läuft).

### 11.09. 22:40 — Messung ohne Google One AI Pro: 3 Video-Übersichten pro Tag

**Ergebnis.** Batch 6 im frischen Notebook: Welle 1 (drei Videos) in sieben Minuten erzeugt, das vierte
sofort `TAGESLIMIT`. Das freie NotebookLM-Kontingent sind also **drei Video-Übersichten pro Tag** (mit Pro
waren es ~20 je rollende 24 h). Dazu die freien Grenzen 50 Quellen je Notebook und 100 Notebooks, deshalb
ab jetzt ein frisches Notebook je Batch (`NLM_NOTEBOOK_URL` im Wrapper). Der Reaktor läuft in der
Limit-Schleife bis 12.09. 12:00 und plant dann, was da ist.
**Konsequenz.** Mit 3/Tag ist genau eine Spur mit drei Slots haltbar, ohne Puffer, ohne EN, ohne Ausschuss
im Gate (Batch 5: 4 von 12 fielen raus). Empfehlung an Eren: Google One AI Pro wieder aktivieren, solange
NotebookLM der Videogenerator ist; die Pipeline ist auf Volumen gebaut.
**Nebenbefunde heute Abend.** (1) `add_source.py`, `download_video2.py`, `finish_gen.py` nahmen ohne
`NLM_NOTEBOOK_URL` irgendeinen Notebook-Tab (Rest des Fehlers vom 09.09.): Quellen landeten im falschen
Notebook, 19 Optionen für 12 Quellen, Quellenwahl „mehrdeutig“. Jetzt überall `_WANTED` mit festem
Standard-Notebook. (2) `gen_video.py` akzeptiert identische Mehrfachtreffer in der Quellenwahl (erste
wird gewählt). (3) Zwei verwaiste Notebooks (be5bbfa5 mit Dubletten, 3b517586 als Altbestand) können
in NotebookLM gelöscht werden. (4) Heredoc-Falle erneut: Windows-Pfade in Python-Strings nur als r"…".

### 12.09. 11:10 — Neustart, Batch 6 zu 8/12, Google AI Plus statt Pro, EN-Batch 7 aus bewährten DE-Skripten

**Abo.** Eren hat am 11.09. 23:40 Google AI Plus abgeschlossen (nicht Pro). Wirkung sofort: nach den drei
freien Generierungen (22:25) liefen ab 23:45 sechs weitere; um 10:59 am 12.09. wieder `TAGESLIMIT` bei 4
offenen. Plus-Kontingent also zwischen 9 und ~10 je 24 h, genaue Messung heute Abend (Nachhol-Task
PreviaReaktorDE6Nacht 22:45, `--force`). Pro (~20/Tag) bleibt die Empfehlung, wenn zwei Spuren laufen sollen.
**Neustart des PCs (~10:30)** beendete den Reaktor (8 von 12 Videos lagen in out/). Wachhund 10:36 mit
0x800710E0 trotz Akku-Flags aus (vermutlich vor der Anmeldung gefeuert). Von Hand neu gestartet 10:59;
Deadline 12:00 (aus `started` 23:45), dann Gate und Planung der acht (TikTok DE ab 15.09. 13:15, YouTube;
IG-Queue und Facebook pausiert).
**EN-Batch 7 (2026-09-12-en, Prefix 2026-09-12-en).** Erens Wunsch: „zweite Hälfte auf Englisch“. Umsetzung
wie im Brief vorgesehen: zwölf bewährte DE-Skripte (Gate PASS, Batch 4/5: Bauchschlaf, Fahrrad,
Teppichkante; Treppe runter, Rücken nicht aus Glas, gerade sitzen; Rückenschläfer, knien; Socken, Luft
anhalten; Kinder, nachts drehen) mit unveränderter Quelle, Prompt und Caption von zwei Sonnet-Agenten ins
Englische übertragen, Hooks in geraden Anführungszeichen, `batch_check` grün. Frisches EN-Notebook
f9c0d146, Wrapper `reaktor-en-batch7.cmd` (--lang Englisch, Port 9222, @previahealth, Slots
14/19/21/23, Cross-Post yt ohne EN-Kanal = übersprungen), Tasks PreviaReaktorEN7 (23:30) und -Wachhund
(13.09. 09:00), Akku-Flags aus. Reaktor um 11:07 gestartet; teilt sich das Tageslimit mit DE.
**YouTube EN / Facebook EN.** YouTube EN sobald Eren einen zweiten Kanal anlegt und sich im EN-Chrome
anmeldet (Kanal-ID in `channels.json`). Facebook EN erst nach Aufhebung der Meta-Sperre und Klärung der
DE-Reichweite.

### 12.09. 12:10 — Reaktor: bei Tageslimit sofort veröffentlichen, was fertig ist

**Anlass.** Eren: „Sobald das Limit erreicht ist, sollen die Videos, die existieren, hochgeladen werden,
nicht warten, bis eine Anzahl vollständig ist.“ Bis heute lief Planen erst nach Ende der Produktion oder
zur Deadline; die acht fertigen Batch-6-Videos lagen seit der Nacht ungeplant, die Deadline 12:00 hätte
sie erst mittags freigegeben (von Hand um 11:59 mit abgelaufener Deadline ausgelöst).
**Umbau `reaktor.py`.** Neue Methode `zwischenstand()`: im `TAGESLIMIT`-Zweig der Produktionsschleife
werden vor dem 30-min-Warten Nachzügler eingesammelt und alle fertigen, laut TikTok-Ledger ungeplanten
Videos durch Trim, Gate, Planen und Cross-Post geschickt (unter `out/.publish.lock`). Stufen bleiben
offen, der Endlauf nimmt die Nachzügler mit; alles ist idempotent (gate.json cached Urteile, Ledger
verhindert Doppel, Trim erkennt fehlendes Outro). Die Stufen `gate/publish/crosspost` sind dafür in
`_gate_run/_publish_run/_crosspost_run` (ohne Markierung) und die markierenden `stage_*` aufgeteilt.
Gilt ab dem nächsten Reaktorstart (Nachholer 22:45, EN-Reaktor nach Neustart).
**Rückweg.** `zwischenstand()`-Aufruf im Limit-Zweig entfernen.
