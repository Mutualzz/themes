import type { ThemeDefinition } from "../types";

export const crimsonLamentDefinition: ThemeDefinition = {
  id: "crimsonLament",
  name: "Crimson Lament",
  description: "Dark romantic crimson tones with somber undertones.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#181014",
    surface: "#2C1620"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#E8B7C1",
      accent: "#D94A5A",
      muted: "#A88B97"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#D94A5A",
        neutral: "#B89CA9",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#F47B94"
      }
    },
    mobile: {
      colors: {
        primary: "#E1556B",
        neutral: "#C7AFC0",
        background: "#100E11",
        surface: "#27171C",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#F0C8CF",
          accent: "#E1556B",
          muted: "#BFA8B4"
        }
      }
    }
  }
};
