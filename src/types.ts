export type ThemePlatform = "mobile" | "desktop";

export interface GradientStop {
  color: string;
  percent: number;
}

export interface ThemeSemanticColors {
  primary: string;
  neutral: string;
  background?: string;
  surface?: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
}

export interface ThemeTypographyColors {
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
}

export interface ThemeDefinition {
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
  platforms?: Partial<
    Record<
      ThemePlatform,
      {
        colors?: Partial<ThemeSemanticColors>;
        gradients?: {
          background?: GradientStop[];
          surface?: GradientStop[];
        };
        typography?: {
          colors?: Partial<ThemeTypographyColors>;
        };
      }
    >
  >;
}
