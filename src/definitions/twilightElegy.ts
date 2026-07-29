import type { ThemeDefinition } from "../types";

export const twilightElegyDefinition: ThemeDefinition = {
  id: "twilightElegy",
  name: "Twilight Elegy",
  description: "Gothic violet glow with cool, moody accents.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F2F4FB",
    surface: "#E9ECFB"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#4A5FA0",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#A06DDF",
        neutral: "#B3A3D6",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#A06DDF"
      }
    },
    mobile: {
      colors: {
        primary: "#4A5FA0",
        neutral: "#4A4F63",
        background: "#F3F4F7",
        surface: "#E8EAF1",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
