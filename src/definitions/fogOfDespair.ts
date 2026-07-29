import type { ThemeDefinition } from "../types";

export const fogOfDespairDefinition: ThemeDefinition = {
  id: "fogOfDespair",
  name: "Fog of Despair",
  description: "Cold, distant tones with airy, ethereal fog hues.",
  adaptive: false,
  type: "dark",
  style: "normal",
  colors: {
    background: "#14181B",
    surface: "#1B2A32"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6C3D1",
      accent: "#3CA9C8",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#3CA9C8",
        neutral: "#8CA3B7",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#5CB8E6"
      }
    },
    mobile: {
      colors: {
        primary: "#63A9C8",
        neutral: "#A5B4C2",
        background: "#0D0F12",
        surface: "#1F252C",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#C9D8E0",
          accent: "#63A9C8",
          muted: "#97A9B8"
        }
      }
    }
  }
};
