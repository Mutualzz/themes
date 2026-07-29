import type { ThemeDefinition } from "../types";

export const forestNightGradientDefinition: ThemeDefinition = {
  id: "forestNightGradient",
  name: "Forest Night",
  description: "Moonlit canopy gradients drifting through deep moss and pine shadow.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    primary: "#6BCB8A",
    neutral: "#8FAE9A",
    danger: "#FF6B6B",
    warning: "#E8C06A",
    success: "#6BCB8A",
    info: "#5AB8A0"
  },
  typography: {
    colors: {
      primary: "#EAF5EE",
      secondary: "#B8D4C4",
      accent: "#6BCB8A",
      muted: "#7A9A88"
    }
  },
  platforms: {
    mobile: {
      gradients: {
        background: [
          {
            color: "#070C09",
            percent: 0
          },
          {
            color: "#0C1410",
            percent: 40
          },
          {
            color: "#16241C",
            percent: 75
          },
          {
            color: "#1E3A2A",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#070C09",
        percent: 0
      },
      {
        color: "#0C1410",
        percent: 35
      },
      {
        color: "#16241C",
        percent: 70
      },
      {
        color: "#1E3A2A",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#122018",
        percent: 0
      },
      {
        color: "#1A2E22",
        percent: 40
      },
      {
        color: "#244A34",
        percent: 75
      }
    ]
  }
};
