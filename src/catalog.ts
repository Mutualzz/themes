import type { Theme } from "@emotion/react";
import { baseDarkTheme, baseLightTheme } from "@mutualzz/ui-core";
import { buildTheme } from "./builders/buildTheme";
import {
  builtInThemeDefinitionsById,
  darkBuiltInThemeIds,
  lightBuiltInThemeIds,
} from "./definitions";
import type { ThemePlatform } from "./types";

export function buildBuiltInThemes(platform: ThemePlatform): Theme[] {
  const darkThemes: Theme[] = [baseDarkTheme];
  for (const id of darkBuiltInThemeIds) {
    const definition = builtInThemeDefinitionsById[id];
    if (!definition) continue;
    darkThemes.push(buildTheme(definition, platform));
  }

  const lightThemes: Theme[] = [];
  for (const id of lightBuiltInThemeIds) {
    if (id === "baseLight") {
      lightThemes.push(baseLightTheme);
      continue;
    }
    const definition = builtInThemeDefinitionsById[id];
    if (!definition) continue;
    lightThemes.push(buildTheme(definition, platform));
  }

  return [...darkThemes, ...lightThemes];
}
