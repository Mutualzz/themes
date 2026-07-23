import type { Theme } from "@emotion/react";
import {
  baseDarkTheme,
  baseLightTheme,
  type ColorLike,
} from "@mutualzz/ui-core";
import type { ThemeDefinition, ThemePlatform } from "../types";
import { buildGradientBackground } from "./buildGradientBackground";

function resolvePlatformColors(
  definition: ThemeDefinition,
  platform: ThemePlatform,
) {
  return {
    ...definition.colors,
    ...definition.platforms[platform]?.colors,
  };
}

function resolvePlatformTypography(
  definition: ThemeDefinition,
  platform: ThemePlatform,
) {
  return {
    colors: {
      ...definition.typography.colors,
      ...definition.platforms[platform]?.typography?.colors,
    },
  };
}

export function buildTheme(
  definition: ThemeDefinition,
  platform: ThemePlatform,
): Theme {
  const base = definition.type === "dark" ? baseDarkTheme : baseLightTheme;
  const colors = resolvePlatformColors(definition, platform);
  const typography = resolvePlatformTypography(definition, platform);

  const background: ColorLike =
    definition.style === "gradient" && definition.gradients
      ? buildGradientBackground(
          [
            ...definition.gradients.background,
            { color: colors.primary ?? String(base.colors.primary), percent: 100 },
          ],
          platform,
        )
      : ((colors.background ?? base.colors.background) as ColorLike);

  const surface: ColorLike =
    definition.style === "gradient" && definition.gradients
      ? buildGradientBackground(
          [
            ...definition.gradients.surface,
            { color: colors.primary ?? String(base.colors.primary), percent: 100 },
          ],
          platform,
        )
      : ((colors.surface ?? base.colors.surface) as ColorLike);

  return {
    ...base,
    id: definition.id,
    name: definition.name,
    description: definition.description,
    adaptive: definition.adaptive,
    type: definition.type,
    style: definition.style,
    colors: {
      ...base.colors,
      primary: (colors.primary ?? base.colors.primary) as ColorLike,
      neutral: (colors.neutral ?? base.colors.neutral) as ColorLike,
      background,
      surface,
      danger: (colors.danger ?? base.colors.danger) as ColorLike,
      warning: (colors.warning ?? base.colors.warning) as ColorLike,
      success: (colors.success ?? base.colors.success) as ColorLike,
      info: (colors.info ?? base.colors.info) as ColorLike,
    },
    typography: {
      ...base.typography,
      colors: {
        ...base.typography.colors,
        primary: typography.colors.primary as ColorLike,
        secondary: typography.colors.secondary as ColorLike,
        accent: typography.colors.accent as ColorLike,
        muted: typography.colors.muted as ColorLike,
      },
    },
  };
}
