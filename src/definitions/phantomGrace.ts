import type { ThemeDefinition } from "../types";

export const phantomGraceDefinition: ThemeDefinition = {
  id: "phantomGrace",
  name: "Phantom Grace",
  description: "Ethereal, slightly eerie soft teal accents.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F0FBFA",
    surface: "#E6F7F5"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#4A7D79",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#3CB8B3",
        neutral: "#7CA7A7",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#3FB8AD"
      }
    },
    mobile: {
      colors: {
        primary: "#4A7D79",
        neutral: "#4A5E5E",
        background: "#F3F6F5",
        surface: "#E8F0EE",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
