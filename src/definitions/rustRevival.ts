import type { ThemeDefinition } from "../types";

export const rustRevivalDefinition: ThemeDefinition = {
  id: "rustRevival",
  name: "Rust Revival",
  description: "Warm industrial rust tones with an aged metal feel.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#FBF7F5",
    surface: "#F5EEE9"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#8A5F36",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#FF9B5A",
        neutral: "#B8A47A",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#FFB37A"
      }
    },
    mobile: {
      colors: {
        primary: "#8A5F36",
        neutral: "#5A5142",
        background: "#F6F3F0",
        surface: "#EDE4DD",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
