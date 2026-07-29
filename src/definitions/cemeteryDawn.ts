import type { ThemeDefinition } from "../types";

export const cemeteryDawnDefinition: ThemeDefinition = {
  id: "cemeteryDawn",
  name: "Cemetery Dawn",
  description: "Muted dawn mist with warm gray undertones.",
  adaptive: false,
  type: "light",
  style: "normal",
  colors: {
    danger: "#B3261E",
    background: "#FBFBFC",
    surface: "#ECE9EE"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#664444",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#A88082",
        neutral: "#A89A9A",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#B37E80"
      }
    },
    mobile: {
      colors: {
        primary: "#664444",
        neutral: "#554848",
        background: "#F5F5F6",
        surface: "#E9E9ED",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  }
};
