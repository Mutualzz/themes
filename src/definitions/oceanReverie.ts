import type { ThemeDefinition } from "../types";

export const oceanReverieDefinition: ThemeDefinition = {
  id: "oceanReverie",
  name: "Ocean Reverie",
  description: "Deep ocean-inspired calm with muted sea greens.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#F5FAF9",
    surface: "#EAF4F2"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#3A5A4A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#3CA9C8",
        neutral: "#8CA3B7",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#3CA9C8"
      }
    },
    mobile: {
      colors: {
        primary: "#3A5A4A",
        neutral: "#4A5555",
        background: "#F2F4F3",
        surface: "#E7ECEA",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
