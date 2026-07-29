import type { ThemeDefinition } from "../types";

export const noirElegyDefinition: ThemeDefinition = {
  id: "noirElegy",
  name: "Noir Elegy",
  description: "Melancholic gothic gradients with dusky purple swaths.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {
    primary: "#A06DDF",
    neutral: "#B3A3D6",
    danger: "#FF5A6B",
    warning: "#F2C572",
    success: "#4DBE9A",
    info: "#B884F0"
  },
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#CFC3E6",
      accent: "#A06DDF",
      muted: "#8B7CA8"
    }
  },
  platforms: {
    mobile: {
      colors: {
        primary: "#B884F0",
        neutral: "#C2B5D8",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#E1D2F2",
          accent: "#B884F0",
          muted: "#B7A8CC"
        }
      },
      gradients: {
        background: [
          {
            color: "#070609",
            percent: 0
          },
          {
            color: "#0D0D10",
            percent: 45
          },
          {
            color: "#1B1426",
            percent: 75
          },
          {
            color: "#6B3F7A",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#16141B",
            percent: 0
          },
          {
            color: "#23232A",
            percent: 45
          },
          {
            color: "#2E2738",
            percent: 75
          },
          {
            color: "#4A3A5A",
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
        color: "#18101C",
        percent: 40
      },
      {
        color: "#241C3A",
        percent: 70
      },
      {
        color: "#6B3F7A",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#16141B",
        percent: 0
      },
      {
        color: "#23232A",
        percent: 40
      },
      {
        color: "#2E2738",
        percent: 80
      }
    ]
  }
};
