import type { ThemeDefinition } from "../types";

export const steelShadowDefinition: ThemeDefinition = {
  id: "steelShadow",
  name: "Steel Shadow",
  description: "Sharp dystopian gradients with cold steel blues.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    primary: "#7C8B9C",
    neutral: "#A0A0AA",
    danger: "#FF5A6B",
    warning: "#F2C572",
    success: "#4DBE9A",
    info: "#7CA7E6"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6C3D1",
      accent: "#7C8B9C",
      muted: "#A0A0AA"
    }
  },
  platforms: {
    mobile: {
      colors: {
        primary: "#98A0D6",
        neutral: "#B0B0B8",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#D0D0D4",
          accent: "#98A0D6"
        }
      },
      gradients: {
        background: [
          {
            color: "#07080A",
            percent: 0
          },
          {
            color: "#0F1115",
            percent: 45
          },
          {
            color: "#111423",
            percent: 75
          },
          {
            color: "#354A66",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#1C2232",
            percent: 0
          },
          {
            color: "#23283A",
            percent: 45
          },
          {
            color: "#2E3350",
            percent: 75
          },
          {
            color: "#445273",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#07080A",
        percent: 0
      },
      {
        color: "#181B1F",
        percent: 40
      },
      {
        color: "#232A36",
        percent: 70
      },
      {
        color: "#4A5A6B",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#1C2232",
        percent: 0
      },
      {
        color: "#23283A",
        percent: 40
      },
      {
        color: "#2E3350",
        percent: 80
      }
    ]
  }
};
