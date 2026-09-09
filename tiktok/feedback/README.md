# TikTok-Feedbackschleife

Die tägliche 12-Uhr-Messung schreibt ohne LLM und ohne Tokenverbrauch Post-,
Profil- und Follower-Daten aus TikTok Studio nach `metrics/`. Montag ab 11:15 entsteht ein unabhängiger
Außenblick, Mittwoch 12:15 vergleicht der Lernjob reife Kohorten und ersetzt
`latest.md` mit einer kompakten Entscheidung. `experiments.md` ist das
verbindliche Experimentregister.

Regeln:

- Pinned Alt-Hits nicht mit frischen Posts in einen Durchschnitt mischen.
- Primär Posts ab 24 Stunden, endgültiger ab 72 Stunden bewerten.
- Keine Regel aus einem einzelnen Video ableiten. Mindestens vier vergleichbare
  automatisierte Posts oder ein Signal über dem Zweifachen des Account-Medians.
- Gleichzeitig höchstens ein aktives Experiment und nur eine geänderte Variable.
- Jedes neue Video trägt genau ein Ziel-Tag aus `business-objective.md`.
  Verschiedene Ziele nie über eine einzige View-Rangliste bewerten.
- Aggregierte Followerwerte nicht einem einzelnen Video kausal zuschreiben.
- Ein Experiment bleibt bis zur vorab definierten Mindeststichprobe stabil;
  tägliche Messung darf es nicht spontan ersetzen.
- Standard sind ungefähr zwei Wochen pro Creative-Experiment: 8 reife Posts je
  Arm und Account plus mindestens 72 Stunden Reife.
- Kein Experiment verändert automatisch AGENTS.md. Dauerhafte Regeln erst nach
  wiederholtem Signal dokumentieren.
