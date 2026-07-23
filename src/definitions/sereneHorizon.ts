import type { ThemeDefinition } from "../types";

export const sereneHorizonDefinition: ThemeDefinition = {
  id: "sereneHorizon",
  name: "Serene Horizon",
  description: "Uplifting gradients blending soft sky blues and grays.",
  adaptive: false,
  type: "light",
  style: "gradient",
  colors: {
    danger: "#B3261E",
  },
  gradients: {
    background: [
      { color: "#F6FAFB", percent: 0 },
      { color: "#EEF5F8", percent: 45 },
      { color: "#DDEFF4", percent: 75 },
      { color: "#8CC0DA", percent: 100 },
    ],
    surface: [
      { color: "#EEF6F9", percent: 0 },
      { color: "#DDEFF4", percent: 45 },
      { color: "#B7DFEE", percent: 75 },
      { color: "#8CC0DA", percent: 100 },
    ],
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#4A90B0",
      muted: "#5A5A5F",
    },
  },
  platforms: {
    mobile: {
      colors: {
        primary: "#4A90B0",
        neutral: "#4A5360",
        danger: "#B3261E",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8",
      },
    },
    desktop: {
      colors: {
        primary: "#5A8FE6",
        neutral: "#7CA7B7",
        danger: "#B3261E",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#5A8FE6",
      },
    },
  },
};
