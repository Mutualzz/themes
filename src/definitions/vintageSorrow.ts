import type { ThemeDefinition } from "../types";

export const vintageSorrowDefinition: ThemeDefinition = {
  id: "vintageSorrow",
  name: "Vintage Sorrow",
  description: "Dramatic vintage gradients with melancholic rose transitions.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {},
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#E1B7C8",
      accent: "#F48CA7",
      muted: "#A88B97"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#F48CA7",
        neutral: "#CDAFB9",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#FF95AB"
      }
    },
    mobile: {
      colors: {
        primary: "#FF95AB",
        neutral: "#D9C0CC",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#EBCDD7",
          accent: "#FF95AB",
          muted: "#CDAFB9"
        }
      },
      gradients: {
        background: [
          {
            color: "#070609",
            percent: 0
          },
          {
            color: "#0F0D11",
            percent: 45
          },
          {
            color: "#2A1720",
            percent: 75
          },
          {
            color: "#8B4B5A",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#19161A",
            percent: 0
          },
          {
            color: "#20161A",
            percent: 45
          },
          {
            color: "#3C2430",
            percent: 75
          },
          {
            color: "#7A4B57",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#070609",
        percent: 0
      },
      {
        color: "#181014",
        percent: 40
      },
      {
        color: "#2C1720",
        percent: 70
      },
      {
        color: "#7A3A4B",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#19161A",
        percent: 0
      },
      {
        color: "#20161A",
        percent: 40
      },
      {
        color: "#3C2430",
        percent: 80
      }
    ]
  }
};
