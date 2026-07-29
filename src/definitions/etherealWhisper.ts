import type { ThemeDefinition } from "../types";

export const etherealWhisperDefinition: ThemeDefinition = {
  id: "etherealWhisper",
  name: "Ethereal Whisper",
  description: "Ethereal gradients with delicate aqua and misty whites.",
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
      accent: "#2AA8A3",
      muted: "#5A5A5F"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#3CB8B3",
        neutral: "#7CA7A7",
        warning: "#B15A14",
        success: "#2F7A54",
        info: "#3FB8AD"
      }
    },
    mobile: {
      colors: {
        primary: "#2AA8A3",
        neutral: "#4A5E5E",
        warning: "#8F6500",
        success: "#1F6E34",
        info: "#0F5DA8"
      },
      gradients: {
        background: [
          {
            color: "#F0FBFA",
            percent: 0
          },
          {
            color: "#DFF7F5",
            percent: 45
          },
          {
            color: "#AEEBE7",
            percent: 75
          },
          {
            color: "#56C2BD",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#E9F9F8",
            percent: 0
          },
          {
            color: "#CDF3F1",
            percent: 45
          },
          {
            color: "#9BE6E2",
            percent: 75
          },
          {
            color: "#58C1BD",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#F0FBFA",
        percent: 0
      },
      {
        color: "#E6F7F5",
        percent: 45
      },
      {
        color: "#BEEBE7",
        percent: 75
      },
      {
        color: "#5AC2BD",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#E9F9F8",
        percent: 0
      },
      {
        color: "#D3F3F1",
        percent: 45
      },
      {
        color: "#A3E6E2",
        percent: 75
      },
      {
        color: "#5AC2BD",
        percent: 100
      }
    ]
  }
};
