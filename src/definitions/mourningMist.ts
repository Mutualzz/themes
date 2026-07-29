import type { ThemeDefinition } from "../types";

export const mourningMistDefinition: ThemeDefinition = {
  id: "mourningMist",
  name: "Mourning Mist",
  description: "Misty muted gradients with solemn, soft tones.",
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
      accent: "#7A4A4A",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#A88082",
        neutral: "#A89A9A",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#B37E80"
      }
    },
    mobile: {
      colors: {
        primary: "#7A4A4A",
        neutral: "#554848",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      gradients: {
        background: [
          {
            color: "#FBFBFC",
            percent: 0
          },
          {
            color: "#F5F5F7",
            percent: 45
          },
          {
            color: "#ECE9EE",
            percent: 75
          },
          {
            color: "#A88082",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#FBFBFC",
        percent: 0
      },
      {
        color: "#F5F5F7",
        percent: 45
      },
      {
        color: "#ECE9EE",
        percent: 75
      },
      {
        color: "#B37E80",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#F4F2F4",
        percent: 0
      },
      {
        color: "#ECE7EA",
        percent: 45
      },
      {
        color: "#D9C8CA",
        percent: 75
      },
      {
        color: "#B37E80",
        percent: 100
      }
    ]
  }
};
