import type { ThemeDefinition } from "../types";

export const chromeVeilDefinition: ThemeDefinition = {
  id: "chromeVeil",
  name: "Chrome Veil",
  description: "Soft metallic neutrals with a subtle industrial sheen.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F4F7F8",
    surface: "#EAF0F2"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#4A6A5A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#AEB6CF",
        neutral: "#8C9BAA",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#AEB6CF"
      }
    },
    mobile: {
      colors: {
        primary: "#4A6A5A",
        neutral: "#555555",
        background: "#F2F3F4",
        surface: "#E6E8EA",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
