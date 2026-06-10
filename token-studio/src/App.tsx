import { useEffect } from "react";
import { useTokenStore } from "./store/tokenStore";
import { applyTokensToDOM } from "./lib/applyTokens";
import Button from "./components/ui/Button";
import Badge from "./components/ui/Badge";
import ColorPicker from "./components/editor/ColorPicker";
import "./App.css";

export default function App() {
  const colors = useTokenStore((s) => s.colors);
  const spacing = useTokenStore((s) => s.spacing);
  const typography = useTokenStore((s) => s.typography);
  const updateColor = useTokenStore((s) => s.updateColor);
  const updateSpacing = useTokenStore((s) => s.updateSpacing);
  const updateTypography = useTokenStore((s) => s.updateTypography);

  useEffect(() => {
    applyTokensToDOM(colors, spacing, typography);
  }, [colors, spacing, typography]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h2 className="sidebar-title">Token Studio</h2>
        <p className="section-label">Farb-Tokens</p>
        {colors.map((c) => (
          <ColorPicker
            key={c.name}
            name={c.name}
            value={c.value}
            onChange={updateColor}
          />
        ))}

        <p className="section-label section-label--spaced">Spacing</p>
        {spacing.map((token) => (
          <label className="token-field" key={token.name}>
            <span>{token.name}</span>
            <input
              type="text"
              value={token.value}
              onChange={(event) =>
                updateSpacing(token.name, event.currentTarget.value)
              }
            />
          </label>
        ))}

        <p className="section-label section-label--spaced">Typography</p>
        {typography.map((token) => (
          <div className="typography-group" key={token.name}>
            <span className="typography-group__title">{token.name}</span>
            <label className="token-field">
              <span>Size</span>
              <input
                type="text"
                value={token.fontSize}
                onChange={(event) =>
                  updateTypography(
                    token.name,
                    "fontSize",
                    event.currentTarget.value,
                  )
                }
              />
            </label>
            <label className="token-field">
              <span>Weight</span>
              <input
                type="text"
                value={token.fontWeight}
                onChange={(event) =>
                  updateTypography(
                    token.name,
                    "fontWeight",
                    event.currentTarget.value,
                  )
                }
              />
            </label>
            <label className="token-field">
              <span>Line</span>
              <input
                type="text"
                value={token.lineHeight}
                onChange={(event) =>
                  updateTypography(
                    token.name,
                    "lineHeight",
                    event.currentTarget.value,
                  )
                }
              />
            </label>
          </div>
        ))}
      </aside>

      <main className="preview">
        <header className="preview-header">
          <h1>Komponenten Preview</h1>
          <p>Ändere die Farben links - alles updated live.</p>
        </header>

        <section className="preview-panel">
          <p className="section-label">Buttons</p>
          <div className="component-row component-row--buttons">
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Outline" variant="outline" />
            <Button label="Danger" variant="danger" />
            <Button label="Ghost" variant="ghost" />
          </div>
        </section>

        <section className="preview-panel">
          <p className="section-label">Typography</p>
          <div className="type-preview">
            <h2>Design tokens make changes predictable.</h2>
            <p>
              Body text, headings and supporting text now react to the token
              controls in the sidebar.
            </p>
            <small>Small text uses its own token set.</small>
          </div>
        </section>

        <section className="preview-panel">
          <p className="section-label">Badges</p>
          <div className="component-row component-row--badges">
            {colors.map((c) => (
              <Badge key={c.name} label={c.name} color={c.value} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
