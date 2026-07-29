import type { ThemeDefinition } from "../types";

export const phantomMistDefinition: ThemeDefinition = {
  id: "phantomMist",
  name: "Phantom Mist",
  description: "Ethereal misty gradients with deep ocean shadows.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    primary: "#3CA9C8",
    neutral: "#8CA3B7",
    danger: "#FF5A6B",
    warning: "#F2C572",
    success: "#4DBE9A",
    info: "#5CB8E6"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#B6C3D1",
      accent: "#3CA9C8",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    mobile: {
      colors: {
        primary: "#4BB7D9",
        neutral: "#A5B4C2",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#C9D8E0",
          accent: "#4BB7D9",
          muted: "#97A9B8"
        }
      },
      gradients: {
        background: [
          {
            color: "#070709",
            percent: 0
          },
          {
            color: "#0D1113",
            percent: 45
          },
          {
            color: "#0E1C21",
            percent: 75
          },
          {
            color: "#255A71",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#15181B",
            percent: 0
          },
          {
            color: "#20272A",
            percent: 45
          },
          {
            color: "#2B3638",
            percent: 75
          },
          {
            color: "#3F5560",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#070709",
        percent: 0
      },
      {
        color: "#14181B",
        percent: 40
      },
      {
        color: "#1B2A32",
        percent: 70
      },
      {
        color: "#3A6B82",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#15181B",
        percent: 0
      },
      {
        color: "#20272A",
        percent: 40
      },
      {
        color: "#2B3638",
        percent: 80
      }
    ]
  }
};
