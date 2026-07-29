import type { ThemeDefinition } from "../types";

export const obsidianRequiemDefinition: ThemeDefinition = {
  id: "obsidianRequiem",
  name: "Obsidian Requiem",
  description: "Intense obsidian gradients with brooding violet undertones.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    danger: "#E04B5A",
    warning: "#D1A24A",
    success: "#4FAF7A"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6B8C8",
      accent: "#6D5AE2",
      muted: "#8B8CA8"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#6D5AE2",
        neutral: "#8B8CA8",
        info: "#6C8CFF"
      }
    },
    mobile: {
      colors: {
        primary: "#8365E2",
        neutral: "#9AA0AE",
        info: "#4A78D8"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#C7C9D2",
          accent: "#8365E2",
          muted: "#9AA0AE"
        }
      },
      gradients: {
        background: [
          {
            color: "#070608",
            percent: 0
          },
          {
            color: "#0C0B10",
            percent: 45
          },
          {
            color: "#16121F",
            percent: 75
          },
          {
            color: "#2B2540",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#16141A",
            percent: 0
          },
          {
            color: "#23232C",
            percent: 45
          },
          {
            color: "#2C2A38",
            percent: 75
          },
          {
            color: "#4A3962",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#070608",
        percent: 0
      },
      {
        color: "#18141F",
        percent: 40
      },
      {
        color: "#241C3A",
        percent: 70
      },
      {
        color: "#3C2B5C",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#16141A",
        percent: 0
      },
      {
        color: "#23232C",
        percent: 40
      },
      {
        color: "#2C2A38",
        percent: 80
      }
    ]
  }
};
