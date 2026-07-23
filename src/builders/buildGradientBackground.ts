import type { ColorLike } from "@mutualzz/ui-core";
import type { GradientStop, ThemePlatform } from "../types";

export function buildGradientBackground(
  stops: GradientStop[],
  platform: ThemePlatform,
): ColorLike {
  const angle = platform === "mobile" ? 180 : 90;
  const parts = stops
    .map(({ color, percent }) => `${color} ${percent}%`)
    .join(",");
  return `linear-gradient(${angle}deg,${parts})` as ColorLike;
}
