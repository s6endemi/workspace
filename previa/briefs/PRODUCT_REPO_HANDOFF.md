# Übergabe: PREVIA-Produkt-Repository

Dieser Auftrag ist ausschließlich im Repository
`C:\Users\Eren\physio\posedetection` auszuführen. Den Agenten-Workspace unter
`C:\Users\Eren\agents` dabei nicht verändern.

## Ziel

Das Produkt-Repo so vorbereiten, dass das Hermes-Profil `previa` den technischen
Produktzustand zuverlässig verstehen und Funnel-Analytics sicher read-only
auswerten kann, ohne eine zweite Produktwissensbasis zu erzeugen.

## Sicherheitslage vor Beginn

Der Haupt-Checkout hat bereits nicht zugeordnete Änderungen. Zuerst
`CLAUDE.md` vollständig lesen und `git status --short` prüfen. Bestehende
Änderungen weder überschreiben, stagen noch committen. Wenn eine benötigte Datei
bereits verändert ist, ausweichen oder die Kollision konkret melden.

## Aufgaben

1. **Repo-Einstieg für Agenten prüfen**
   - Prüfen, ob eine Root-`AGENTS.md` existiert und für Hermes/Codex nötig ist.
   - Falls sie fehlt, eine kurze Quellenkarte anlegen, die `CLAUDE.md` als
     verbindliche technische Arbeitsregel referenziert. `CLAUDE.md` nicht
     duplizieren.
   - Einstiegspunkte für App, Funnel, Blog/Content, Analytics, Payments und
     Tests nennen; nur verifizierte Pfade verwenden.

2. **Funneldefinitionen dokumentieren**
   - Tatsächliche Events, Tabellen und Definitionen im Code und Schema prüfen.
   - Eine kompakte technische Referenz unter `docs/analytics/` anlegen oder eine
     bestehende aktualisieren: Sessions/Quelle, Teststart, Testabschluss, Auth,
     Ergebnis/Paywall, Checkout, Kauf, Refund, Rückkehr/Retest.
   - Consent-bedingte Untererfassung und bekannte Analytics-Races/Blindspots aus
     `CLAUDE.md` berücksichtigen. Keine Zahlen erfinden.

3. **Sichere Analytics-Abfragen bereitstellen**
   - Vorhandene Queries/Skripte wiederverwenden, bevor Neues gebaut wird.
   - Nur wenn nötig kleine, reproduzierbare Read-only-Abfragen oder Views für
     Funnel, Käufe und Retention vorbereiten.
   - Keine E-Mail-Adressen, Rohvideos, Bewegungsdaten oder personenbezogenen
     Gesundheitsdaten ausgeben. Aggregation und Mindestgruppengröße bevorzugen.
   - Eine notwendige Migration nur als Datei vorbereiten; nicht produktiv
     anwenden.

4. **Supabase-MCP absichern**
   - Die bestehende projektgebundene `.mcp.json` prüfen.
   - Für reguläre Agenten-Analytics `read_only=true` setzen und nur notwendige
     Feature-Gruppen aktivieren, sofern dies bestehende Entwicklungsabläufe nicht
     unbemerkt bricht.
   - Keine Tokens oder Projektkennungen in Bericht oder Commit kopieren.

5. **Verifizieren**
   - Vorgeschriebene Builds/Tests aus `CLAUDE.md` ausführen, soweit Dateien
     verändert wurden.
   - Mindestens eine Funnel-Abfrage gegen die tatsächliche Datenquelle prüfen.
   - Ergebnis mit Dateiliste, Diff, ausgeführten Checks, offenen Messlücken und
     allem, was ausdrücklich nicht produktiv angewandt wurde, zurückmelden.

## Nicht Teil dieses Auftrags

- keine Produktneugestaltung;
- keine neue Company-Intelligence-API und kein eigener MCP-Server;
- keine produktive Migration, kein Deployment, kein Push oder Merge;
- keine Änderung unter `C:\Users\Eren\agents`;
- keine Bereinigung des bereits schmutzigen Arbeitsbaums.

## Erwartete Rückgabe an das Hermes-Profil

- verifizierte Einstiegspfade;
- Definition jeder Funnelmetrik und ihrer bekannten Lücke;
- sichere Abfragewege;
- ausgeführte Tests/Builds;
- Diff beziehungsweise lokaler Commit zur Prüfung;
- klare Angabe, welche Freigabe als Nächstes nötig ist.
