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
    ...definition.platforms?.[platform]?.colors,
  };
}

function resolvePlatformTypography(
  definition: ThemeDefinition,
  platform: ThemePlatform,
) {
  return {
    colors: {
      ...definition.typography.colors,
      ...definition.platforms?.[platform]?.typography?.colors,
    },
  };
}

function resolvePlatformGradients(
  definition: ThemeDefinition,
  platform: ThemePlatform,
) {
  if (!definition.gradients) return undefined;
  const platformGradients = definition.platforms?.[platform]?.gradients;
  return {
    background: platformGradients?.background ?? definition.gradients.background,
    surface: platformGradients?.surface ?? definition.gradients.surface,
  };
}

export function buildTheme(
  definition: ThemeDefinition,
  platform: ThemePlatform,
): Theme {
  const base = definition.type === "dark" ? baseDarkTheme : baseLightTheme;
  const colors = resolvePlatformColors(definition, platform);
  const typography = resolvePlatformTypography(definition, platform);
  const gradients = resolvePlatformGradients(definition, platform);

  const background: ColorLike =
    definition.style === "gradient" && gradients
      ? buildGradientBackground(
          [
            ...gradients.background,
            { color: colors.primary ?? String(base.colors.primary), percent: 100 },
          ],
          platform,
        )
      : ((colors.background ?? base.colors.background) as ColorLike);

  const surface: ColorLike =
    definition.style === "gradient" && gradients
      ? buildGradientBackground(
          [
            ...gradients.surface,
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
