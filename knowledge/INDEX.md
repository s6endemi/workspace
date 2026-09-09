# Wissensbasis — Index

**Zweck:** Ein Eintrag = eine verwertbare Aussage mit Zahl und Quelle. Der Index ist
die Arbeitsfläche; die Einzeldateien werden nur gelesen, wenn ein Eintrag wirklich
gebraucht wird. So bleibt der Token-Aufwand konstant, egal wie groß die Basis wird.

**Format je Zeile:**
`| Datum | Feld | Nutzen | Kernaussage (mit Zahl) | Quelle | Status |`

**Einordnung in der Einzeldatei:** `quellebene` trennt belastbare Evidenz und
Validierung von Produkt- oder Markt-Signalen. Nur Evidenz/Validierung wird als
langlebiges Wissen hier aufgenommen; kurzfristige Entwicklungen liegen unter
`../signals/` und werden nach 30 Tagen entfernt.

**Nutzen** — die wichtigste Spalte, sie steuert die Verwendung:

| Wert | Bedeutung |
|---|---|
| `stuetzt` | Untermauert Previas Position — direkt zitierbar |
| `warnt` | Widerspricht oder relativiert — **vor jedem Post zum Thema lesen** |
| `contrarian` | Widerlegt eine verbreitete Annahme — starkes Post-Material |
| `kontext` | Hintergrund, nicht direkt verwertbar |

Status: `frisch` · `verwendet <Datum>` · `schwach` (Beleg dünn, trotzdem behalten)

---

## Einträge

| Datum | Feld | Nutzen | Kernaussage | Quelle | Status |
|---|---|---|---|---|---|
| 2026-08-24 | previa-data | stuetzt | Forward Head Posture 64 % (250+ Assessments, 2025) | previa.health/blog, 250-assessments.md D-08 | frisch |
| 2026-08-24 | previa-data | stuetzt | Durchschnittsscore 61/100; Verteilung 3 % Excellent / 31 % Good / 48 % Moderate / 18 % Needs Work | 250-assessments.md D-02, D-04 | frisch |
| 2026-08-24 | previa-data | stuetzt | Squat: Vorneigung 76 %, Arme nicht overhead 74 %, Knee Valgus 47 %, Bein-Asymmetrie 41 % | 250-assessments.md D-05/06/10/11 | frisch |
| 2026-08-24 | previa-data | contrarian | 95 % hatten mindestens einen Befund (12 von 250+ ohne) | 250-assessments.md D-03 | frisch |
| 2026-08-24 | previa-data | contrarian | Cross-body compensation 73 % — Range ≠ saubere Bewegung | 250-assessments.md D-07 | frisch |
| 2026-08-24 | previa-data | stuetzt | Movement Age: 7 von 10 bewegen sich älter als ihr Alter, Ø 7 Jahre Differenz | 250-assessments.md D-12 | frisch |
| 2026-08-24 | longevity | stuetzt | 5-kg-Abnahme der Grip Strength: all-cause mortality HR 1,16 (95-%-KI 1,12–1,20); 42 Studien, n=3.002.203 | Wu et al. 2017, PMID 28549705 | frisch |
| 2026-08-24 | longevity | stuetzt | Langsamstes vs. schnellstes Quartil Gehgeschwindigkeit: Mortalitäts-HR 2,87 (2,22–3,72); 5 Studien, n=14.692 | Cooper et al. 2010, PMID 20829298 | frisch |
| 2026-08-24 | ai-health | stuetzt | Markerless 3D gait: walking speed, step time, step length ICC 0,81–0,98; 22 Studien | Scataglini et al. 2024, PMID 38894476 | frisch |
| 2026-08-24 | msk | kontext | FHP und cervical flexion bei 400 Fahrer:innen: r=0,71 (Auto) / 0,78 (Bike) | Aafreen et al. 2024, PMID 39116115 | frisch |
| 2026-08-24 | ai-health | warnt | OpenCap-Scoping-Review: 51 Studien; Sagittalebene sowie Squats/Walking genauer als komplexere Bewegungen | Zhang et al. 2026, PMID 42597547 | frisch |
| 2026-08-24 | msk | kontext | [GEKLÄRT: Previa nutzt keine 2D-Frontalebene beim Single-Leg Squat] 2D vs. 3D knee frontal plane angle: Single-Leg Squat r=0,127 (p=0,094), Landing r=0,619 (p<0,001); 16 Studien | Lopes et al. 2018, PMID 29895235 | frisch |
| 2026-08-24 | ai-health | contrarian | Systematische Review: 2.716 Records, nur 8 eingeschlossene Studien zu kamera-basiertem Mobile Movement Screening | El-Rajab et al. 2025, PMID 40416048 | frisch |
| 2026-08-27 | ai-health | warnt | OpenCap vs. MoCap bei acht dynamischen Aufgaben (n=41): Sagittalebene r=0,70–0,99, out-of-plane NRMSE 29,0–136,3 %; keine Präzision für absolute out-of-plane-Werte | Liang et al. 2026, PMID 42318929, DOI 10.1080/14763141.2026.2689518 | frisch |
| 2026-08-25 | longevity | stuetzt | SPRINTT-RCT, SPPB 3–7: Mobilitätsbehinderung 46,8 % vs. 52,7 %, HR 0,78 (0,67–0,92); n=1.205 | Bernabei et al. 2022, PMID 35545258 | frisch |
| 2026-08-25 | ai-health | stuetzt | Handheld Smartphone-Kinematik: Medianfehler 2,79° vs. markerless multi-camera und 2,74° vs. optical motion capture; prospektiv ICC >0,9 | Peiffer et al. 2026, DOI 10.1038/s41746-026-02825-w | frisch |
| 2026-08-25 | ai-health | stuetzt | Remote Shoulder Flexion via Zoom + Smartphone-App: r=0,955/0,980 zur 3D-Analyse; n=16 | Tozawa et al. 2023, PMID 37405179 | frisch |
| 2026-08-25 | msk | kontext | Smartphone-Clinometer: scapular upward rotation Intrarater-ICC 0,76–0,85; Tilt nur bei niedriger Elevation vergleichbar; n=57 | Kaur et al. 2023, PMID 37643757 | frisch |
| 2026-08-25 | msk | warnt | FHP-Messung: 21 Studien, 11 Methoden; klassische Photogrammetrie reliabel, Validität insgesamt nicht abschließend | Mylonas et al. 2022, PMID 35935117 | frisch |
| 2026-08-28 | ai-health | warnt | Single-camera Deep Vision vs. 3D-MoCap, Knee-ROM bei endgradiger OA (n=15): mittlere Differenz 0°; 95%-LoA für Flexion, Extension und ROM innerhalb/gleich ±10° — nur sagittal und plattformspezifisch | Langley et al. 2026, PMID 41275724, DOI 10.1016/j.physio.2025.101850 | frisch |
| 2026-08-29 | digital-biomarkers | warnt | Wearable-Mobilitätsbiomarker (97 Studien): ICC 0,70–0,98 bzw. AUC 0,73–0,94 studie-spezifisch; direkte longitudinale Evidenz für Mobilitätsabbau begrenzt und heterogen | Dharmansyah et al. 2026, PMID 42531184, DOI 10.1159/ger/acxag001 | frisch |
| 2026-08-31 | digital-biomarkers | warnt | Passive Smartphone-rPPG: HR gegen ECG MAPE 5,65 % (95-%-KI 4,25–7,29), aber tägliche RHR nur gegen Wearable MAE <5 bpm; 162.546 Validierungsvideos / n=211 | Liao et al. 2026, DOI 10.1038/s41586-026-10507-6 | frisch |
| 2026-09-01 | health-products | warnt | sDHT-Usability-Review: Zufriedenheit 83 % und Ease of Use 91 % bewertet, aber Verständlichkeit/Handlungsfähigkeit nur 9 % (14/164 Tools); 83 Studien | Tandon et al. 2024, PMID 39546781, DOI 10.2196/57628 | frisch |
| 2026-09-02 | health-products | kontext | Patientenseitige mHealth-Usability-Review: mittlerer SUS 76,37 (50 Studien), über Acceptability-Benchmark 68; 146 Studien insgesamt | Bosoni et al. 2026, PMID 42175240, DOI 10.3233/SHTI260570 | frisch |
| 2026-09-01 | health-data | warnt | Wearable-Privacy-Analyse (17 Hersteller): High Risk bei Transparenz 76 % und Vulnerability Disclosure 65 % | Doherty et al. 2025, PMID 40517175, DOI 10.1038/s41746-025-01757-1 | frisch |
| 2026-09-03 | ai-health | warnt | Smartphone-2D-Pose vs. 3D-MoCap, Schulter-ROM (n=17): Abduktion/Flexion R² >0,98, aber 2–25° Überhöhung bei größerem ROM und thorakaler Kompensation; Extension/Außenrotation variabler | van den Hoorn et al. 2025, PMID 40787239, DOI 10.1177/17585732251360746 | frisch |
| 2026-09-07 | digital-biomarkers | warnt | Wrist-Accelerometer vs. Kraftplatte für Sprung-Impact: R² 0,443, MAE 5,83 m·s⁻², 95-%-LoA −15,66 bis 15,77 m·s⁻²; 4-Klassen-Accuracy 54,4 % | Reverte-Pagola et al. 2026, PMID 42693353, DOI 10.1007/s11657-026-01715-8 | frisch |

---

## Themenfelder

- **`msk/`** — Movement, Muskuloskelettales, Mobility, Assessment-Methodik
- **`longevity/`** — Healthspan, biologisches Alter, VO2max, Grip Strength, Sarkopenie
- **`ai-health/`** — KI-Diagnostik, Computer Vision in der Medizin, Wearables, Screening
- **`digital-biomarkers/`** — Smartphone-/Kamera- und Wearable-Signale, longitudinale Messung, Validierung
- **`health-data/`** — Big Data, Kohorten, Datenqualität, Privacy, Korrelation vs. Kausalität
- **`health-products/`** — Health-AI-Produktlogik, Interpretation, Vertrauen, Zugang, Feedback-Loops
- **`previa-data/`** — **eigene Messdaten; das wertvollste Material, weil exklusiv**

## Lücken

Was fehlt, gehört hierher — der Recherche-Job arbeitet diese Liste bevorzugt ab.

- Belastbare Zahlen zu Prävalenz von Forward Head in einer repräsentativen Allgemeinbevölkerung mit standardisierter FHP-Definition (Vergleichswert für die eigenen 64 %)
- Externe Validierung von smartphone-/2D-kamerabasierter Bewegungsanalyse für dynamische Shoulder Elevation außerhalb kleiner beschwerdefreier Stichproben sowie robuste Frontalebenen-Kompensations-Kategorien; präzise 2D-Knie-Frontalwinkel beim Single-Leg Squat sind nicht ausreichend validiert
- Prospektive Evidenz, ob gezielte Verbesserungen einzelner Mobility-/Bewegungsmetriken — unabhängig von Mehrkomponentenprogrammen — spätere Healthspan-Outcomes verändern
- Google-/Smartphone-Kamera-Forschung: welche validierten Funktions- oder Gesundheitsmessungen sind wiederholt und außerhalb des Labors robust?
- Wearable-/Big-Data-Studien: Die Review von 97 Studien zeigt begrenzte, heterogene direkte longitudinale Evidenz für Mobilitätsabbau; offen sind robuste Within-Person-Validierung und die Trennung von Korrelation, Intervention und individueller Handlungsempfehlung.
- Health-AI-Produkte: Es gibt einen starken Evaluationsmangel bei Verständlichkeit/Handlungsfähigkeit; offen ist belastbare Outcome-Evidenz, ob Kontext und Interpretation statt weiterer Dashboards tatsächlich Nutzerentscheidungen oder Health Outcomes verbessern.
- Privacy, Consent und Bias bei kamera- und wearablebasierter Prävention: Für Wearable-Policies sind Transparenz- und Vulnerability-Disclosure-Lücken belegt; offen sind technische Datenfluss-Audits, wirksame Consent-Mechanismen und Bias-Evidenz speziell für kamera-basierte Prävention.
