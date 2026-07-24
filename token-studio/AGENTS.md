# AGENTS.md

Grundregeln für dieses React + Vite Projekt.

Dieses Dokument ist für Junior-Entwicklerinnen, Junior-Entwickler und AI-Agents gedacht. Lies es zuerst, bevor du Code änderst.

## Projektüberblick

Dieses Projekt ist ein persönliches One-Page-Portfolio mit:

- React
- TypeScript
- Vite
- klassischem CSS
- statischen Daten im Frontend

Der aktuelle Produktstand umfasst:

- einen bildschirmfüllenden Intro-Screen vor dem eigentlichen Portfolio
- eine flüssige, zügige Namensanimation von links und rechts mit räumlicher Drehung, kurzem Leuchteffekt, Shine-Puls und abschließender Lichtlinie
- einen gemeinsamen dunklen Hintergrund mit Kupfer-, Rosé-, Violett- und Blautönen
- animierte SVG-Polarlichtlinien auf Intro und Hauptseite
- einen Scroll-Effekt, der die Lichtlinien der Hauptseite kurz verstärkt
- eine Serifenschrift für Namen und Überschriften sowie Sans-Serif für Fließtext und UI
- eine One-Page-Hauptansicht mit Header, Hero, Arbeiten, About, Highlights, Prozess, Projekten und Footer
- Hash-Links, die den Intro-Screen überspringen und direkt zum gewünschten Abschnitt führen
- vier hervorgehobene Arbeiten, wobei Holo Mini den letzten Platz unter „Selected Work“ einnimmt
- ein vollständiges Projektarchiv mit Lifestyle Quiz, Glowify, AutoFlow Workshop, Holo Mini und Raaji Baluch Blog
- Holo Mini mit eigenem Screenshot sowie funktionierendem Live- und GitHub-Link
- einen öffentlich freigegebenen, dreiseitigen Lebenslauf über „Download CV“

Wichtig: Der Anwendungscode wird in TypeScript geschrieben. Neue React-Dateien sollen `.tsx` verwenden, reine Hilfsdateien sollen `.ts` verwenden. Für App-Code sollen keine neuen `.js`- oder `.jsx`-Dateien angelegt werden.

Die App soll einfach, verständlich, responsive und gut wartbar bleiben.

## Wichtige Befehle

```bash
npm run dev
npm test
npm run lint
npm run build
```

Vor jedem Commit sollten mindestens diese Befehle erfolgreich sein:

```bash
npm test
npm run lint
npm run build
```

## Arbeitsweise

Arbeite klein und kontrolliert.

1. Verstehe zuerst die Aufgabe.
2. Lies die betroffenen Dateien.
3. Ändere nur, was für die Aufgabe nötig ist.
4. Prüfe danach Lint und Build.
5. Erkläre kurz, was geändert wurde.

Wenn du unsicher bist, ändere weniger statt mehr.

## KISS: Keep It Simple

Baue die einfachste Lösung, die das Problem sauber löst.

Gut:

- einfache Komponenten
- klare Namen
- kurze Funktionen
- wenig Magie
- verständliches CSS

Vermeide:

- unnötig komplizierte Abstraktionen
- große Utility-Systeme ohne echten Bedarf
- verschachtelte Logik, die schwer zu lesen ist
- clevere Tricks, die Junior-Entwickler nicht schnell verstehen

Beispiel:

```tsx
function ProjectCard({ project }: { project: Project }) {
  return <article>{project.title}</article>;
}
```

Besser als eine große generische Card-Factory, solange das Projekt klein ist.

## YAGNI: You Aren't Gonna Need It

Baue nichts nur, weil es vielleicht später gebraucht wird.

Erst bauen, wenn es wirklich gebraucht wird:

- komplexes Routing
- globaler State
- eigene Designsystem-Engine
- Filter, Suche oder Sortierung
- Animationen mit großen Libraries
- Backend oder CMS

Wenn eine einfache Datei mit Daten reicht, nutze eine einfache Datei.

## SOLID einfach erklärt

SOLID bedeutet hier nicht, alles mit Klassen zu bauen. In React heißt es vor allem: Komponenten sollen klar und klein bleiben.

### S: Single Responsibility

Eine Komponente soll eine klare Aufgabe haben.

Gut:

- `Header` zeigt Navigation.
- `Footer` zeigt Kontakt.
- `ProjectCard` zeigt ein Projekt.

Nicht gut:

- `App.tsx` enthält alle Daten, alle Sections, alle Cards und alle Layout-Regeln für immer.

### O: Open/Closed

Code soll leicht erweiterbar sein, ohne überall Änderungen zu erzwingen.

Gut:

- Neue Projekte werden in einer Datenliste ergänzt.
- `ProjectCard` rendert automatisch die neuen Daten.

Nicht gut:

- Für jedes neue Projekt wird JSX kopiert und manuell angepasst.

### L: Liskov Substitution

Komponenten sollen ihre Props zuverlässig behandeln.

Wenn `ProjectCard` ein `Project` erwartet, soll jedes gültige `Project` funktionieren.

Wichtig:

- optionale Felder prüfen
- keine Buttons rendern, wenn Links fehlen
- keine Annahmen treffen, die nicht im Typ stehen

### I: Interface Segregation

Props sollen klein bleiben.

Gut:

```tsx
type ProjectCardProps = {
  project: Project;
};
```

Nicht gut:

```tsx
type ProjectCardProps = {
  project: Project;
  allProjects: Project[];
  contactLinks: ContactLink[];
  theme: Theme;
};
```

Eine Komponente soll nur bekommen, was sie wirklich braucht.

### D: Dependency Inversion

Komponenten sollen möglichst über Props und Daten arbeiten, nicht direkt über versteckte Abhängigkeiten.

Gut:

- Daten importieren und an Komponenten geben.
- UI-Komponenten bleiben wiederverwendbar.

Vermeide:

- Komponenten, die selbst globale Daten suchen, obwohl Props reichen.
- versteckte DOM-Manipulation, wenn React-State oder CSS reicht.

## React-Regeln

### Komponenten

- Nutze Function Components.
- Benenne Komponenten mit PascalCase.
- Halte Komponenten klein.
- Wiederhole JSX nicht unnötig.
- Verschiebe wiederkehrende UI in eigene Komponenten.

Beispiele:

```tsx
function Header() {
  return <header>...</header>;
}
```

```tsx
function ProjectCard({ project }: ProjectCardProps) {
  return <article>...</article>;
}
```

### Props

- Props sollen klar typisiert sein.
- Verwende sprechende Namen.
- Übergib keine riesigen Objekte, wenn nur ein kleiner Wert gebraucht wird.
- Prüfe optionale Werte vor dem Rendern.

Beispiel:

```tsx
{project.liveUrl ? (
  <a href={project.liveUrl}>Live Website</a>
) : null}
```

### State

Nutze lokalen State, wenn der State nur eine Komponente betrifft.

Nutze globalen State nur, wenn mehrere entfernte Komponenten dieselben Daten brauchen.

Für dieses Portfolio gilt:

- statische Inhalte brauchen keinen State
- Projekte können als Datenliste gepflegt werden
- UI-Animationen sollten möglichst über CSS laufen
- der lokale `showIntro`-State in `App.tsx` steuert ausschließlich den Einstieg
- direkte Hash-Aufrufe müssen den Intro-Screen weiterhin überspringen

## TypeScript-Regeln

- Dieses Projekt arbeitet mit TypeScript.
- Neue Komponenten werden als `.tsx` geschrieben.
- Neue Utility- oder Daten-Dateien werden als `.ts` geschrieben.
- Verwende klare Types und Interfaces.
- Nutze keine `any`, außer es gibt einen sehr guten Grund.
- Optionale Felder mit `?` markieren.
- Typen nah an den Daten halten.
- Props, Events, Datenmodelle und Rückgabewerte sollen typisiert sein.
- Wenn TypeScript warnt, behebe die Ursache und unterdrücke den Fehler nicht einfach.

Beispiel:

```ts
interface Project {
  title: string;
  stack: string;
  category: string;
  text: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}
```

## CSS-Regeln

- Schreibe CSS so, dass es lesbar bleibt.
- Verwende sprechende Klassennamen.
- Nutze responsive Werte mit `clamp`, `min`, `max` oder Media Queries.
- Prüfe Mobile zuerst, wenn Layout bricht.
- Vermeide sehr lange Selektoren.
- Vermeide unnötige Animationen.
- Nutze für neue dekorative Bewegung keine zusätzliche Animationsbibliothek.
- Erhalte die gemeinsame Hintergrundsprache aus Kupfer, Rosé, Violett und Blau.
- Der Intro-Hintergrund soll den gesamten Viewport ohne schwarze Balken ausfüllen.
- Intro und Hauptseite dürfen dieselbe `BackgroundLightTrails`-Komponente verwenden.
- Der Header soll visuell in den Hintergrund übergehen und keine undurchsichtige Fremdfläche bilden.
- Scroll-Verstärkung und Daueranimationen müssen `prefers-reduced-motion` respektieren.

Gute CSS-Ziele:

- keine horizontalen Scrollbars
- lesbare Texte
- klare Fokuszustände
- Buttons und Links sind leicht erkennbar
- Animationen stören den Inhalt nicht

## Accessibility-Regeln

Jede Änderung soll die Seite bedienbarer machen, nicht schlechter.

Prüfe:

- Links haben verständliche Texte.
- Bilder haben sinnvolle `alt`-Texte.
- Deko-Elemente nutzen `aria-hidden`, wenn nötig.
- Die Seite ist per Tastatur nutzbar.
- Fokus ist sichtbar.
- Farbkontrast ist ausreichend.

Externe Links:

```tsx
<a href="https://example.com" target="_blank" rel="noreferrer">
  Example
</a>
```

## Aktuelle Datei-Struktur

Die aktuelle Struktur ist bereits nach Verantwortungsbereichen getrennt:

```text
public/
├── holomini-home.png
└── updated-CV.pdf
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
│   ├── portfolio.ts
│   └── projects.ts
├── sections/
├── test/
├── App.css
├── App.tsx
└── main.tsx
```

Tests liegen neben den getesteten Komponenten und Sections. Refactor nur, wenn es die aktuelle Aufgabe wirklich verbessert.

## Was du vermeiden sollst

- keine großen Refactors ohne Auftrag
- keine neuen Libraries ohne guten Grund
- keine ungenutzten Komponenten hinzufügen
- keine toten Dateien liegen lassen
- keine kaputten Links
- keine Platzhaltertexte im finalen Portfolio
- keine geheimen Daten ins Frontend schreiben
- keine Änderungen an fremdem Code rückgängig machen, wenn sie nicht zur Aufgabe gehören

## Checkliste vor Abschluss

Vor dem Abschluss einer Aufgabe:

- [x] Aufgabe verstanden und umgesetzt
- [x] nur notwendige Dateien geändert
- [x] keine offensichtlichen Platzhalter eingeführt
- [x] responsive Verhalten grob geprüft
- [x] Accessibility nicht verschlechtert
- [x] Animationen und `prefers-reduced-motion` geprüft, falls Motion betroffen ist
- [x] `npm test` erfolgreich
- [x] `npm run lint` erfolgreich
- [x] `npm run build` erfolgreich
- [x] Änderungen kurz erklärt

## Commit-Regeln

Committe nur zusammengehörige Änderungen.

Gute Commit Messages:

```text
Update hero typography
Add project audit checklist
Refactor project cards
Fix mobile header layout
```

Schlechte Commit Messages:

```text
update
fix
stuff
changes
```

## Wichtigster Grundsatz

Ein Junior-Entwickler soll den Code lesen und verstehen können.

Wenn eine Lösung schwer zu erklären ist, ist sie wahrscheinlich zu kompliziert.
