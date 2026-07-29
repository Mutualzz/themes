import type { ThemeDefinition } from "../types";

export const forestDayGradientDefinition: ThemeDefinition = {
  id: "forestDayGradient",
  name: "Forest Day",
  description: "Sunlit leaf gradients washing from misty clearing into fresh canopy green.",
  adaptive: false,
  type: "light",
  style: "gradient",
  colors: {
    primary: "#2F8F5B",
    neutral: "#6B8F7A",
    danger: "#B3261E",
    warning: "#A66A12",
    success: "#2F8F5B",
    info: "#3A9B7A"
  },
  typography: {
    colors: {
      primary: "#142018",
      secondary: "#2E4036",
      accent: "#2F8F5B",
      muted: "#5A7264"
    }
  },
  gradients: {
    background: [
      {
        color: "#F7FBF8",
        percent: 0
      },
      {
        color: "#EEF6F0",
        percent: 40
      },
      {
        color: "#D8ECDF",
        percent: 75
      },
      {
        color: "#8FCBAA",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#EEF6F0",
        percent: 0
      },
      {
        color: "#D8ECDF",
        percent: 40
      },
      {
        color: "#B5DCC4",
        percent: 75
      }
    ]
  }
};
