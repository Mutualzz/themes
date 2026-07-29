import type { ThemeDefinition } from "../types";

export const victorianBloomDefinition: ThemeDefinition = {
  id: "victorianBloom",
  name: "Victorian Bloom",
  description: "Light theme with Victorian floral tones and muted warmth.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#FBFCF9",
    surface: "#F4F7F2"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#D6A23A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#D6A23A",
        neutral: "#A89A62",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#F0D27A"
      }
    },
    mobile: {
      colors: {
        primary: "#8A6C36",
        neutral: "#5A5842",
        background: "#F5F6F1",
        surface: "#EBF1EA",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#8A6C36"
        }
      }
    }
  }
};
