import type { ThemeDefinition } from "../types";

export const bloodMoonSerenadeDefinition: ThemeDefinition = {
  id: "bloodMoonSerenade",
  name: "Blood Moon Serenade",
  description: "Crimson gradients blending romance and tragic dusk.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {},
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#E8B7C1",
      accent: "#F45A6A",
      muted: "#A88B97"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#F45A6A",
        neutral: "#B89CA9",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#F47B94"
      }
    },
    mobile: {
      colors: {
        primary: "#FF6F84",
        neutral: "#C7AFC0",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#F0C8CF",
          accent: "#FF6F84",
          muted: "#BFA8B4"
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
            color: "#160F12",
            percent: 75
          },
          {
            color: "#8B2F3C",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#140F12",
            percent: 0
          },
          {
            color: "#24171C",
            percent: 45
          },
          {
            color: "#312126",
            percent: 75
          },
          {
            color: "#7A3945",
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
        color: "#181014",
        percent: 40
      },
      {
        color: "#2C1620",
        percent: 70
      },
      {
        color: "#7A2B3A",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#140F12",
        percent: 0
      },
      {
        color: "#24171C",
        percent: 40
      },
      {
        color: "#3A1E2A",
        percent: 80
      }
    ]
  }
};
