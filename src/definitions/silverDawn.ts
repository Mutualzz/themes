import type { ThemeDefinition } from "../types";

export const silverDawnDefinition: ThemeDefinition = {
  id: "silverDawn",
  name: "Silver Dawn",
  description: "Cool metallic gradients evoking early morning steel.",
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
      accent: "#AEB6CF",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#AEB6CF",
        neutral: "#8C9BAA",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#AEB6CF"
      }
    },
    mobile: {
      colors: {
        primary: "#5B8E6F",
        neutral: "#555555",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#5B8E6F"
        }
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#F4F7F8",
        percent: 0
      },
      {
        color: "#EAF0F2",
        percent: 45
      },
      {
        color: "#D8E6E6",
        percent: 75
      },
      {
        color: "#86B39E",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#EEF3F3",
        percent: 0
      },
      {
        color: "#DCE9E7",
        percent: 45
      },
      {
        color: "#B6D6CB",
        percent: 75
      },
      {
        color: "#86B39E",
        percent: 100
      }
    ]
  }
};
