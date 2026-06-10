import { create } from "zustand";

export interface ColorToken {
  name: string;
  value: string;
}

export interface TypographyToken {
  name: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface SpacingToken {
  name: string;
  value: string;
}

export interface TokenStore {
  colors: ColorToken[];
  typography: TypographyToken[];
  spacing: SpacingToken[];
  updateColor: (name: string, value: string) => void;
  updateTypography: (
    name: string,
    field: keyof Omit<TypographyToken, "name">,
    value: string,
  ) => void;
  updateSpacing: (name: string, value: string) => void;
}

export const useTokenStore = create<TokenStore>((set) => ({
  colors: [
    { name: "primary", value: "#1D9E75" },
    { name: "secondary", value: "#534AB7" },
    { name: "danger", value: "#E24B4A" },
    { name: "warning", value: "#BA7517" },
    { name: "surface", value: "#F1EFE8" },
  ],
  typography: [
    { name: "body", fontSize: "16px", fontWeight: "400", lineHeight: "1.5" },
    { name: "heading", fontSize: "32px", fontWeight: "700", lineHeight: "1.2" },
    { name: "small", fontSize: "12px", fontWeight: "400", lineHeight: "1.4" },
  ],
  spacing: [
    { name: "xs", value: "4px" },
    { name: "sm", value: "8px" },
    { name: "md", value: "16px" },
    { name: "lg", value: "24px" },
    { name: "xl", value: "40px" },
  ],

  updateColor: (name, value) =>
    set((state) => ({
      colors: state.colors.map((c) => (c.name === name ? { ...c, value } : c)),
    })),

  updateTypography: (name, field, value) =>
    set((state) => ({
      typography: state.typography.map((t) =>
        t.name === name ? { ...t, [field]: value } : t,
      ),
    })),

  updateSpacing: (name, value) =>
    set((state) => ({
      spacing: state.spacing.map((s) =>
        s.name === name ? { ...s, value } : s,
      ),
    })),
}));
