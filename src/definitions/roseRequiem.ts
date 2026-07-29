import type { ThemeDefinition } from "../types";

export const roseRequiemDefinition: ThemeDefinition = {
  id: "roseRequiem",
  name: "Rose Requiem",
  description: "Soft romantic palette with gentle rose accents.",
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
        primary: "#A23A4F",
        neutral: "#5A4652",
        background: "#F5F3F5",
        surface: "#EADFE5",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#A23A4F"
        }
      }
    }
  }
};
