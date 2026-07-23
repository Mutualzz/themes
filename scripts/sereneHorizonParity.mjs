import { buildTheme, sereneHorizonDefinition } from "../dist/index.mjs";

const colorKeys = [
  "primary",
  "neutral",
  "background",
  "surface",
  "danger",
  "warning",
  "success",
  "info",
];

const typographyKeys = ["primary", "secondary", "accent", "muted"];

const mobileExpected = {
  id: "sereneHorizon",
  name: "Serene Horizon",
  description: "Uplifting gradients blending soft sky blues and grays.",
  adaptive: false,
  type: "light",
  style: "gradient",
  colors: {
    primary: "#4A90B0",
    neutral: "#4A5360",
    background:
      "linear-gradient(180deg,#F6FAFB 0%,#EEF5F8 45%,#DDEFF4 75%,#8CC0DA 100%,#4A90B0 100%)",
    surface:
      "linear-gradient(180deg,#EEF6F9 0%,#DDEFF4 45%,#B7DFEE 75%,#8CC0DA 100%,#4A90B0 100%)",
    danger: "#B3261E",
    warning: "#8F6500",
    success: "#1F6E34",
    info: "#0F5DA8",
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#4A90B0",
      muted: "#5A5A5F",
    },
  },
};

const desktopExpected = {
  id: "sereneHorizon",
  name: "Serene Horizon",
  description: "Uplifting gradients blending soft sky blues and grays.",
  adaptive: false,
  type: "light",
  style: "gradient",
  colors: {
    primary: "#5A8FE6",
    neutral: "#7CA7B7",
    background:
      "linear-gradient(90deg,#F6FAFB 0%,#EEF5F8 45%,#DDEFF4 75%,#8CC0DA 100%,#5A8FE6 100%)",
    surface:
      "linear-gradient(90deg,#EEF6F9 0%,#DDEFF4 45%,#B7DFEE 75%,#8CC0DA 100%,#5A8FE6 100%)",
    danger: "#B3261E",
    warning: "#B15A14",
    success: "#2F7A54",
    info: "#5A8FE6",
  },
  typography: {
    colors: {
      primary: "#1A1A1A",
      secondary: "#3A3A3A",
      accent: "#4A90B0",
      muted: "#5A5A5F",
    },
  },
};

function pickComparableTheme(theme) {
  return {
    id: theme.id,
    name: theme.name,
    description: theme.description,
    adaptive: theme.adaptive,
    type: theme.type,
    style: theme.style,
    colors: Object.fromEntries(
      colorKeys.map((key) => [key, String(theme.colors[key])]),
    ),
    typography: {
      colors: Object.fromEntries(
        typographyKeys.map((key) => [
          key,
          String(theme.typography.colors[key]),
        ]),
      ),
    },
  };
}

function assertParity(platform, expected) {
  const built = pickComparableTheme(
    buildTheme(sereneHorizonDefinition, platform),
  );

  for (const key of [
    "id",
    "name",
    "description",
    "adaptive",
    "type",
    "style",
  ]) {
    if (built[key] !== expected[key]) {
      throw new Error(
        `[${platform}] ${key}: expected ${JSON.stringify(expected[key])}, got ${JSON.stringify(built[key])}`,
      );
    }
  }

  for (const key of colorKeys) {
    if (built.colors[key] !== expected.colors[key]) {
      throw new Error(
        `[${platform}] colors.${key}: expected ${expected.colors[key]}, got ${built.colors[key]}`,
      );
    }
  }

  for (const key of typographyKeys) {
    if (built.typography.colors[key] !== expected.typography.colors[key]) {
      throw new Error(
        `[${platform}] typography.colors.${key}: expected ${expected.typography.colors[key]}, got ${built.typography.colors[key]}`,
      );
    }
  }
}

assertParity("mobile", mobileExpected);
assertParity("desktop", desktopExpected);

console.log("Serene Horizon parity checks passed for mobile and desktop.");
