# Projektspezifikation: Razieh.dev One-Page-Portfolio

## 1. Dokumentstatus

| Feld | Wert |
| --- | --- |
| Projektname | Razieh.dev |
| Dokumenttyp | Produkt- und technische Spezifikation |
| Version | 1.0 |
| Stand | 15. Juli 2026 |
| Status | Beschreibung des aktuellen Produkts mit Zielanforderungen für die Weiterentwicklung |
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

Razieh.dev ist ein persönliches Entwicklerportfolio mit einer warmen, charakteristischen „Hive“-Ästhetik. Es präsentiert Fähigkeiten, Arbeitsweise, Projekte und Kontaktmöglichkeiten in einem klaren Scroll-Flow ohne separate Unterseiten.

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
- Demonstration wiederverwendbarer Komponenten, typisierter Projektdaten und konsistenter visueller Tokens.
- Direkter Zugriff auf Live-Projekte, Quellcode und Kontaktprofile.
- Gute Bedienbarkeit mit Maus, Touchscreen und Tastatur.
- Wartbarer, typisierter und überprüfbarer Frontend-Code.

### 3.2 Technische Ziele

- Fehlerfreier TypeScript-Produktions-Build.
- Fehlerfreier ESLint-Durchlauf.
- Zuverlässige Anker-Navigation innerhalb der Startseite.
- Hosting-unabhängige Behandlung von statischen Assets.
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
| Qualität | ESLint und TypeScript Compiler |
| Paketverwaltung | npm |

Im Projekt sind zusätzlich TanStack Router, Tailwind CSS, DaisyUI und Zustand installiert. Sie werden im aktuellen Anwendungscode nicht verwendet. Vor einer produktionsreifen Version MUSS entschieden werden, ob sie integriert oder aus den Abhängigkeiten entfernt werden.

### 5.2 Aktuelle Hauptmodule

- `src/App.tsx`: One-Page-Struktur, Navigation, Projektdaten und große UI-Bereiche.
- `src/App.css`: globales Layout, responsive Regeln, Animationen und Komponentenstile.
- `src/store/tokenStore.ts`: derzeit ungenutzter Store aus einer früheren Token-Studio-Version.
- `src/lib/applyTokens.ts`: derzeit ungenutzte DOM-Integration aus einer früheren Token-Studio-Version.
- `src/components/editor/ColorPicker.tsx`: derzeit ungenutzter Editor aus einer früheren Token-Studio-Version.
- `src/components/ui/Button.tsx`: vorbereitete, derzeit ungenutzte Button-Komponente.
- `src/components/ui/Badge.tsx`: vorbereitete, derzeit ungenutzte Badge-Komponente.

### 5.3 Aktuelle Seitenstruktur

| Bereich | Inhalt |
| --- | --- |
| `/` | Startseite mit Hero, Hive-Navigation, ausgewählten Projekten, Profil, Fähigkeiten, Prozess, vollständigem Projektarchiv und Kontakt |
| `#works` | Hervorgehobene Projektpräsentation |
| `#roots` | Profil und Stärken |
| `#skills` | Portfolio-Highlights |
| `#projects` | Alle Projekte in einer Kartenübersicht |
| `#connect` | Kontakt und Core Skills |

## 6. Informationsarchitektur

```text
Razieh.dev
├── Globaler Header
│   ├── Logo / Home-Link
│   └── Navigation
│       ├── Home
│       ├── Projects
│       └── Contact
├── Hero
├── Hive-Sprungnavigation
├── Selected Work
├── About / Roots
├── Skills / Highlights
├── Process
├── Alle Projekte
└── Globaler Footer
    ├── Core Skills
    ├── Kontaktlinks
    └── Copyright
```

## 7. Funktionale Anforderungen

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

**FR-HOME-01:** Der Hero MUSS Name beziehungsweise Marke, Tätigkeitsfeld und eine kurze Positionierung zeigen.

**FR-HOME-02:** Die primäre Aktion „View Projects“ MUSS zum Projektbereich derselben Seite führen.

**FR-HOME-03:** Die sekundäre Aktion „Contact Me“ MUSS zum Kontaktbereich im Footer führen.

**FR-HOME-04:** Die Scroll-Hilfe MUSS zur Hive-Navigation führen.

#### Hive-Navigation

**FR-HOME-05:** Die Hive-Navigation MUSS Sprünge zu Works, Roots, Skills, Projects und Kontakt anbieten.

**FR-HOME-06:** Sprungziele auf derselben Seite MÜSSEN stabile, eindeutige IDs besitzen.

**FR-HOME-07:** „Projects“ MUSS zum vollständigen Projektarchiv auf derselben Seite führen.

#### Selected Work

**FR-HOME-08:** Bis zu vier hervorgehobene Projekte SOLLEN mit Titel, Stack, Kurzbeschreibung und Reihenfolge dargestellt werden.

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

### 7.4 Projektkarten

Jedes Projekt MUSS mindestens folgende Daten unterstützen:

```ts
interface Project {
  title: string;
  stack: string;
  category: ProjectCategory;
  text: string;
  image?: string;
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

**FR-OLD-01:** Die frühere Learners-Seite DARF nicht mehr über Header oder Hive-Navigation erreichbar sein.

**FR-OLD-02:** Das frühere Token Studio DARF nicht im aktuellen One-Page-Portfolio angezeigt werden, solange es nicht ausdrücklich wieder als Projektsektion gewünscht ist.

**FR-OLD-03:** Unbenutzte Token-Studio-Dateien SOLLEN in einem späteren Cleanup entfernt oder in einen klar benannten Archiv-/Experimentbereich verschoben werden.

### 7.6 Footer und Kontakt

**FR-FOOT-01:** Der Footer MUSS am Ende der One-Page-Ansicht erscheinen.

**FR-FOOT-02:** Er MUSS Kernkompetenzen und Kontaktmöglichkeiten anzeigen.

**FR-FOOT-03:** Mindestens E-Mail, LinkedIn und GitHub MÜSSEN erreichbar sein.

**FR-FOOT-04:** Externe Links MÜSSEN bei `target="_blank"` mindestens `rel="noreferrer"` oder `rel="noopener noreferrer"` verwenden.

**FR-FOOT-05:** Das Copyright-Jahr SOLL automatisch erzeugt oder regelmäßig aktualisiert werden.

**FR-FOOT-06:** Der Lebenslauf SOLL als klar benannter Download oder als Link verfügbar sein, sofern die PDF öffentlich angeboten werden soll.

## 8. Design- und UI-Spezifikation

### 8.1 Visuelle Richtung

Die Oberfläche verwendet eine dunkle, warme Hive-Ästhetik mit Gold- und Honigtönen. Das Design soll professionell, eigenständig und ruhig wirken. Dekorative Animationen dürfen Inhalte und Bedienbarkeit nicht überlagern.

### 8.2 Basis-Farbpalette

| Token | Ausgangswert | Verwendung |
| --- | --- | --- |
| `--ink` | `#120c08` | Haupthintergrund |
| `--ink-soft` | `#1d130d` | Sekundäre dunkle Flächen |
| `--cream` | `#fff7e8` | Primärer Text |
| `--cream-muted` | teiltransparentes Cream | Sekundärer Text |
| `--gold` | `#ffde59` | Akzente und primäre Aktionen |
| `--amber` | `#d99a3d` | Sekundärer Akzent |
| `--bronze` | `#bb8f0a` | Tiefer Akzent |

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
| bis 460 px | Minimale Abstände und einspaltige Hive-/Demo-Raster |

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

## 11. Zielarchitektur

Eine empfohlene zukünftige Struktur ist:

```text
src/
├── app/
│   └── App.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGrid.tsx
│   └── ui/
├── data/
│   ├── projects.ts
│   └── portfolio.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── HiveNavigation.tsx
│   ├── WorksSection.tsx
│   ├── AboutSection.tsx
│   ├── ProcessSection.tsx
│   └── ProjectsSection.tsx
├── lib/
│   └── utilities.ts
├── styles/
│   ├── global.css
│   ├── tokens.css
│   └── utilities.css
├── test/
│   └── setup.ts
└── main.tsx
```

Diese Struktur ist eine Zielrichtung und keine Pflicht zur sofortigen Komplettmigration. Refactoring SOLL schrittweise erfolgen und das bestehende Verhalten erhalten.

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
npm run lint
npm run build
```

### 15.2 Unit-Tests

Mindestens folgende Logik SOLL getestet werden:

- Projektkarten rendern optionale Live- und GitHub-Links korrekt,
- Projektkarten ohne Links zeigen keine leeren Aktionen,
- Hive-Navigation enthält nur vorhandene Zielbereiche,
- zentrale Projektdaten erfüllen das erwartete Datenmodell.

### 15.3 Komponenten- und Integrationstests

- Header zeigt alle Navigationsziele.
- Header-Links springen zu vorhandenen Bereichen.
- Projektkarten zeigen nur vorhandene Aktionen.
- Der Projektbereich zeigt alle Projekte.
- Kontaktlinks sind erreichbar und sicher konfiguriert.

### 15.4 End-to-End-Tests

Kritischer Happy Path:

1. Startseite öffnen.
2. Über „View Projects“ zum Projektbereich springen.
3. Alle Projektkarten prüfen.
4. Live- und GitHub-Links prüfen.
5. Über Header und Hive-Navigation zu den wichtigsten Bereichen springen.
6. Kontakt- und externe Profil-Links prüfen.
7. Seite neu laden und sicherstellen, dass die One-Page-Ansicht erhalten bleibt.

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

### 16.2 Base Path und Anker

Vor dem Deployment MUSS die Hosting-Variante feststehen:

- Root-Domain, beispielsweise `https://example.com/`, oder
- Unterpfad, beispielsweise `https://example.com/token-studio/`.

Bei Hosting unter einem Unterpfad MÜSSEN Vite `base`, interne Links und Asset-URLs diesen Pfad berücksichtigen. Da die aktuelle App keine separaten Unterrouten nutzt, ist keine serverseitige SPA-Fallback-Konfiguration für `/learners` oder `/projects` erforderlich.

### 16.3 Release-Checkliste

- [ ] `npm ci` ist erfolgreich.
- [ ] `npm run lint` ist erfolgreich.
- [ ] Automatisierte Tests sind erfolgreich.
- [ ] `npm run build` ist erfolgreich.
- [ ] Die Startseite ist direkt aufrufbar.
- [ ] Alle internen Ankerlinks springen zu vorhandenen Bereichen.
- [ ] Projekt- und Kontaktlinks wurden geprüft.
- [ ] Mobile Darstellung wurde geprüft.
- [ ] Tastaturbedienung wurde geprüft.
- [ ] Metadaten und Favicon sind vorhanden.
- [ ] Öffentliche Kontaktdaten und PDF wurden bewusst freigegeben.

## 17. Definition of Done

Eine Änderung gilt als abgeschlossen, wenn:

1. die zugehörigen Anforderungen dieser Spezifikation erfüllt sind,
2. TypeScript, Lint und Build fehlerfrei laufen,
3. relevante automatisierte Tests ergänzt oder aktualisiert wurden,
4. Tastatur- und Responsive-Verhalten geprüft wurden,
5. keine bekannten kritischen Regressionen bestehen,
6. neue öffentliche Funktionen dokumentiert sind,
7. keine geheimen oder unbeabsichtigt privaten Daten enthalten sind.

## 18. Abnahmekriterien für Version 1.0

### Portfolio

- [ ] Besucher verstehen im ersten sichtbaren Bereich Name, Rolle und Schwerpunkt.
- [ ] Home, Projects und Contact sind zuverlässig per Anker erreichbar.
- [ ] Browsernavigation und direkter Reload der Startseite funktionieren.
- [ ] Reale Projekte besitzen funktionierende Live- und/oder GitHub-Links.
- [ ] Kontaktmöglichkeiten sind vollständig und erreichbar.
- [ ] Der Lebenslauf ist verfügbar, sofern er Teil des gewünschten Portfolios ist.

### Qualität

- [ ] Es gibt keine TypeScript- oder ESLint-Fehler.
- [ ] Kernfunktionen besitzen automatisierte Tests.
- [ ] Alle Ziel-Viewports funktionieren ohne horizontales Scrollen.
- [ ] Reduzierte Bewegung wird respektiert.
- [ ] Unbenutzte Produktionsabhängigkeiten wurden entfernt oder dokumentiert begründet.
- [ ] Die Projekt-README enthält Installation, Scripts, Architektur und Deployment.

## 19. Priorisierte Roadmap

### Priorität 1: Produktionsfähigkeit

1. Deployment-Strategie und Asset-Pfade festlegen.
2. Alle internen Anker und Kontaktlinks prüfen.
3. Zugängliche Labels und Fokuszustände ergänzen.
4. Reale Projektinhalte von Platzhaltern unterscheiden.
5. README und Metadaten auf das One-Page-Portfolio aktualisieren.

### Priorität 2: Codequalität

1. `App.tsx` in Seiten und Komponenten aufteilen.
2. Projektdaten in ein typisiertes Datenmodul verschieben.
3. CSS logisch modularisieren.
4. Unbenutzte Komponenten und Abhängigkeiten bewerten.
5. Vitest und React Testing Library einführen.

### Priorität 3: Portfolio-Polish

1. README und Projektdokumentation vervollständigen.
2. SEO-, Open-Graph- und Favicon-Daten ergänzen.
3. Projektbilder optimieren und Lazy Loading ergänzen.
4. Lebenslauf-Link bewusst integrieren.
5. Optional weitere reale Projektbilder und Projektlinks ergänzen.

## 20. Offene Produktentscheidungen

Vor größeren Änderungen sollten folgende Fragen beantwortet werden:

1. Wird das Portfolio auf einer Root-Domain oder unter einem Unterpfad veröffentlicht?
2. Soll der vorhandene TanStack Router entfernt werden, da die App aktuell keine Routen mehr nutzt?
3. Sollen Tailwind CSS und DaisyUI zukünftig eingesetzt oder deinstalliert werden?
4. Welche Projektkarten repräsentieren reale, veröffentlichte Projekte?
5. Soll die öffentlich vorhandene CV-PDF wieder sichtbar verlinkt werden?
6. Bleibt die gesamte Website englisch oder ist Mehrsprachigkeit geplant?

## 21. Bekannte Einschränkungen des aktuellen Stands

- Automatisierte Tests und ein `test`-Script fehlen.
- Die Hauptkomponente und das zentrale Stylesheet sind für langfristige Wartung sehr groß.
- Mehrere installierte Bibliotheken sowie vorbereitete UI-/Token-Studio-Komponenten werden nicht verwendet.
- Die README beschreibt momentan hauptsächlich die Vite-Vorlage statt dieses Produkts.

## 22. Änderungsprotokoll

| Version | Datum | Änderung |
| --- | --- | --- |
| 1.0 | 15.07.2026 | Erste vollständige Produkt- und technische Spezifikation auf Basis des bestehenden Projekts |
| 1.1 | 15.07.2026 | Aktualisierung auf One-Page-Portfolio ohne Learners- und Projects-Unterseiten |
