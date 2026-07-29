import type { ThemeDefinition } from "../types";

export const rustAuroraDefinition: ThemeDefinition = {
  id: "rustAurora",
  name: "Rust Aurora",
  description: "Warm industrial gradients with sunlit rust layers.",
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
      accent: "#A76B3C",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#FF9B5A",
        neutral: "#B8A47A",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#FFB37A"
      }
    },
    mobile: {
      colors: {
        primary: "#A76B3C",
        neutral: "#5A5142",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#FBF7F5",
        percent: 0
      },
      {
        color: "#F5EEE9",
        percent: 38
      },
      {
        color: "#ECD7C8",
        percent: 65
      },
      {
        color: "#C6744A",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#F1E9E5",
        percent: 0
      },
      {
        color: "#E6D9D1",
        percent: 45
      },
      {
        color: "#D2B9A8",
        percent: 75
      },
      {
        color: "#C07752",
        percent: 100
      }
    ]
  }
};
