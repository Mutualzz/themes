import type { ThemeDefinition } from "../types";

export const velvetLullabyDefinition: ThemeDefinition = {
  id: "velvetLullaby",
  name: "Velvet Lullaby",
  description: "Vintage, dramatic palette with soft rose tones.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F9F6F7",
    surface: "#F3EDF0"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#F48CA7",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#F48CA7",
        neutral: "#CDAFB9",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#F48CA7"
      }
    },
    mobile: {
      colors: {
        primary: "#914F60",
        neutral: "#5A4652",
        background: "#F4F2F5",
        surface: "#E9E2EA",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#914F60"
        }
      }
    }
  }
};
