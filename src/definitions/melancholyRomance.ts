import type { ThemeDefinition } from "../types";

export const melancholyRomanceDefinition: ThemeDefinition = {
  id: "melancholyRomance",
  name: "Melancholy Romance",
  description: "Vintage dramatic palette with soft rose and dusk tones.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#181014",
    surface: "#2C1720"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#E1B7C8",
      accent: "#F48CA7",
      muted: "#A88B97"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#F48CA7",
        neutral: "#CDAFB9",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#FF95AB"
      }
    },
    mobile: {
      colors: {
        primary: "#D98098",
        neutral: "#D9C0CC",
        background: "#100D10",
        surface: "#261921",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#EBCDD7",
          accent: "#D98098",
          muted: "#CDAFB9"
        }
      }
    }
  }
};
