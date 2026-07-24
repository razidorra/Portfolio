# Projektspezifikation: Razieh.dev One-Page-Portfolio

## 1. Dokumentstatus

| Feld | Wert |
| --- | --- |
| Projektname | Razieh.dev |
| Dokumenttyp | Produkt- und technische Spezifikation |
| Version | 1.6 |
| Stand | 24. Juli 2026 |
| Status | Aktualisierte Beschreibung des implementierten Produkts mit Zielanforderungen für die Weiterentwicklung |
| Primäre Sprache der Website | Englisch |
| Zielplattform | Moderne Desktop-, Tablet- und Mobile-Browser |

### 1.1 Zweck dieses Dokuments

Diese Spezifikation beschreibt den Funktionsumfang, die Benutzeroberfläche, die technischen Grundlagen und die Qualitätsanforderungen des persönlichen One-Page-Portfolios von Razieh Dorrazaei. Alle wichtigen Inhalte sollen auf einer einzigen Seite erreichbar sein: Einstieg, Navigation, ausgewählte Arbeiten, Profil, Fähigkeiten, Prozess, vollständige Projektübersicht und Kontakt.

Das Dokument dient als:

- gemeinsame Referenz für Entwicklung und Design,
- Grundlage für Refactoring und zukünftige Erweiterungen,
- Checkliste für Tests und Abnahme,
- technische Orientierung für Deployment und Wartung,
- Portfolio-Nachweis über Produktdenken und strukturierte Frontend-Entwicklung.

### 1.2 Interpretation von Anforderungen

Die Schlüsselwörter werden wie folgt verwendet:

- **MUSS**: verbindliche Anforderung für eine produktionsreife Version,
- **SOLL**: wichtige Anforderung, die nur mit begründetem Anlass entfallen darf,
- **KANN**: optionale Erweiterung.

## 2. Produktvision

Razieh.dev ist ein persönliches Entwicklerportfolio mit einer dunklen, reflektierenden One-Page-Ästhetik. Es präsentiert Fähigkeiten, Arbeitsweise, Projekte und Kontaktmöglichkeiten in einem klaren Scroll-Flow ohne separate Unterseiten.

Das Produkt soll Besucherinnen und Besuchern innerhalb weniger Sekunden beantworten:

1. Wer ist Razieh?
2. Welche technischen und gestalterischen Fähigkeiten bringt sie mit?
3. Welche Projekte hat sie umgesetzt?
4. Wie arbeitet sie?
5. Wie kann man sie kontaktieren?

## 3. Ziele und Nicht-Ziele

### 3.1 Produktziele

- Professionelle Präsentation von Profil, Fähigkeiten und Projekten.
- Schnelle Orientierung durch eine klare visuelle Hierarchie.
- Vollständig responsive Nutzung ab 320 px Viewport-Breite.
- Demonstration wiederverwendbarer Komponenten, typisierter Projektdaten, konsistenter visueller Tokens und einer eigenständigen Hero-Inszenierung.
- Direkter Zugriff auf Live-Projekte, Quellcode und Kontaktprofile.
- Gute Bedienbarkeit mit Maus, Touchscreen und Tastatur.
- Wartbarer, typisierter und überprüfbarer Frontend-Code.

### 3.2 Technische Ziele

- Fehlerfreier TypeScript-Produktions-Build.
- Fehlerfreier ESLint-Durchlauf.
- Zuverlässige Anker-Navigation innerhalb der Startseite.
- Korrekte Behandlung statischer Assets unter dem GitHub-Pages-Unterpfad `/Portfolio/`.
- Automatisierter Build und Release über GitHub Actions.
- Automatisierte Tests für zentrale Benutzerabläufe.
- Klare Trennung von Layout, UI-Komponenten und Daten.

### 3.3 Nicht-Ziele der aktuellen Version

- Benutzerkonten oder Authentifizierung.
- Backend, Datenbank oder Content-Management-System.
- Kontaktformular mit serverseitigem Versand.
- Mehrbenutzerfähige Speicherung von Einstellungen.
- Vollständiger Designsystem-Generator, Figma-Ersatz oder Token-Editor.
- Blog, Shop oder Zahlungsfunktionen.

## 4. Zielgruppen

### 4.1 Recruiter und Unternehmen

Möchten Profil, Fähigkeiten, Projekterfahrung, Lebenslauf und Kontaktmöglichkeiten schnell erfassen.

### 4.2 Entwicklerinnen und Entwickler

Interessieren sich für Technologieauswahl, Codequalität, GitHub-Repositories, Komponentenstruktur und technische Experimente.

### 4.3 Potenzielle Kundinnen und Kunden

Suchen Beispiele für responsive Websites und möchten unkompliziert Kontakt aufnehmen.

### 4.4 Lernende und andere Berufseinsteiger

Können die Projektstruktur und den Aufbau des Portfolios als nachvollziehbares Beispiel für moderne Frontend-Techniken betrachten.

## 5. Technischer Ist-Zustand

### 5.1 Tech-Stack

| Bereich | Technologie |
| --- | --- |
| UI | React 19 |
| Sprache | TypeScript |
| Build Tool | Vite 8 |
| Icons | Lucide React |
| Styling | Klassisches CSS und CSS Custom Properties |
| Qualität | ESLint, TypeScript Compiler, Vitest und React Testing Library |
| Paketverwaltung | npm |

Die Produktionsabhängigkeiten sind auf React, React DOM und Lucide React begrenzt. Frühere Abhängigkeiten für Router, Token-Store und CSS-Frameworks wurden entfernt.

### 5.2 Aktuelle Hauptmodule

- `src/App.tsx`: Komposition der One-Page-Struktur.
- `src/App.css`: globales Layout, responsive Regeln, Animationen und Komponentenstile.
- `src/components/layout/IntroScreen.tsx`: anklickbarer Einstieg mit animiertem Namen.
- `src/components/layout/BackgroundLightTrails.tsx`: wiederverwendete SVG-Polarlichtlinien für Intro und Hauptseite.
- `src/data/`: typisierte Projekt- und Portfolio-Inhalte.
- `src/components/`: Layout- und Projektkomponenten.
- `src/sections/`: klar getrennte Seitenbereiche.
- `src/test/` und `*.test.tsx`: Test-Setup und Komponententests.
- `README.md`: projektbezogene Dokumentation mit Setup, Scripts, Struktur, Designrichtung und Deployment-Hinweisen.
- `AGENTS.md`: Entwicklungsregeln für Junior-Entwickler und AI-Agents.
- `AUDIT.md`: priorisierte Aufgabenliste für die Fertigstellung.

### 5.3 Aktuelle Seitenstruktur

| Bereich | Inhalt |
| --- | --- |
| `/` | Animierter Intro-Screen; nach Aktivierung folgt die One-Page-Ansicht |
| `/#home` | Direkter Einstieg in den Hero ohne Intro-Screen |
| `#works` | Hervorgehobene Projektpräsentation |
| `#about` | Profil, Fähigkeiten und Stärken |
| `#projects` | Alle Projekte in einer Kartenübersicht |
| `#connect` | Kontakt und Core Skills |

## 6. Informationsarchitektur

```text
Razieh.dev
├── Anklickbarer Intro-Screen
├── Globaler Header
│   ├── Logo / Home-Link
│   └── Navigation
│       ├── Home
│       ├── Projects
│       └── Contact
├── Hero
├── Selected Work
├── About
├── Skills / Highlights
├── Process
├── Alle Projekte
└── Globaler Footer
    ├── Core Skills
    ├── Kontaktlinks
    └── Copyright
```

## 7. Funktionale Anforderungen

### 7.0 Intro-Screen

**FR-INTRO-01:** Beim normalen Aufruf MUSS zunächst ein bildschirmfüllender, anklickbarer Portfolio-Intro-Screen erscheinen.

**FR-INTRO-02:** Der Intro-Screen MUSS per Maus, Enter und Leertaste bedienbar sein und danach die One-Page-Ansicht anzeigen.

**FR-INTRO-03:** Direkte Abschnittslinks mit Hash MÜSSEN den Intro-Screen überspringen.

**FR-INTRO-04:** „RAZIEH“ SOLL buchstabenweise von links und „DORRAZAEI“ buchstabenweise von rechts erscheinen. Die Buchstaben SOLLEN sich mit leichter räumlicher Drehung, sanftem Überschwingen und einem kurzen Leuchteffekt zusammensetzen. Danach SOLLEN Vor- und Nachname nacheinander einen langsamen, dezenten Shine-Puls erhalten. Eine dezente Farbverlaufslinie SOLL die Sequenz unter dem Namen abschließen. Bei reduzierter Bewegung MUSS der vollständige Name samt ruhiger Linie sofort sichtbar sein.

**FR-INTRO-05:** Die Buchstaben SOLLEN nacheinander, flüssig und in einem zügigen, weiterhin gut lesbaren Tempo erscheinen. Ihre Farben SOLLEN von warmem Kupfer und Rosé über Violett zu leuchtendem Blau verlaufen.

**FR-INTRO-06:** Der Intro-Screen MUSS denselben textfreien Hintergrund wie die Hauptseite verwenden, den gesamten Viewport ohne schwarze Balken ausfüllen und SOLL ausschließlich dekorative Polarlichtlinien animieren. Die Code-Symbole des Hero-Bereichs DÜRFEN dort nicht erscheinen.

**FR-INTRO-07:** Name, Rolle und Einstiegsschaltfläche MÜSSEN oberhalb der dekorativen Animation klar lesbar und bedienbar bleiben.

### 7.1 Globaler Header und Navigation

**FR-NAV-01:** Der Header MUSS beim Scrollen sichtbar bleiben oder leicht erreichbar sein.

**FR-NAV-02:** Der Header MUSS Links zu Home, Projects und Contact enthalten.

**FR-NAV-03:** Interne Links MÜSSEN als stabile Anker auf vorhandene Seitenbereiche zeigen.

**FR-NAV-04:** Interne Navigation MUSS ohne vollständiges Neuladen der Anwendung funktionieren.

**FR-NAV-05:** Browser-Zurück und Browser-Vorwärts SOLLEN bei Anker-Navigation nachvollziehbare Scrollpositionen wiederherstellen.

**FR-NAV-06:** Der Header DARF bei kleinen Viewports keine Inhalte unlesbar machen.

**FR-NAV-07:** Ein direkter Aufruf oder Reload der Startseite MUSS in der Produktionsumgebung funktionieren.

**FR-NAV-08:** Zusätzliche öffentliche Unterrouten SOLLEN vermieden werden, solange das Produkt als One-Page-Portfolio gedacht ist.

### 7.2 Startseite

#### Hero-Bereich

**FR-HOME-01:** Der Hero MUSS den Slogan „Engineered for the Web“, das Tätigkeitsfeld und eine kurze Positionierung zeigen.

**FR-HOME-02:** Die primäre Aktion „View Projects“ MUSS zum Projektbereich derselben Seite führen.

**FR-HOME-03:** Die sekundäre Aktion „Contact Me“ MUSS zum Kontaktbereich im Footer führen.

**FR-HOME-04:** Die Scroll-Hilfe MUSS zum Bereich „Selected Work“ führen.

**FR-HOME-06:** Sprungziele auf derselben Seite MÜSSEN stabile, eindeutige IDs besitzen.

**FR-HOME-07:** „Projects“ MUSS zum vollständigen Projektarchiv auf derselben Seite führen.

#### Selected Work

**FR-HOME-08:** Bis zu vier hervorgehobene Projekte SOLLEN mit Titel, Stack, Kurzbeschreibung und Reihenfolge dargestellt werden.

**FR-HOME-08A:** Die aktuelle „Selected Work“-Reihenfolge MUSS Lifestyle Quiz, Glowify, AutoFlow Workshop und zuletzt Holo Mini enthalten.

**FR-HOME-09:** Projekte mit Bild MÜSSEN einen aussagekräftigen Alternativtext besitzen.

**FR-HOME-10:** Live- und GitHub-Links DÜRFEN nur angezeigt werden, wenn eine gültige URL existiert.

**FR-HOME-11:** Externe Links MÜSSEN sicher in einem neuen Tab geöffnet werden oder eindeutig im aktuellen Tab navigieren.

#### About, Skills und Prozess

**FR-HOME-12:** Der About-Bereich MUSS eine kurze professionelle Beschreibung enthalten.

**FR-HOME-13:** Technische Fähigkeiten MÜSSEN aus einer zentralen Datenquelle gerendert werden.

**FR-HOME-14:** Stärken und Prozessschritte SOLLEN in wiederverwendbaren Karten dargestellt werden.

**FR-HOME-15:** Die Startseite MUSS zusätzlich zu den hervorgehobenen Arbeiten eine vollständige Projektübersicht enthalten.

### 7.3 Projektbereich

**FR-PROJ-01:** Alle Projekte MÜSSEN aus einem zentralen Projekt-Datenmodell erzeugt werden.

**FR-PROJ-02:** Der Projektbereich MUSS alle vorhandenen Projektkarten ohne separate Projektseite anzeigen.

**FR-PROJ-03:** Projekte mit Live- oder GitHub-Link MÜSSEN direkt aus der Karte erreichbar sein.

**FR-PROJ-04:** Projekte ohne öffentliche Links DÜRFEN keine leeren oder irreführenden Buttons anzeigen.

**FR-PROJ-05:** Die Projektübersicht SOLL auch ohne Filter verständlich scanbar bleiben.

**FR-PROJ-06:** Wenn später viele Projekte vorhanden sind, KANN ein Filter ergänzt werden, solange die One-Page-Struktur erhalten bleibt.

#### Aktueller Projektbestand

Das vollständige Projektarchiv enthält derzeit:

1. Lifestyle Quiz,
2. Glowify,
3. AutoFlow Workshop,
4. Holo Mini,
5. Raaji Baluch Blog.

Holo Mini ist ein veröffentlichtes, responsives Smartwatch-Store-Demo auf Basis von HTML, CSS und JavaScript. Die Projektkarte MUSS den Screenshot `holomini-home.png`, einen aussagekräftigen Alternativtext sowie Links zur Live-Website und zum GitHub-Repository anzeigen. Raaji Baluch Blog bleibt im vollständigen Projektarchiv sichtbar, ist aber aktuell nicht als „Selected Work“ markiert.

### 7.4 Projektkarten

Jedes Projekt MUSS mindestens folgende Daten unterstützen:

```ts
type ProjectStatus = "published" | "github" | "learning";

interface Project {
  id: string;
  title: string;
  stack: string;
  category: "frontend" | "full stack";
  status: ProjectStatus;
  text: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
}
```

**FR-CARD-01:** Titel, Stack und Beschreibung MÜSSEN immer sichtbar sein.

**FR-CARD-02:** Bild, Live-URL und GitHub-URL MÜSSEN optional sein.

**FR-CARD-03:** Fehlende optionale Daten DÜRFEN keine leeren Bedienelemente erzeugen.

**FR-CARD-04:** Projektbilder SOLLEN eine definierte Aspect Ratio verwenden, um Layout-Verschiebungen zu reduzieren.

**FR-CARD-05:** Reale Projekte und Konzept-Platzhalter SOLLEN visuell oder textlich unterscheidbar sein, damit keine nicht vorhandenen Live-Projekte suggeriert werden.

### 7.5 Entfernte Seiten und frühere Experimente

**FR-OLD-01:** Die frühere Learners-Seite DARF nicht mehr über die Navigation erreichbar sein.

**FR-OLD-02:** Das frühere Token Studio DARF nicht im aktuellen One-Page-Portfolio angezeigt werden, solange es nicht ausdrücklich wieder als Projektsektion gewünscht ist.

**FR-OLD-03:** Unbenutzte Token-Studio-Dateien SOLLEN in einem späteren Cleanup entfernt oder in einen klar benannten Archiv-/Experimentbereich verschoben werden.

### 7.6 Footer und Kontakt

**FR-FOOT-01:** Der Footer MUSS am Ende der One-Page-Ansicht erscheinen.

**FR-FOOT-02:** Er MUSS Kernkompetenzen und Kontaktmöglichkeiten anzeigen.

**FR-FOOT-03:** Mindestens E-Mail, LinkedIn und GitHub MÜSSEN erreichbar sein.

**FR-FOOT-04:** Externe Links MÜSSEN bei `target="_blank"` mindestens `rel="noreferrer"` oder `rel="noopener noreferrer"` verwenden.

**FR-FOOT-05:** Das Copyright-Jahr SOLL automatisch erzeugt oder regelmäßig aktualisiert werden.

**FR-FOOT-06:** Der öffentlich freigegebene Lebenslauf MUSS im Footer als „Download CV“ heruntergeladen werden können.

**FR-FOOT-07:** Der aktuelle Download MUSS die dreiseitige PDF `updated-CV.pdf` aus dem `public`-Verzeichnis ausliefern und den konfigurierten Vite-Basispfad berücksichtigen.

## 8. Design- und UI-Spezifikation

### 8.1 Visuelle Richtung

Die Oberfläche verwendet eine dunkle, cineastische One-Page-Ästhetik mit hell leuchtenden Kupfer-, Violett- und Blaureflexionen aus dem Intro-Motiv. Das Design soll professionell, eigenständig und klar wirken. Dunkle transparente Kartenflächen sichern die Lesbarkeit über den kräftigeren Farben. Dekorative Animationen dürfen Inhalte und Bedienbarkeit nicht überlagern.

Der aktuelle Hero zeigt den Slogan:

```text
Engineered
for the Web
```

Die Hero-Headline nutzt eine kräftige, verspielte Serif-Anmutung. Längere Fließtexte bleiben in einer gut lesbaren Sans-Serif-Schrift.

Dieses Schriftpaar MUSS konsistent verwendet werden: Name, Brand, große Überschriften, Kartenüberschriften und hervorgehobene Zahlen nutzen den Serif-Stack. Navigation, Buttons, Kontakttexte und Fließtext nutzen den Sans-Serif-Stack. Header und Footer dürfen kein abweichendes drittes Schriftbild einführen.

### 8.2 Basis-Farbpalette

| Token | Ausgangswert | Verwendung |
| --- | --- | --- |
| `--ink` | `#08060b` | Haupthintergrund |
| `--ink-soft` | `#14101d` | Sekundäre dunkle Flächen |
| `--cream` | `#f8ead8` | Primärer Text |
| `--cream-muted` | teiltransparentes Cream | Sekundärer Text |
| `--copper` | `#e0a171` | Akzente und primäre Aktionen |
| `--violet` | `#7047b8` | Violette Reflexionen des Intro-Motivs |
| `--deep-blue` | `#223b8f` | Blaue Reflexionen des Intro-Motivs |
| `--font-body` | System-Sans-Stack | Fließtext und UI |
| `--font-display` | Georgia-basierter Serif-Stack | Name, Brand und Überschriften |
| `--font-hero` | Alias auf den Display-Serif-Stack | Hero-Slogan |

### 8.2.1 Hintergrund und Reflexionen

- Der Seitenhintergrund SOLL dunkel bleiben, damit Inhalt und Projektkarten klar lesbar bleiben.
- Die Hauptseite SOLL eine textfreie Variante des Intro-Motivs als festen Hintergrund verwenden, damit beide Ansichten dieselbe Farbwelt besitzen.
- Intro und Hauptseite SOLLEN dasselbe Hintergrundbild und dieselbe SVG-Polarlichtkomponente verwenden.
- Der Intro-Screen SOLL nur die Polarlichtbewegung zeigen; die schwebenden Code-Symbole gehören ausschließlich zum Hero der Hauptseite.
- Die Reflexionsfläche SOLL abstrakt sein und kein konkretes Foto oder Laptop-Bild zeigen.
- Die Reflexionen DÜRFEN violette, blaue und warme orange Lichtfarben nutzen.
- Die Reflexionen MÜSSEN weichgezeichnet bleiben und dürfen während des Scrollens deutlich heller werden.
- Die Reflexionsschicht KANN per `position: fixed` als subtiler Parallax-Eindruck wirken.
- Farbige SVG-Lichtsegmente SOLLEN entlang der Wellen laufen und beim Scrollen für ungefähr eine halbe Sekunde mit höherer Helligkeit, Sättigung und Strichstärke reagieren.
- Die Polarlichtfläche MUSS den gesamten Viewport einschließlich des Header-Bereichs abdecken.
- Der Header MUSS ausreichend transparent bleiben, damit Hintergrund und Polarlicht visuell ohne harten Bruch weiterlaufen.
- Die Animation MUSS `prefers-reduced-motion: reduce` respektieren.

### 8.3 Layout

- Hauptinhalte SOLLEN eine maximale Breite von ungefähr 1220 px besitzen.
- Horizontale Innenabstände MÜSSEN sich responsiv anpassen.
- Kartenraster MÜSSEN ohne horizontales Scrollen umbrechen.
- Der Header DARF Inhalte bei kleinen Breiten nicht überdecken.
- Textzeilen SOLLEN für gute Lesbarkeit begrenzt sein.

### 8.4 Breakpoints

Die bestehende Oberfläche verwendet folgende maßgebliche Bereiche:

| Breite | Erwartetes Verhalten |
| --- | --- |
| über 980 px | Mehrspaltige Desktop-Layouts |
| bis 980 px | Große Bereiche werden einspaltig |
| bis 720 px | Header, Aktionen und Überschriften passen sich an Mobile an |
| bis 460 px | Minimale Abstände, kompakte Navigation und einspaltige Karten |

Die Anwendung MUSS mindestens bei 320, 375, 768, 1024 und 1440 px überprüft werden.

### 8.5 Interaktionszustände

Alle interaktiven Elemente MÜSSEN erkennbare Zustände für folgende Situationen besitzen:

- default,
- hover, sofern ein Zeiger vorhanden ist,
- keyboard focus (`:focus-visible`),
- active/selected,
- disabled, sofern anwendbar,
- invalid, bei fehlerhaften Eingaben.

Hover darf niemals die einzige Anzeige für Zustand oder Bedeutung sein.

### 8.6 Motion

- Animationen SOLLEN kurz, ruhig und zweckmäßig sein.
- `prefers-reduced-motion: reduce` MUSS respektiert werden.
- Daueranimationen DÜRFEN Inhalte nicht schwer lesbar machen.
- Scrollen bei Navigation MUSS bei reduzierter Bewegung ohne Smooth-Animation erfolgen.
- Der Reflexionshintergrund SOLL langsam und subtil animiert sein.
- Auf der Hauptseite SOLL aktives Scrollen die Polarlichtlinien sichtbar verstärken.
- Der Intro-Screen SOLL die Polarlichtbewegung ohne Scroll-Interaktion zeigen.

## 9. Accessibility-Anforderungen

Die Anwendung SOLL WCAG 2.2 Level AA so weit wie für ein Portfolio angemessen erfüllen.

**A11Y-01:** Die Dokumentensprache MUSS korrekt über das `lang`-Attribut gesetzt sein.

**A11Y-02:** Jede Seite MUSS genau eine inhaltliche Hauptüberschrift (`h1`) besitzen.

**A11Y-03:** Überschriftenebenen MÜSSEN logisch aufeinander folgen.

**A11Y-04:** Alle funktionalen Bilder MÜSSEN aussagekräftige Alternativtexte besitzen. Rein dekorative Bilder MÜSSEN leere Alternativtexte oder `aria-hidden` verwenden.

**A11Y-05:** Alle Formularelemente MÜSSEN einen programmatisch verknüpften Namen besitzen.

**A11Y-06:** Die gesamte Anwendung MUSS per Tastatur bedienbar sein.

**A11Y-07:** Fokusindikatoren MÜSSEN gut sichtbar sein und ausreichenden Kontrast besitzen.

**A11Y-08:** Text und wichtige UI-Grenzen SOLLEN die erforderlichen Kontrastwerte erreichen.

**A11Y-09:** Navigationsziele und Linkzwecke MÜSSEN für assistive Technologien erkennbar sein.

**A11Y-10:** Bei Anker-Navigation SOLL der Zielbereich sinnvoll benannt sein.

**A11Y-11:** Eine „Skip to content“-Funktion SOLL angeboten werden.

**A11Y-12:** Touch-Ziele SOLLEN mindestens ungefähr 44 × 44 CSS-Pixel groß sein.

## 10. Nichtfunktionale Anforderungen

### 10.1 Performance

- Der Produktions-Build MUSS ohne Fehler erstellt werden.
- Nicht verwendete Bibliotheken SOLLEN aus dem Projekt entfernt werden.
- Projektbilder SOLLEN in passenden Abmessungen und modernen Formaten bereitgestellt werden.
- Bilder außerhalb des initial sichtbaren Bereichs SOLLEN Lazy Loading verwenden.
- Bildbreite und -höhe oder eine feste Aspect Ratio SOLLEN Layout Shifts vermeiden.
- Das initiale JavaScript-Bundle SOLL für den Funktionsumfang klein gehalten werden.
- Eine spätere Zielsetzung für Lighthouse auf Mobile ist mindestens 90 in Performance, Accessibility, Best Practices und SEO.

### 10.2 Sicherheit und Datenschutz

- Es DÜRFEN keine geheimen Schlüssel oder privaten Zugangsdaten im Frontend gespeichert werden.
- Externe Links MÜSSEN sicher konfiguriert sein.
- Öffentliche Kontaktdaten und Lebenslaufdaten MÜSSEN bewusst als öffentlich freigegeben gelten.
- Es SOLLEN keine Tracking- oder Analysewerkzeuge ohne dokumentierte Datenschutzentscheidung eingebunden werden.

### 10.3 Browser-Unterstützung

Unterstützt werden sollen die jeweils aktuellen stabilen Versionen von:

- Chrome,
- Firefox,
- Safari,
- Edge.

Die Anwendung setzt moderne CSS-Funktionen ein. Für nicht unterstützte Funktionen SOLLEN akzeptable visuelle Fallbacks vorhanden sein.

### 10.4 SEO und Social Sharing

- Die Startseite SOLL einen passenden Dokumenttitel und eine passende Meta Description besitzen.
- Die Startseite MUSS Name und Tätigkeitsfeld im sichtbaren Text enthalten.
- Open-Graph- und Social-Preview-Metadaten SOLLEN ergänzt werden.
- Ein Favicon SOLL vorhanden sein.
- Inhalte MÜSSEN semantisch strukturiert sein.
- Bei einer rein clientseitigen SPA MUSS berücksichtigt werden, welche Metadaten der Hosting- und Crawler-Kontext tatsächlich lesen kann.

### 10.5 Wartbarkeit

- TypeScript MUSS ohne Fehler kompilieren.
- ESLint MUSS ohne Fehler durchlaufen.
- Wiederholte UI-Muster SOLLEN als Komponenten umgesetzt werden.
- Daten und Darstellung SOLLEN getrennt werden.
- Komponenten SOLLEN einen klar begrenzten Verantwortungsbereich besitzen.
- Große Dateien SOLLEN in logisch benannte Module aufgeteilt werden.
- Unbenutzter Code und unbenutzte Abhängigkeiten SOLLEN entfernt werden.

## 11. Aktuelle Architektur

Die Anwendung verwendet folgende Struktur:

```text
src/
├── components/
│   ├── layout/
│   │   ├── BackgroundLightTrails.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── IntroScreen.tsx
│   └── projects/
│       └── ProjectCard.tsx
├── data/
│   ├── projects.ts
│   └── portfolio.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── WorksSection.tsx
│   ├── AboutSection.tsx
│   ├── PortfolioHighlightsSection.tsx
│   ├── ProcessSection.tsx
│   └── ProjectsSection.tsx
├── test/
│   └── setup.ts
├── App.css
├── App.tsx
└── main.tsx
```

## 12. State Management und Datenfluss

### 12.1 Portfolio-Daten

Statische Portfolio-Inhalte SOLLEN in typisierten Datenmodulen liegen. UI-Komponenten erhalten die Daten über Props und sollen keine projektspezifischen Inhalte duplizieren.

### 12.2 Datenfluss

```text
projects.ts / portfolio.ts
    ↓ import
Section-Komponenten
    ↓ props
ProjectCard / UI-Komponenten
    ↓ render
One-Page-Portfolio
```

### 12.3 Datenregeln

- Projekttitel MÜSSEN eindeutig sein oder eine separate stabile ID erhalten.
- Optionale Links DÜRFEN nur gerendert werden, wenn sie vorhanden sind.
- Wiederverwendete Inhalte SOLLEN nicht in mehreren Komponenten dupliziert werden.
- Statische Daten SOLLEN typisiert und zentral gepflegt werden.

## 13. Datenvalidierung

### 13.1 Projektlinks

- `liveUrl` und `githubUrl` SOLLEN gültige absolute URLs sein.
- Externe Links MÜSSEN sicher geöffnet werden.
- Fehlende Links DÜRFEN keine leeren Buttons erzeugen.

### 13.2 Projektbilder

- Bilder SOLLEN im `public`-Verzeichnis oder über eine bewusste Asset-Strategie liegen.
- Alternativtexte MÜSSEN den Bildinhalt und Projektkontext sinnvoll beschreiben.
- Fehlende Bilder MÜSSEN durch ein stabiles visuelles Fallback ersetzt werden.

### 13.3 Textinhalte

- Titel und Beschreibungen SOLLEN kurz genug sein, um Kartenlayouts nicht aufzubrechen.
- Platzhalterprojekte SOLLEN als solche erkennbar sein oder durch reale Projekte ersetzt werden.

## 14. Fehler- und Leerzustände

- Ein Projektbild, das nicht geladen werden kann, SOLL das Layout nicht zerstören.
- Fehler DÜRFEN nicht ausschließlich über Farbe kommuniziert werden.
- Unerwartete Rendering-Fehler KÖNNEN später über eine Error Boundary abgefangen werden.

## 15. Teststrategie

### 15.1 Statische Prüfungen

Folgende Befehle MÜSSEN vor einem Release erfolgreich sein:

```bash
npm test
npm run lint
npm run build
```

Stand 24. Juli 2026 umfasst die automatisierte Suite fünf Testdateien mit zehn erfolgreichen Tests. Darin sind auch der zugängliche Intro-Einstieg, das Überspringen des Intros bei direkten Hash-Aufrufen, die Live- und GitHub-Links von Holo Mini sowie Holo Minis letzte Position unter „Selected Work“ abgedeckt.

### 15.2 Unit-Tests

Mindestens folgende Logik SOLL getestet werden:

- Projektkarten rendern optionale Live- und GitHub-Links korrekt,
- Projektkarten ohne Links zeigen keine leeren Aktionen,
- zentrale Projektdaten werden vollständig dargestellt,
- die Holo-Mini-Karte verweist auf die korrekte Live-Website und das korrekte GitHub-Repository.

### 15.3 Komponenten- und Integrationstests

- Header zeigt alle Navigationsziele.
- Header-Links springen zu vorhandenen Bereichen.
- Projektkarten zeigen nur vorhandene Aktionen.
- Der Projektbereich zeigt alle Projekte.
- Kontaktlinks sind erreichbar und sicher konfiguriert.

### 15.4 End-to-End-Tests

Kritischer Happy Path:

1. Startseite öffnen.
2. Intro-Animation und sofort sichtbaren Inhalt bei reduzierter Bewegung prüfen.
3. Intro per Maus sowie per Tastatur öffnen.
4. Über „View Projects“ zum Projektbereich springen.
5. Alle Projektkarten prüfen.
6. Live- und GitHub-Links prüfen.
7. Über den Header zu den wichtigsten Bereichen springen.
8. Kontakt- und externe Profil-Links prüfen.
9. Einen direkten Hash-Link neu laden und sicherstellen, dass der Intro-Screen übersprungen wird.

### 15.5 Manuelle Prüfmatrix

| Bereich | Prüfung |
| --- | --- |
| Responsive | 320, 375, 768, 1024 und 1440 px |
| Tastatur | Tab-Reihenfolge, Fokus, Enter und Space |
| Screenreader | Landmarken, Überschriften, Namen und Zustände |
| Motion | Betriebssystem-Einstellung „Bewegung reduzieren“ |
| Links | interne, externe, Mail- und Download-Links |
| Navigation | Ankerlinks, Reload, Zurück und Vorwärts |
| Browser | Chrome, Firefox, Safari und Edge |

## 16. Deployment-Anforderungen

### 16.1 Build

Der Release-Build wird mit folgendem Befehl erzeugt:

```bash
npm run build
```

Das veröffentlichte Artefakt liegt standardmäßig in `dist/`.

### 16.2 Hosting, Base Path und Anker

Das Portfolio wird als GitHub-Pages-Projektseite unter `https://razidorra.github.io/Portfolio/` veröffentlicht. Vite MUSS deshalb den Basispfad `/Portfolio/` verwenden. Interne Asset-URLs verwenden `import.meta.env.BASE_URL` oder Vites `%BASE_URL%`; absolute Social-Metadaten verweisen auf die öffentliche Pages-URL.

Da die aktuelle App keine separaten Unterrouten nutzt, ist keine serverseitige SPA-Fallback-Konfiguration für `/learners` oder `/projects` erforderlich. Hash-Anker müssen unter dem Repository-Unterpfad weiterhin funktionieren.

### 16.3 Automatisches Deployment

Der Workflow `.github/workflows/deploy-pages.yml` MUSS bei relevanten Pushes auf `main`:

1. den Repository-Inhalt auschecken,
2. Node.js und den npm-Cache einrichten,
3. in `token-studio/` mit `npm ci` installieren,
4. mit `npm run build` das Artefakt erzeugen,
5. `token-studio/dist` als Pages-Artefakt hochladen,
6. das Artefakt in die Umgebung `github-pages` deployen.

### 16.4 Release-Checkliste

- [x] `npm ci` ist erfolgreich.
- [x] `npm run lint` ist erfolgreich.
- [x] Automatisierte Tests sind erfolgreich.
- [x] `npm run build` ist erfolgreich.
- [x] Die Startseite ist direkt aufrufbar.
- [x] Alle internen Ankerlinks springen zu vorhandenen Bereichen.
- [x] Alle Projekt- und GitHub-Links wurden mit HTTP 200 geprüft.
- [ ] E-Mail und LinkedIn wurden persönlich geprüft.
- [x] Mobile Darstellung wurde in der lokalen Chrome-Produktionsvorschau geprüft.
- [ ] Tastaturbedienung wurde geprüft.
- [x] Metadaten und Favicon sind vorhanden.
- [x] Die aktuelle CV-PDF wurde bewusst öffentlich freigegeben.
- [ ] E-Mail und LinkedIn wurden abschließend als öffentliche Kontaktdaten bestätigt.

## 17. Definition of Done

Eine Änderung gilt als abgeschlossen, wenn:

1. die zugehörigen Anforderungen dieser Spezifikation erfüllt sind,
2. TypeScript, Lint und Build fehlerfrei laufen,
3. relevante automatisierte Tests ergänzt oder aktualisiert wurden,
4. Tastatur- und Responsive-Verhalten geprüft wurden,
5. keine bekannten kritischen Regressionen bestehen,
6. neue öffentliche Funktionen dokumentiert sind,
7. keine geheimen oder unbeabsichtigt privaten Daten enthalten sind.

## 18. Abnahmekriterien für die produktionsreife Version

### Portfolio

- [x] Ein zugänglicher Intro-Screen führt in das Portfolio und direkte Hash-Links überspringen ihn.
- [x] Intro und Hauptseite verwenden eine gemeinsame Farbwelt und animierte Polarlichtlinien.
- [x] Besucher verstehen im ersten sichtbaren Bereich Slogan, Rolle und Schwerpunkt.
- [x] Home, Projects und Contact sind zuverlässig per Anker erreichbar.
- [x] Direkter Reload der Startseite und direkte Hash-Aufrufe funktionieren.
- [ ] Browser-Zurück und Browser-Vorwärts wurden manuell bestätigt.
- [x] Reale Projekte besitzen funktionierende Live- und/oder GitHub-Links.
- [ ] Kontaktmöglichkeiten sind vollständig und erreichbar.
- [x] Der Lebenslauf ist über „Download CV“ als aktuelle PDF verfügbar.

### Qualität

- [x] Es gibt keine TypeScript- oder ESLint-Fehler.
- [x] Kernfunktionen besitzen automatisierte Tests.
- [x] Alle Ziel-Viewports funktionieren ohne horizontales Scrollen.
- [x] Reduzierte Bewegung wird respektiert.
- [x] Header und Footer verwenden dasselbe Schrift-System wie der Hauptinhalt.
- [x] Unbenutzte Produktionsabhängigkeiten wurden entfernt.
- [x] Die Projekt-README enthält Installation, Scripts, Architektur und Deployment.
- [x] Eine `AGENTS.md` mit Entwicklungsregeln für Junior-Entwickler ist vorhanden.
- [x] Seitentitel, Meta Description, Open-Graph-Basisdaten, Social Preview und Favicon sind vorhanden.

## 19. Priorisierte Roadmap

### Priorität 1: Produktionsfähigkeit

1. Den ersten GitHub-Pages-Workflow und die öffentliche URL prüfen.
2. Alle internen Anker und Kontaktlinks prüfen.
3. Zugängliche Labels und Fokuszustände ergänzen.
4. Reale Projektinhalte von Platzhaltern unterscheiden.

### Erledigte Codequalität

1. `App.tsx` wurde in Sections und Komponenten aufgeteilt.
2. Projektdaten wurden in typisierte Datenmodule verschoben.
3. Ungenutzte Komponenten und Abhängigkeiten wurden entfernt.
4. Vitest und React Testing Library wurden eingeführt.

### Priorität 3: Portfolio-Polish

1. Finale Mobile-, Tastatur- und Screenreader-Prüfung durchführen.
2. Projektbilder künftig in WebP oder AVIF konvertieren.
3. GitHub-Pages-Deployment und Live-Abnahme durchführen.

## 20. Offene Produktentscheidungen

Vor größeren Änderungen sollte folgende Frage beantwortet werden:

1. Sind E-Mail und LinkedIn-Profil abschließend als öffentliche Kontaktdaten bestätigt?

## 21. Bekannte Einschränkungen des aktuellen Stands

- Die finale Mobile-, Tastatur- und Screenreader-Abnahme ist noch manuell durchzuführen.
- Die PNG-Projektbilder sind noch nicht in moderne Bildformate konvertiert.
- Der erste GitHub-Pages-Lauf und die Live-Abnahme stehen noch aus.

## 22. Änderungsprotokoll

| Version | Datum | Änderung |
| --- | --- | --- |
| 1.0 | 15.07.2026 | Erste vollständige Produkt- und technische Spezifikation auf Basis des bestehenden Projekts |
| 1.1 | 15.07.2026 | Aktualisierung auf One-Page-Portfolio ohne Learners- und Projects-Unterseiten |
| 1.2 | 16.07.2026 | Aktualisierung auf aktuellen Hero-Slogan, Reflexionshintergrund, README und AGENTS.md |
| 1.3 | 22.07.2026 | Daten-/Komponenten-Refactor, Tests, Accessibility, SEO, Dependency-Cleanup und Audit-Abgleich |
| 1.4 | 22.07.2026 | Aktueller Intro-Screen, gemeinsame Serif-/Sans-Typografie, animierte Polarlichtlinien auf beiden Ansichten, Scroll-Verstärkung und nahtloser Header-Hintergrund dokumentiert |
| 1.5 | 24.07.2026 | Holo Mini mit Screenshot, Live- und GitHub-Link, aktuelle Selected-Work-Reihenfolge, neuer CV-Download, zehn erfolgreiche Tests, vollständige Browser-Viewport-Matrix, randloser Intro-Hintergrund, verfeinerte Namensanimation und nachgewiesene Release-Checks dokumentiert |
| 1.6 | 24.07.2026 | GitHub Pages als Hosting-Ziel, `/Portfolio/` als Vite-Basispfad, öffentliche Canonical-/Social-URLs und automatisches GitHub-Actions-Deployment dokumentiert |
