export type ThemePlatform = "mobile" | "desktop";

export type GradientStop = {
  color: string;
  percent: number;
};

export type ThemeSemanticColors = {
  primary: string;
  neutral: string;
  background?: string;
  surface?: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
};

export type ThemeTypographyColors = {
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
};

export type ThemeDefinition = {
  id: string;
  name: string;
  description: string;
  adaptive: boolean;
  type: "dark" | "light";
  style: "normal" | "gradient";
  colors: Partial<ThemeSemanticColors>;
  gradients?: {
    background: GradientStop[];
    surface: GradientStop[];
  };
  typography: {
    colors: ThemeTypographyColors;
  };
  platforms: Partial<
    Record<
      ThemePlatform,
      {
        colors?: Partial<ThemeSemanticColors>;
        typography?: {
          colors?: Partial<ThemeTypographyColors>;
        };
      }
    >
  >;
};
