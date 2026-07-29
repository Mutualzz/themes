import type { ThemeDefinition } from "../types";

export const rustRequiemDefinition: ThemeDefinition = {
  id: "rustRequiem",
  name: "Rust Requiem",
  description: "Grunge industrial gradients with warm oxidized layers.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {},
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#D8C6B0",
      accent: "#FF9B5A",
      muted: "#A88B67"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#FF9B5A",
        neutral: "#B8A47A",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#FFB37A"
      }
    },
    mobile: {
      colors: {
        primary: "#FFB37A",
        neutral: "#C4B48F",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#E1D3C0",
          accent: "#FFB37A",
          muted: "#B8AB88"
        }
      },
      gradients: {
        background: [
          {
            color: "#070605",
            percent: 0
          },
          {
            color: "#0D0D0B",
            percent: 45
          },
          {
            color: "#241B14",
            percent: 75
          },
          {
            color: "#905E3F",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#15140F",
            percent: 0
          },
          {
            color: "#201E18",
            percent: 45
          },
          {
            color: "#2E2A23",
            percent: 75
          },
          {
            color: "#6F4E3D",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#070605",
        percent: 0
      },
      {
        color: "#18140F",
        percent: 40
      },
      {
        color: "#2C2114",
        percent: 70
      },
      {
        color: "#7A4E2B",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#15140F",
        percent: 0
      },
      {
        color: "#201E18",
        percent: 40
      },
      {
        color: "#3A2A1E",
        percent: 80
      }
    ]
  }
};
