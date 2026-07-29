import type { ThemeDefinition } from "../types";

export const graveyardWhispersDefinition: ThemeDefinition = {
  id: "graveyardWhispers",
  name: "Graveyard Whispers",
  description: "Muted eerie palette with cold, spectral tones.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#181A1F",
    surface: "#23262E"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#C3C9D1",
      accent: "#AEB6CF",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#AEB6CF",
        neutral: "#8C9BAA",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#7CA7E6"
      }
    },
    mobile: {
      colors: {
        primary: "#9A9AAF",
        neutral: "#A5B4C2",
        background: "#0E0E11",
        surface: "#222634",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#D0D6DE",
          accent: "#9A9AAF",
          muted: "#97A9B8"
        }
      }
    }
  }
};
