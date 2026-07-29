import type { ThemeDefinition } from "../types";

export const hauntedAestheticDefinition: ThemeDefinition = {
  id: "hauntedAesthetic",
  name: "Haunted Aesthetic",
  description: "Ethereal eerie hues with soft blue illumination.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#14181E",
    surface: "#1B2636"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6C3D1",
      accent: "#5A8FE6",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#5A8FE6",
        neutral: "#8CA3B7",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#5CB8E6"
      }
    },
    mobile: {
      colors: {
        primary: "#87A8E8",
        neutral: "#A5B4C2",
        background: "#0E1012",
        surface: "#1E242C",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#CBD5E8",
          accent: "#87A8E8",
          muted: "#97A9B8"
        }
      }
    }
  }
};
