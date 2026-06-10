import type {
  ColorToken,
  SpacingToken,
  TypographyToken,
} from "../store/tokenStore";

export function applyTokensToDOM(
  colors: ColorToken[],
  spacing: SpacingToken[],
  typography: TypographyToken[],
) {
  const root = document.documentElement;

  colors.forEach(({ name, value }) => {
    root.style.setProperty(`--color-${name}`, value);
  });

  spacing.forEach(({ name, value }) => {
    root.style.setProperty(`--spacing-${name}`, value);
  });

  typography.forEach(({ name, fontSize, fontWeight, lineHeight }) => {
    root.style.setProperty(`--font-size-${name}`, fontSize);
    root.style.setProperty(`--font-weight-${name}`, fontWeight);
    root.style.setProperty(`--line-height-${name}`, lineHeight);
  });
}
