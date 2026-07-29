import type { ThemeDefinition } from "../types";

export const tranquilDepthsDefinition: ThemeDefinition = {
  id: "tranquilDepths",
  name: "Tranquil Depths",
  description: "Calm oceanic gradients with layered sea tones.",
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
      accent: "#3CA9C8",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#3CA9C8",
        neutral: "#8CA3B7",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#3CA9C8"
      }
    },
    mobile: {
      colors: {
        primary: "#2F8B72",
        neutral: "#4A5555",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      typography: {
        colors: {
          accent: "#2F8B72"
        }
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#F5FAF9",
        percent: 0
      },
      {
        color: "#EAF4F2",
        percent: 45
      },
      {
        color: "#CFE9E5",
        percent: 75
      },
      {
        color: "#67B49B",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#E9F4F1",
        percent: 0
      },
      {
        color: "#D3ECE7",
        percent: 45
      },
      {
        color: "#B2E0D6",
        percent: 75
      },
      {
        color: "#6FB99F",
        percent: 100
      }
    ]
  }
};
