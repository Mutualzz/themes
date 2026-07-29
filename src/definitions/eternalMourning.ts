import type { ThemeDefinition } from "../types";

export const eternalMourningDefinition: ThemeDefinition = {
  id: "eternalMourning",
  name: "Eternal Mourning",
  description: "Melancholic gothic elegance with deep purple tints.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#18101C",
    surface: "#241C3A"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#CFC3E6",
      accent: "#A06DDF",
      muted: "#8B7CA8"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#A06DDF",
        neutral: "#B3A3D6",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#B884F0"
      }
    },
    mobile: {
      colors: {
        primary: "#9F6CDA",
        neutral: "#C2B5D8",
        background: "#0F0D14",
        surface: "#221C2A",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#E1D2F2",
          accent: "#9F6CDA",
          muted: "#B7A8CC"
        }
      }
    }
  }
};
