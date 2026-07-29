import type { ThemeDefinition } from "../types";

export const floralRadianceDefinition: ThemeDefinition = {
  id: "floralRadiance",
  name: "Floral Radiance",
  description: "Floral radiant gradients with warm golden undertones.",
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
      accent: "#D6A23A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#D6A23A",
        neutral: "#A89A62",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#F0D27A"
      }
    },
    mobile: {
      colors: {
        primary: "#C08A2A",
        neutral: "#5A5842",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#C08A2A"
        }
      },
      gradients: {
        background: [
          {
            color: "#FBFCF9",
            percent: 0
          },
          {
            color: "#F4F7F2",
            percent: 45
          },
          {
            color: "#EEF5EA",
            percent: 75
          },
          {
            color: "#F0D27A",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#FBFCF9",
        percent: 0
      },
      {
        color: "#F4F7F2",
        percent: 45
      },
      {
        color: "#F6E5B8",
        percent: 75
      },
      {
        color: "#F0D27A",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#F6F7EE",
        percent: 0
      },
      {
        color: "#EAEFD9",
        percent: 45
      },
      {
        color: "#E0D8B4",
        percent: 75
      },
      {
        color: "#D6B56A",
        percent: 100
      }
    ]
  }
};
