import type { ThemeDefinition } from "../types";

export const shadowheartDefinition: ThemeDefinition = {
  id: "shadowheart",
  name: "Shadowheart",
  description: "Dystopian industrial palette with cool steel accents.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#181B1F",
    surface: "#232A36"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6C3D1",
      accent: "#7C8B9C",
      muted: "#A0A0AA"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#7C8B9C",
        neutral: "#A0A0AA",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#7CA7E6"
      }
    },
    mobile: {
      colors: {
        primary: "#7F82B0",
        neutral: "#B0B0B8",
        background: "#101118",
        surface: "#272C3A",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#D0D0D4",
          accent: "#7F82B0"
        }
      }
    }
  }
};
