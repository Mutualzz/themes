import type { ThemeDefinition } from "../types";

export const mysticAuroraDefinition: ThemeDefinition = {
  id: "mysticAurora",
  name: "Mystic Aurora",
  description: "Magical morning gradients with fresh green highlights.",
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
      accent: "#4DBE9A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#4DBE9A",
        neutral: "#7CA88A",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#A7E1C9"
      }
    },
    mobile: {
      colors: {
        primary: "#2B9E84",
        neutral: "#5A4A3A",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#2B9E84"
        }
      },
      gradients: {
        background: [
          {
            color: "#FBF8F6",
            percent: 0
          },
          {
            color: "#F5F2EE",
            percent: 45
          },
          {
            color: "#E9F4EA",
            percent: 75
          },
          {
            color: "#7FD1B9",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#FBF8F6",
        percent: 0
      },
      {
        color: "#F5F2EE",
        percent: 45
      },
      {
        color: "#E9F4EA",
        percent: 75
      },
      {
        color: "#A7E1C9",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#F2EEE9",
        percent: 0
      },
      {
        color: "#E6EFE9",
        percent: 45
      },
      {
        color: "#CFEAE0",
        percent: 75
      },
      {
        color: "#85CDB6",
        percent: 100
      }
    ]
  }
};
