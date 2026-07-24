# Audit und Umsetzungsstand: Razieh.dev One-Page-Portfolio

Stand: 24. Juli 2026

## Status-Legende

- `[x]` umgesetzt und lokal verifiziert
- `[ ]` benötigt noch eine Entscheidung, manuelle Prüfung oder ein echtes Deployment
- „Nicht anwendbar“ bedeutet, dass der Punkt nicht mehr zum aktuellen Produkt gehört

## Gesamtstand

Die lokale Anwendung ist strukturiert, getestet und produktionsfähig buildbar. Inhalte, Projektdaten und UI sind getrennt. Accessibility- und SEO-Basics sind eingebaut. GitHub Pages ist als Hosting-Ziel festgelegt und das automatische Deployment ist konfiguriert. Offen bleiben hauptsächlich persönliche Bestätigungen, echte Mobile-/Tastaturtests und die Live-Abnahme.

Aktuell bestätigt:

- [x] `npm ci`: Lockfile-Installation erfolgreich
- [x] `npm test`: 5 Testdateien, 10 Tests erfolgreich
- [x] `npm run lint`: erfolgreich
- [x] `npm run build`: erfolgreich
- [x] `npm audit`: 0 bekannte Schwachstellen
- [x] Produktions-Preview startet lokal

## Phase 1: Produktinhalt finalisieren

Ziel: Die Seite ist inhaltlich klar, ehrlich und professionell.

- [x] Vollständiger Name und Rolle stehen sichtbar im Hero.
- [x] Hero-Text beschreibt Schwerpunkt und Arbeitsweise.
- [x] Die Website bleibt konsistent englisch; `html lang="en"` passt dazu.
- [x] About-Text wurde final und ohne generische Platzhalter formuliert.
- [x] Skills-Liste wurde auf den verwendeten und angestrebten Stack abgestimmt.
- [x] Core Skills im Footer wurden finalisiert.
- [x] Prozess-Schritte wurden konkretisiert.
- [ ] Kontakt-E-Mail durch die Eigentümerin persönlich bestätigen.
- [ ] LinkedIn-Profil im normalen Browser persönlich öffnen; automatisierte Anfrage wird von LinkedIn mit Status 999 blockiert.
- [x] GitHub-Profil automatisiert mit HTTP 200 geprüft.
- [x] Die aktuelle dreiseitige CV-PDF ist als „Download CV“ sichtbar eingebunden und im Produktions-Build enthalten.
- [x] Das Social-Preview-Bild dient als zugänglicher, per Maus und Tastatur bedienbarer Intro-Screen.
- [x] Direkte Abschnittslinks überspringen den Intro-Screen.

Abnahme:

- [x] Name, Rolle und Schwerpunkt sind im ersten sichtbaren Bereich vorhanden.
- [x] Das frühere unveröffentlichte Lernprojekt wurde durch das reale, veröffentlichte Holo-Mini-Projekt ersetzt.
- [ ] E-Mail und LinkedIn abschließend persönlich bestätigen.

## Phase 2: Projekte bereinigen

Ziel: Jede Projektkarte beschreibt ihren tatsächlichen Status.

- [x] Alle fünf aktuellen Projektkarten geprüft.
- [x] Projektstatus ist typisiert: `published`, `github` oder `learning`.
- [x] Lifestyle Quiz Live- und GitHub-Link: HTTP 200.
- [x] Glowify Live- und GitHub-Link: HTTP 200.
- [x] AutoFlow Live- und GitHub-Link: HTTP 200.
- [x] Holo Mini Live- und GitHub-Link: HTTP 200.
- [x] Raaji Baluch Blog GitHub-Link: HTTP 200.
- [x] Die frühere Full Stack Practice App wurde vollständig durch Holo Mini ersetzt.
- [x] Holo Mini verwendet den neuen Screenshot `public/holomini-home.png` mit konkretem Alt-Text.
- [x] Holo Mini ist die letzte der vier über `featured` hervorgehobenen Arbeiten.
- [x] Raaji Baluch Blog bleibt im vollständigen Projektarchiv und ist als Source-only-Projekt erkennbar.
- [x] „Responsive Portfolio“ ist nicht im aktuellen Datenbestand; alter Audit-Punkt ist nicht anwendbar.
- [x] „Dashboard Cards“ ist nicht im aktuellen Datenbestand; alter Audit-Punkt ist nicht anwendbar.
- [x] Vorhandene Screenshots sind eingebunden.
- [x] Jeder Projekt-Screenshot besitzt einen konkreten Alt-Text.
- [x] Live- und GitHub-Aktionen werden nur bei vorhandener URL gerendert.
- [x] Vier echte Arbeiten werden über ein explizites `featured`-Feld hervorgehoben.

Abnahme:

- [x] Jede aktuelle Karte ist als veröffentlicht oder Source-only erkennbar.
- [x] Alle eingetragenen Projektlinks antworteten bei der Prüfung mit HTTP 200.
- [x] Mehrere echte Projekte sind prominent sichtbar.

## Phase 3: Struktur und Codequalität

Ziel: Daten, Komponenten und Sections haben klare Aufgaben.

- [x] Projekte liegen in `src/data/projects.ts`.
- [x] Skills, Stats, Strengths, Prozess und Kontakte liegen in `src/data/portfolio.ts`.
- [x] `ProjectCard` liegt in `src/components/projects/ProjectCard.tsx`.
- [x] `Header` und `Footer` liegen in `src/components/layout/`.
- [x] Hero, Works, About, Highlights, Process und Projects liegen in `src/sections/`.
- [x] Hive-Navigation wurde bewusst nicht ergänzt; sie gehört nicht mehr zur aktuellen One-Page-Navigation.
- [x] Props und Datenmodelle sind ohne `any` typisiert.
- [x] Projekte verwenden stabile IDs statt Titel als React-Key.
- [x] Lint und Build wurden nach dem Refactor erfolgreich ausgeführt.

Abnahme:

- [x] `App.tsx` enthält nur noch Seitenkomposition und Datenübergabe.
- [x] Statische Inhalte liegen nicht mehr direkt in `App.tsx`.
- [x] Jede Komponente hat eine begrenzte Aufgabe.
- [x] Lint und Build sind grün.

## Phase 4: CSS und Responsive-Verhalten

Ziel: Styling ist robust, zugänglich und ohne tote Regeln.

- [x] CSS-Klassen gegen alle TSX-Dateien abgeglichen.
- [x] Ungenutzte Regeln wie `card-title`, `about-card` und `button--wide` entfernt.
- [x] Token-Studio-Styles sind nicht mehr vorhanden.
- [x] CSS folgt einer nachvollziehbaren Reihenfolge von globalen Regeln über Sections bis Responsive/Motion.
- [x] Mobile Header nutzt drei gleich breite Navigationsspalten.
- [x] Lange Links nutzen `overflow-wrap: anywhere`.
- [x] Links und Buttons besitzen sichtbare `:focus-visible`-Styles.
- [x] Wichtige Links und Buttons besitzen mindestens 44 px Höhe.
- [x] `prefers-reduced-motion: reduce` deaktiviert praktisch alle Animationen und Smooth Scrolling.
- [x] Intro-Hintergrund füllt Mobile- und Desktop-Viewports mit `object-fit: cover` ohne schwarze Balken.
- [x] Namensbuchstaben animieren in einem flüssigen, zügigen Tempo mit räumlicher Drehung, sanftem Überschwingen und kurzem Leuchteffekt; danach erhalten Vor- und Nachname nacheinander einen dezenten Shine-Puls.
- [x] Browser-Layout bei 320, 375, 768, 1024 und 1440 CSS-Pixeln ohne horizontale Überbreite geprüft.
- [x] Hero bei 768, 1024 und 1440 px visuell geprüft.
- [x] 320 und 375 px in der lokalen Chrome-Produktionsvorschau vollständig visuell geprüft.
- [x] Ganze Seite bei 320, 375, 768, 1024 und 1440 px bis zum Footer visuell geprüft.

Abnahme:

- [x] Keine offensichtlich ungenutzten CSS-Blöcke gefunden.
- [x] Technische Viewport-Matrix 320, 375, 768, 1024 und 1440 ohne horizontales Überlaufen bestätigt.
- [x] Vollständige Browser-Viewport-Matrix ohne horizontales Überlaufen abgeschlossen.
- [x] CSS enthält Schutz für lange Links und schmale Karten.

## Phase 5: Alte Dateien und Dependencies

Ziel: Das aktive Projekt enthält nur verwendete Features.

- [x] Token-Studio-Code wurde als nicht mehr benötigt bewertet und entfernt.
- [x] `tokenStore.ts`, `applyTokens.ts`, `ColorPicker.tsx`, altes `Badge.tsx` und altes `Button.tsx` entfernt.
- [x] Leere `src/index.css` entfernt.
- [x] Zustand, TanStack Router, Tailwind CSS und DaisyUI entfernt.
- [x] `package.json` und `package-lock.json` über npm aktualisiert.
- [x] Paketname auf `razieh-portfolio` aktualisiert.
- [x] Danach Tests, Lint und Build erfolgreich ausgeführt.
- [x] `npm audit` meldet 0 Schwachstellen.

Abnahme:

- [x] Keine alten Feature-Dateien bleiben im aktiven `src`-Verzeichnis.
- [x] Produktionsabhängigkeiten sind React, React DOM und Lucide React.
- [x] Build bleibt erfolgreich.

## Phase 6: Accessibility

Ziel: Sinnvolle Struktur für Tastatur, Screenreader und Touch.

- [x] Dokumentensprache ist Englisch.
- [x] Genau eine sichtbare Hauptüberschrift (`h1`) vorhanden.
- [x] Überschriftenhierarchie verwendet `h1`, Section-`h2` und Card-`h3`.
- [x] Alle Projektbilder besitzen spezifische Alt-Texte.
- [x] Dekorative Code-, Linien-, Nummern- und Pfeilelemente sind für Screenreader verborgen.
- [x] Header-Navigation besitzt klare Linktexte und ein Label.
- [x] Skip-Link zum fokussierbaren Hauptinhalt ergänzt.
- [x] Globale sichtbare Fokuszustände ergänzt.
- [x] Touch-Ziele wichtiger Navigationen und Aktionen auf mindestens 44 px erweitert.
- [x] Externe Links verwenden `noopener noreferrer`.
- [x] Alle internen Anker verweisen auf vorhandene IDs.
- [ ] Vollständige Tab-Reihenfolge und Bedienung mit Tastatur manuell prüfen.
- [ ] Kurzen Screenreader-Smoke-Test durchführen.

Abnahme:

- [ ] Vollständige Tastaturbedienung manuell bestätigt.
- [x] Fokusdarstellung ist im CSS eindeutig sichtbar.
- [x] Bereiche besitzen Überschriften oder zugängliche Namen.

## Phase 7: SEO und Präsentation

Ziel: Professionelle Browser- und Social-Darstellung.

- [x] Dokumenttitel und Meta Description finalisiert.
- [x] Eigenes SVG-Favicon ergänzt.
- [x] Open-Graph-Titel, Description, Bildabmessungen und Alt-Text ergänzt.
- [x] Twitter Large Image Card ergänzt.
- [x] Eigenes Social-Preview-Bild unter `public/social-preview.png` erstellt.
- [x] README auf Holo Mini, den aktuellen Projektbestand, die Selected-Work-Reihenfolge und die neue CV aktualisiert.
- [x] Screenshot/Social Preview, Installation, Scripts, Struktur und Deployment-Hinweise dokumentiert.
- [x] Absolute `og:url`, Social-Preview-URL und kanonische GitHub-Pages-URL ergänzt.
- [ ] GitHub-Repository-Beschreibung außerhalb des Codes aktualisieren.

Abnahme:

- [x] Browser-Tab zeigt einen professionellen Titel und ein Favicon.
- [x] README beschreibt die echte Anwendung.
- [x] Social-Preview-Asset und Metadaten sind lokal vorhanden.
- [ ] Social Preview nach dem Deployment mit einem Sharing-Debugger prüfen.

## Phase 8: Automatisierte Tests

Ziel: Zentrale Portfolio-Funktionen sind regressionssicher.

- [x] Vitest, React Testing Library, jest-dom und jsdom installiert.
- [x] `npm test` und `npm run test:watch` ergänzt.
- [x] Test-Setup mit DOM-Cleanup eingerichtet.
- [x] Header-Anker werden getestet.
- [x] Projektkarten mit und ohne Links werden getestet.
- [x] Die vollständige zentrale Projektliste wird getestet.
- [x] Holo Minis Live- und GitHub-Ziel werden explizit getestet.
- [x] Footer-Kontakte und CV-Download werden getestet.
- [x] Direkte Ankeraufrufe nach dem React-Render werden getestet.
- [x] `npm test`, Lint und Build erfolgreich.
- [ ] Optionaler End-to-End-Test mit Playwright wurde bewusst noch nicht ergänzt.

Abnahme:

- [x] 5 Testdateien und 10 Tests laufen erfolgreich.
- [x] Navigation, Projektaktionen, Projektliste und Kontakte sind abgedeckt.

## Phase 9: Deployment vorbereiten

Ziel: Die Seite kann auf dem gewählten Host veröffentlicht werden.

- [x] GitHub Pages als Hosting-Ziel festgelegt.
- [x] Öffentliche URL `https://razidorra.github.io/Portfolio/` und Unterpfad `/Portfolio/` festgelegt.
- [x] Vite-`base` auf `/Portfolio/` gesetzt.
- [x] Komponenten verwenden `import.meta.env.BASE_URL` für öffentliche Bilder und CV.
- [x] Favicon verwendet Vites `%BASE_URL%`; die Social Preview besitzt eine absolute Produktions-URL.
- [x] GitHub-Actions-Workflow installiert Abhängigkeiten, baut `token-studio` und veröffentlicht `dist`.
- [x] Produktions-Build erfolgreich.
- [x] Produktions-Preview startet lokal.
- [x] Root-Aufruf, direkter Hash-Aufruf, Holo-Mini-Bild und CV antworten in der Produktionsvorschau mit HTTP 200.
- [x] Projekt- und GitHub-Links im Preview-Datenstand geprüft.
- [ ] Mobile Preview auf echtem Gerät prüfen.
- [ ] Deployment durchführen.
- [ ] Live-URL, Live-Links und Mobile-Darstellung prüfen.
- [x] Live-URL in README und Social-Metadaten ergänzt.

Abnahme:

- [x] Hosting-Konfiguration und automatischer Veröffentlichungsweg sind vorhanden.
- [ ] Live-Prüfungen bleiben bis zum erfolgreichen ersten Workflow-Lauf offen.

## Phase 10: Finale Abnahme

- [x] `npm run lint` erfolgreich.
- [x] `npm run build` erfolgreich.
- [x] `npm test` erfolgreich.
- [x] Alle eingetragenen Projekt- und GitHub-Links antworten mit HTTP 200.
- [x] Es gibt kein Platzhalter- oder unveröffentlichtes Lernprojekt mehr; optionale Aktionen erzeugen weiterhin keine leeren Buttons.
- [x] Keine sichtbaren Learners- oder Token-Studio-Seiten.
- [x] Keine unnötigen Produktionsabhängigkeiten.
- [x] README und AUDIT entsprechen dem aktuellen Code.
- [x] `spec.md` wurde auf Architektur, Tests, Navigation und verbleibende Einschränkungen aktualisiert.
- [ ] E-Mail und LinkedIn persönlich bestätigen.
- [ ] Tastatur-, Screenreader- und echte Mobile-Abnahme durchführen.
- [ ] Deployment und Live-Abnahme durchführen.

## Definition of Done

- [ ] Inhalt ist nach persönlicher Kontaktprüfung final.
- [x] Projekte sind korrekt kategorisiert und vorhandene Links geprüft.
- [x] Code ist sinnvoll strukturiert.
- [x] CSS ist bereinigt und responsive vorbereitet.
- [x] Accessibility-Basics sind implementiert.
- [x] SEO-, Social- und README-Basics sind implementiert.
- [x] Lint, Build und Tests sind grün.
- [ ] Deployment ist erfolgreich.

## Nächster manueller Schritt

1. E-Mail und LinkedIn-Link persönlich bestätigen.
2. Alle Links und den Skip-Link ausschließlich per Tastatur bedienen.
3. Einen kurzen Screenreader-Smoke-Test durchführen.
4. Die Seite auf einem echten Mobilgerät prüfen.
5. Den ersten GitHub-Pages-Workflow und die öffentliche URL prüfen.
6. Danach die letzten offenen Live-Häkchen in diesem Dokument abschließen.
