import type { ThemeDefinition } from "../types";

export const violetNocturneDefinition: ThemeDefinition = {
  id: "violetNocturne",
  name: "Violet Nocturne",
  description: "Gothic violet gradient backgrounds with soft transitions.",
  adaptive: false,
  type: "light",
  style: "gradient",
  colors: {
    danger: "#B3261E"
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#5C6FE6",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#A06DDF",
        neutral: "#B3A3D6",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#A06DDF"
      }
    },
    mobile: {
      colors: {
        primary: "#5C6FE6",
        neutral: "#4A4F63",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#F2F4FB",
        percent: 0
      },
      {
        color: "#E9ECFB",
        percent: 45
      },
      {
        color: "#D0D5F8",
        percent: 75
      },
      {
        color: "#827BEF",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#E9EAF7",
        percent: 0
      },
      {
        color: "#D6D9F6",
        percent: 45
      },
      {
        color: "#B7BFF3",
        percent: 75
      },
      {
        color: "#7E78F0",
        percent: 100
      }
    ]
  }
};
