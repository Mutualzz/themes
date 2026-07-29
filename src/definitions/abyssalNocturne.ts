import type { ThemeDefinition } from "../types";

export const abyssalNocturneDefinition: ThemeDefinition = {
  id: "abyssalNocturne",
  name: "Abyssal Nocturne",
  description: "Deep mysterious gradients with oceanic indigo hues.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    primary: "#2491c5",
    neutral: "#8CA3B7",
    danger: "#FF5A6B",
    warning: "#F2C572",
    success: "#4DBE9A",
    info: "#4A9DFF"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6C3D1",
      accent: "#2491c5",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    mobile: {
      colors: {
        primary: "#2EA8D8",
        neutral: "#A5B4C2",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#CBD5DD",
          accent: "#2EA8D8",
          muted: "#97A9B8"
        }
      },
      gradients: {
        background: [
          {
            color: "#07080A",
            percent: 0
          },
          {
            color: "#0D1115",
            percent: 45
          },
          {
            color: "#081F2B",
            percent: 75
          },
          {
            color: "#135269",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#15171A",
            percent: 0
          },
          {
            color: "#23232A",
            percent: 45
          },
          {
            color: "#2B3942",
            percent: 75
          },
          {
            color: "#2E5160",
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
        color: "#10141A",
        percent: 40
      },
      {
        color: "#14293A",
        percent: 70
      },
      {
        color: "#1B4A5F",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#15171A",
        percent: 0
      },
      {
        color: "#23232A",
        percent: 40
      },
      {
        color: "#26405A",
        percent: 80
      }
    ]
  }
};
