import type { ThemeDefinition } from "../types";

export const mistOfHopeDefinition: ThemeDefinition = {
  id: "mistOfHope",
  name: "Mist of Hope",
  description: "Soft, uplifting tones with airy blue-gray hints.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F6FAFB",
    surface: "#EEF5F8"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#3F6070",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#5A8FE6",
        neutral: "#7CA7B7",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#5A8FE6"
      }
    },
    mobile: {
      colors: {
        primary: "#3F6070",
        neutral: "#4A5360",
        background: "#F3F5F7",
        surface: "#E9EEF2",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
