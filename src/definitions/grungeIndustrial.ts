import type { ThemeDefinition } from "../types";

export const grungeIndustrialDefinition: ThemeDefinition = {
  id: "grungeIndustrial",
  name: "Grunge & Industrial",
  description: "Grunge industrial palette inspired by 90s underground scenes.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#18140F",
    surface: "#2C2114"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#D8C6B0",
      accent: "#FF9B5A",
      muted: "#A88B67"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#FF9B5A",
        neutral: "#B8A47A",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#FFB37A"
      }
    },
    mobile: {
      colors: {
        primary: "#D09663",
        neutral: "#C4B48F",
        background: "#100F0D",
        surface: "#27241A",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#E1D3C0",
          accent: "#D09663",
          muted: "#B8AB88"
        }
      }
    }
  }
};
