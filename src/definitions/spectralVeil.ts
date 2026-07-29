import type { ThemeDefinition } from "../types";

export const spectralVeilDefinition: ThemeDefinition = {
  id: "spectralVeil",
  name: "Spectral Veil",
  description: "Ethereal soft-dark gradients with luminous blue highlights.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    primary: "#5A8FE6",
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
      accent: "#5A8FE6",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    mobile: {
      colors: {
        primary: "#6E9EF0",
        neutral: "#A5B4C2",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#CBD5E8",
          accent: "#6E9EF0",
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
            color: "#0D1116",
            percent: 45
          },
          {
            color: "#0F1726",
            percent: 75
          },
          {
            color: "#2B3B57",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#161822",
            percent: 0
          },
          {
            color: "#202633",
            percent: 45
          },
          {
            color: "#2A3A4B",
            percent: 75
          },
          {
            color: "#3F5B80",
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
        color: "#14181E",
        percent: 40
      },
      {
        color: "#1B2636",
        percent: 70
      },
      {
        color: "#3A4F7A",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#161822",
        percent: 0
      },
      {
        color: "#202633",
        percent: 40
      },
      {
        color: "#2A3A4B",
        percent: 80
      }
    ]
  }
};
