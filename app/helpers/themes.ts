import type { ThemeDefinition } from "vuetify";

// テーマ名
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#006CB8",
    secondary: "#6FBA2C",
    error: "#ef4444",
    info: "#3b82f6",
    success: "#22c55e",
    warning: "#f59e0b",
  },
};

// Dark モードのテーマ名
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#0C111B",
    surface: "#1f2937",
    primary: "#006CB8",
    secondary: "#6FBA2C",
    error: "#ef4444",
    info: "#3b82f6",
    success: "#22c55e",
    warning: "#f59e0b",
  },
};
