import type { ThemeDefinition } from "../types";

export const arcaneMidnightDefinition: ThemeDefinition = {
  id: "arcaneMidnight",
  name: "Arcane Midnight",
  description: "Mystical arcane gradients with rich violet-blue layers.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {},
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#CFC3E6",
      accent: "#A06DDF",
      muted: "#8B7CA8"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#A06DDF",
        neutral: "#B3A3D6",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#6C8CFF"
      }
    },
    mobile: {
      colors: {
        primary: "#B884F0",
        neutral: "#C2B5E8",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#DACFEE",
          accent: "#B884F0",
          muted: "#B7A8D2"
        }
      },
      gradients: {
        background: [
          {
            color: "#070608",
            percent: 0
          },
          {
            color: "#0D0D10",
            percent: 45
          },
          {
            color: "#18142A",
            percent: 75
          },
          {
            color: "#4D3A66",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#19162A",
            percent: 0
          },
          {
            color: "#23203A",
            percent: 45
          },
          {
            color: "#312A52",
            percent: 75
          },
          {
            color: "#56407A",
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
        color: "#14101C",
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
        color: "#19162A",
        percent: 0
      },
      {
        color: "#23203A",
        percent: 40
      },
      {
        color: "#3A2C5A",
        percent: 80
      }
    ]
  }
};
