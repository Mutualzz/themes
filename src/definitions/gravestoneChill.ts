import type { ThemeDefinition } from "../types";

export const gravestoneChillDefinition: ThemeDefinition = {
  id: "gravestoneChill",
  name: "Gravestone Chill",
  description: "Muted graveyard gradients with chilly stone tones.",
  adaptive: false,
  type: "dark",
  style: "gradient",
  colors: {},
  typography: {
    colors: {
      primary: "#F3F6FA",
      secondary: "#C3C9D1",
      accent: "#AEB6CF",
      muted: "#7C8B9C"
    }
  },
  platforms: {
    desktop: {
      colors: {
        primary: "#AEB6CF",
        neutral: "#8C9BAA",
        danger: "#FF5A6B",
        warning: "#F2C572",
        success: "#4DBE9A",
        info: "#7CA7E6"
      }
    },
    mobile: {
      colors: {
        primary: "#B7B7D8",
        neutral: "#A5B4C2",
        danger: "#FF6B6B",
        warning: "#F3CE72",
        success: "#5CC8A6",
        info: "#64A9FF"
      },
      typography: {
        colors: {
          primary: "#F5F5F7",
          secondary: "#D0D6DE",
          accent: "#B7B7D8",
          muted: "#97A9B8"
        }
      },
      gradients: {
        background: [
          {
            color: "#070708",
            percent: 0
          },
          {
            color: "#0C0D11",
            percent: 45
          },
          {
            color: "#15161C",
            percent: 75
          },
          {
            color: "#3C3E4A",
            percent: 100
          }
        ],
        surface: [
          {
            color: "#15161A",
            percent: 0
          },
          {
            color: "#23243A",
            percent: 45
          },
          {
            color: "#2F3348",
            percent: 75
          },
          {
            color: "#485266",
            percent: 100
          }
        ]
      }
    }
  },
  gradients: {
    background: [
      {
        color: "#070708",
        percent: 0
      },
      {
        color: "#181A1F",
        percent: 40
      },
      {
        color: "#23262E",
        percent: 70
      },
      {
        color: "#49505E",
        percent: 100
      }
    ],
    surface: [
      {
        color: "#15161A",
        percent: 0
      },
      {
        color: "#23243A",
        percent: 40
      },
      {
        color: "#384052",
        percent: 80
      }
    ]
  }
};
