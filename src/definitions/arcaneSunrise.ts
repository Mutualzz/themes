import type { ThemeDefinition } from "../types";

export const arcaneSunriseDefinition: ThemeDefinition = {
  id: "arcaneSunrise",
  name: "Arcane Sunrise",
  description: "Warm mystical morning glow with soft green highlights.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F5F9F6",
    surface: "#E9F4EA"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#3A7C6A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#4DBE9A",
        neutral: "#7CA88A",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#A7E1C9"
      }
    },
    mobile: {
      colors: {
        primary: "#3A7C6A",
        neutral: "#5A4A3A",
        background: "#F6F3F0",
        surface: "#ECE6E2",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
