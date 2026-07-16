# Audit und Umsetzungsplan: Razieh.dev One-Page-Portfolio

Stand: 15. Juli 2026

## 1. Endziel

Am Ende soll dein Projekt ein professionelles One-Page-Portfolio sein, das du sicher zeigen und deployen kannst.

Das finale Ergebnis soll erreichen:

- Recruiter oder Besucher verstehen sofort, wer du bist und was du kannst.
- Alle wichtigen Inhalte sind auf einer Seite erreichbar: Hero, Projekte, Skills, Prozess und Kontakt.
- Es gibt keine extra Learners- oder Projects-Unterseiten mehr.
- Alle echten Projekte haben klare Beschreibungen, Live-Links, GitHub-Links und Bilder, wenn vorhanden.
- Die Seite ist auf Mobile, Tablet und Desktop sauber nutzbar.
- Die Seite ist technisch sauber: Lint, Build, Tests und Deployment funktionieren.
- Der Code ist wartbar: Daten, Sections und Komponenten sind sinnvoll getrennt.
- README, Spec und Audit passen zum echten Projekt.

## 2. Aktueller Audit-Stand

### 2.1 Bereits erledigt

- [x] Projekt wurde analysiert.
- [x] Aus der Mehrseiten-App wurde eine One-Page-Struktur gemacht.
- [x] Learners-Seite wurde aus der sichtbaren App entfernt.
- [x] Separate Projects-Seite wurde aus der sichtbaren App entfernt.
- [x] Header-Navigation zeigt jetzt Home, Projects und Contact.
- [x] Alle Projekte werden direkt auf der Startseite angezeigt.
- [x] `npm run lint` läuft erfolgreich.
- [x] `npm run build` läuft erfolgreich.
- [x] `spec.md` wurde erstellt.
- [x] `spec.md` wurde auf One-Page-Portfolio aktualisiert.

### 2.2 Offene Risiken

- [ ] `src/App.tsx` ist noch zu groß und enthält Daten, Layout und Komponenten zusammen.
- [ ] `src/App.css` ist noch sehr groß und schwer langfristig zu pflegen.
- [ ] README beschreibt noch stark die Vite-Vorlage statt dein Portfolio.
- [ ] Automatisierte Tests fehlen.
- [ ] Es gibt noch installierte, aber aktuell ungenutzte Abhängigkeiten.
- [ ] Frühere Token-Studio-Dateien liegen noch im Projekt, werden aber nicht mehr in der App genutzt.
- [ ] Einige Projektkarten wirken noch wie Platzhalter und brauchen echte Inhalte oder klare Kennzeichnung.
- [ ] SEO-, Open-Graph- und Favicon-Details sollten vor Deployment geprüft werden.

## 3. Reihenfolge der Arbeit

Arbeite diese Reihenfolge von oben nach unten durch. Erst wenn ein Abschnitt fertig ist, solltest du den nächsten starten.

## Phase 1: Produktinhalt finalisieren

Ziel: Die Seite soll inhaltlich ehrlich, klar und professionell sein.

- [ ] Prüfen, ob der Name im Hero korrekt und professionell dargestellt ist.
- [ ] Hero-Text final schreiben: Rolle, Schwerpunkt und Persönlichkeit klar machen.
- [ ] Entscheiden, ob die Website komplett Englisch bleibt oder Deutsch/Englisch werden soll.
- [ ] About-Text finalisieren.
- [ ] Skills-Liste finalisieren.
- [ ] Core Skills im Footer finalisieren.
- [ ] Prozess-Schritte finalisieren.
- [ ] Kontakt-E-Mail prüfen.
- [ ] LinkedIn-Link prüfen.
- [ ] GitHub-Link prüfen.
- [ ] Entscheiden, ob der CV/PDF-Link sichtbar auf die Seite soll.

Abnahme für Phase 1:

- [ ] Eine fremde Person versteht in 10 Sekunden, wer du bist.
- [ ] Keine Texte wirken wie Platzhalter.
- [ ] Alle Kontaktinformationen sind korrekt.

## Phase 2: Projekte bereinigen

Ziel: Alle Projekte auf der Seite sollen entweder echte Projekte sein oder klar als Übungs-/Konzeptprojekte erkennbar sein.

- [ ] Alle aktuellen Projektkarten durchgehen.
- [ ] Für jedes Projekt entscheiden: echt veröffentlicht, GitHub-only, Übung oder Platzhalter.
- [ ] Lifestyle Quiz Live-Link testen.
- [ ] Lifestyle Quiz GitHub-Link testen.
- [ ] Für Responsive Portfolio echten Link ergänzen oder Text als Konzept/Portfolio-Projekt anpassen.
- [x] Design Token Studio als Projektkarte durch Glow Shop ersetzen.
- [ ] Für Full Stack Practice App echten GitHub-Link ergänzen oder Text als Lernprojekt kennzeichnen.
- [ ] Für Dashboard Cards echten GitHub-Link ergänzen oder Text als UI-Experiment kennzeichnen.
- [ ] Projektbilder ergänzen, wo echte Screenshots vorhanden sind.
- [ ] Alt-Texte für Projektbilder prüfen.
- [ ] Karten ohne Live-Link dürfen keinen Live-Button zeigen.
- [ ] Karten ohne GitHub-Link dürfen keinen GitHub-Button zeigen.

Abnahme für Phase 2:

- [ ] Jede Projektkarte ist wahr, verständlich und nicht irreführend.
- [ ] Externe Projektlinks funktionieren.
- [ ] Mindestens ein starkes echtes Projekt ist prominent sichtbar.

## Phase 3: Struktur und Codequalität

Ziel: Der Code soll leichter wartbar werden.

- [ ] `projects` aus `src/App.tsx` in `src/data/projects.ts` verschieben.
- [ ] Skills, Stats, Strengths, Process und Contact Links in `src/data/portfolio.ts` verschieben.
- [ ] `ProjectCard` in `src/components/projects/ProjectCard.tsx` verschieben.
- [ ] `Footer` in `src/components/layout/Footer.tsx` verschieben.
- [ ] Header in `src/components/layout/Header.tsx` verschieben.
- [ ] Hero in `src/sections/HeroSection.tsx` verschieben.
- [ ] Hive-Navigation in `src/sections/HiveNavigation.tsx` verschieben.
- [ ] Works-Bereich in `src/sections/WorksSection.tsx` verschieben.
- [ ] About-Bereich in `src/sections/AboutSection.tsx` verschieben.
- [ ] Process-Bereich in `src/sections/ProcessSection.tsx` verschieben.
- [ ] Projects-Bereich in `src/sections/ProjectsSection.tsx` verschieben.
- [ ] Nach jedem größeren Refactor `npm run lint` ausführen.
- [ ] Nach jedem größeren Refactor `npm run build` ausführen.

Abnahme für Phase 3:

- [ ] `App.tsx` ist nur noch die Komposition der Seite.
- [ ] Daten liegen nicht mehr direkt in `App.tsx`.
- [ ] Jede Komponente hat eine klare Aufgabe.
- [ ] Lint und Build sind grün.

## Phase 4: CSS aufräumen

Ziel: Das Styling soll übersichtlicher und robuster werden.

- [ ] Ungenutzte CSS-Klassen suchen.
- [ ] Alte Klassen wie frühere Token-Studio- oder Page-Styles entfernen, falls noch vorhanden.
- [ ] CSS in logische Bereiche strukturieren.
- [ ] Optional CSS-Dateien aufteilen: `global.css`, `layout.css`, `sections.css`, `components.css`.
- [ ] Mobile Header prüfen.
- [ ] Projektkarten auf 320 px Breite prüfen.
- [ ] Lange Wörter und lange Links auf Mobile prüfen.
- [ ] Fokuszustände für Links und Buttons prüfen.
- [ ] `prefers-reduced-motion` prüfen.

Abnahme für Phase 4:

- [ ] Keine offensichtlich ungenutzten CSS-Blöcke bleiben übrig.
- [ ] Layout funktioniert bei 320, 375, 768, 1024 und 1440 px.
- [ ] Keine Texte laufen aus Karten oder Buttons heraus.

## Phase 5: Aufräumen von alten Dateien und Dependencies

Ziel: Das Projekt soll nur enthalten, was du wirklich brauchst.

- [ ] Entscheiden, ob Token-Studio-Code endgültig entfernt wird.
- [ ] Wenn ja: `src/store/tokenStore.ts` entfernen.
- [ ] Wenn ja: `src/lib/applyTokens.ts` entfernen.
- [ ] Wenn ja: `src/components/editor/ColorPicker.tsx` entfernen.
- [ ] Prüfen, ob `zustand` noch gebraucht wird.
- [ ] Prüfen, ob `@tanstack/react-router` noch gebraucht wird.
- [ ] Prüfen, ob Tailwind CSS noch gebraucht wird.
- [ ] Prüfen, ob DaisyUI noch gebraucht wird.
- [ ] Ungenutzte Dependencies aus `package.json` entfernen.
- [ ] Danach `npm install` ausführen, damit `package-lock.json` passt.
- [ ] Danach `npm run lint` ausführen.
- [ ] Danach `npm run build` ausführen.

Abnahme für Phase 5:

- [ ] Keine alten, ungenutzten Feature-Dateien bleiben im aktiven Projekt.
- [ ] `package.json` enthält nur sinnvolle Dependencies.
- [ ] Build bleibt erfolgreich.

## Phase 6: Accessibility

Ziel: Die Seite soll gut per Tastatur, Screenreader und Touch bedienbar sein.

- [ ] `html lang="en"` prüfen oder an Website-Sprache anpassen.
- [ ] Genau eine sichtbare Hauptüberschrift (`h1`) prüfen.
- [ ] Überschriftenreihenfolge prüfen.
- [ ] Alle Bilder brauchen sinnvolle Alt-Texte.
- [ ] Dekorative Elemente brauchen `aria-hidden`, wenn nötig.
- [ ] Header-Navigation braucht klare Linktexte.
- [ ] Fokuszustände müssen sichtbar sein.
- [ ] Tastatur-Reihenfolge prüfen.
- [ ] Touch-Ziele auf Mobile prüfen.
- [ ] Externe Links mit `target="_blank"` brauchen `rel="noreferrer"` oder `rel="noopener noreferrer"`.
- [ ] Ankerziele müssen vorhandene IDs besitzen.

Abnahme für Phase 6:

- [ ] Die Seite ist komplett per Tastatur nutzbar.
- [ ] Fokus ist sichtbar.
- [ ] Screenreader bekommen sinnvolle Namen und Bereiche.

## Phase 7: SEO und Präsentation

Ziel: Die Seite soll gut aussehen, wenn sie geteilt oder gefunden wird.

- [ ] `index.html` Titel finalisieren.
- [ ] Meta Description finalisieren.
- [ ] Favicon ergänzen oder prüfen.
- [ ] Open-Graph-Titel ergänzen.
- [ ] Open-Graph-Description ergänzen.
- [ ] Open-Graph-Bild ergänzen.
- [ ] GitHub-Repository-Beschreibung aktualisieren.
- [ ] README komplett neu für dieses Portfolio schreiben.
- [ ] Screenshot oder kurze Projektbeschreibung in README ergänzen.
- [ ] Installations- und Startbefehle in README ergänzen.
- [ ] Deployment-Hinweise in README ergänzen.

Abnahme für Phase 7:

- [ ] Browser-Tab zeigt einen professionellen Titel.
- [ ] README erklärt dein echtes Projekt.
- [ ] Social Preview wirkt professionell.

## Phase 8: Tests einführen

Ziel: Wichtige Funktionen sollen automatisch überprüfbar sein.

- [ ] Test-Framework auswählen: empfohlen Vitest + React Testing Library.
- [ ] Test-Dependencies installieren.
- [ ] `npm test` Script ergänzen.
- [ ] Test für Header-Links schreiben.
- [ ] Test für Projektkarten mit und ohne Links schreiben.
- [ ] Test für vollständige Projektliste schreiben.
- [ ] Test für Footer-Kontaktlinks schreiben.
- [ ] Optional E2E-Test mit Playwright ergänzen.
- [ ] `npm test` ausführen.
- [ ] `npm run lint` ausführen.
- [ ] `npm run build` ausführen.

Abnahme für Phase 8:

- [ ] `npm test` läuft erfolgreich.
- [ ] Wichtige Portfolio-Funktionen sind durch Tests abgedeckt.

## Phase 9: Deployment vorbereiten

Ziel: Die Seite kann sicher veröffentlicht werden.

- [ ] Hosting-Ziel festlegen: GitHub Pages, Netlify, Vercel oder anderer Anbieter.
- [ ] Prüfen, ob die Seite unter Root-Domain oder Unterpfad läuft.
- [ ] Vite `base` konfigurieren, falls Unterpfad nötig ist.
- [ ] Asset-Pfade prüfen.
- [ ] `npm run build` ausführen.
- [ ] `npm run preview` lokal prüfen.
- [ ] Mobile Darstellung im Preview prüfen.
- [ ] Externe Links im Preview prüfen.
- [ ] Deployment durchführen.
- [ ] Live-URL öffnen.
- [ ] Live-Seite auf Mobile prüfen.
- [ ] Live-Seite im README ergänzen.

Abnahme für Phase 9:

- [ ] Die veröffentlichte Seite ist erreichbar.
- [ ] Alle Links funktionieren live.
- [ ] Mobile Darstellung ist live sauber.

## Phase 10: Finale Abnahme

Ziel: Entscheiden, ob das Portfolio bereit zum Teilen ist.

- [ ] `npm run lint` erfolgreich.
- [ ] `npm run build` erfolgreich.
- [ ] `npm test` erfolgreich, falls Tests eingeführt wurden.
- [ ] Keine falschen oder kaputten Projektlinks.
- [ ] Keine Platzhaltertexte.
- [ ] Keine sichtbaren alten Learners- oder Token-Studio-Seiten.
- [ ] Keine unnötigen Dependencies.
- [ ] README ist aktuell.
- [ ] `spec.md` ist aktuell.
- [ ] `AUDIT.md` ist aktuell.
- [ ] Live-Seite wurde auf Desktop geprüft.
- [ ] Live-Seite wurde auf Mobile geprüft.
- [ ] Portfolio-Link kann in Bewerbungen, LinkedIn oder GitHub-Profil verwendet werden.

## 4. Definition of Done

Das Projekt ist fertig, wenn alle folgenden Punkte abgehakt sind:

- [ ] Inhalt ist final.
- [ ] Projekte sind echt, korrekt und verlinkt.
- [ ] Code ist sinnvoll strukturiert.
- [ ] CSS ist aufgeräumt.
- [ ] Accessibility-Basics sind erfüllt.
- [ ] SEO- und README-Basics sind erledigt.
- [ ] Lint ist grün.
- [ ] Build ist grün.
- [ ] Tests sind vorhanden oder bewusst für später dokumentiert.
- [ ] Deployment ist erfolgreich.

## 5. Empfohlene nächste Aufgabe

Als nächstes solltest du Phase 1 und Phase 2 machen. Ohne klare Inhalte und echte Projektkarten wirkt auch der beste Code noch unfertig. Danach lohnt sich der technische Refactor.
