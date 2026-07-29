import type { ThemeDefinition } from "../types";

export const velvetDreamDefinition: ThemeDefinition = {
  id: "velvetDream",
  name: "Velvet Dream",
  description: "Dramatic vintage gradients with rich violet-to-rose fades.",
  adaptive: false,
  type: "light",
  style: "gradient",
  colors: {
    danger: "#B3261E"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#A06DDF",
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
        primary: "#B25574",
        neutral: "#5A4652",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#B25574"
        }
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#F7F5F7",
        percent: 0
      },
      {
        color: "#F1EDF3",
        percent: 38
      },
      {
        color: "#E3D2E2",
        percent: 65
      },
      {
        color: "#C26B89",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#F0E9EE",
        percent: 0
      },
      {
        color: "#E6DAE4",
        percent: 45
      },
      {
        color: "#D0B2C5",
        percent: 75
      },
      {
        color: "#B86F88",
        percent: 92
      }
    ]
  }
};
