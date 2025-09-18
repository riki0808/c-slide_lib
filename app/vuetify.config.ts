import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import {
  MAIN_THEME,
  mainTheme,
  MAIN_DARK_THEME,
  mainDarkTheme,
} from "./helpers/themes";
import { defaults } from "./helpers/defaults";

export default defineVuetifyConfiguration({
  /* vuetify options */
  defaults,
  display: {
    mobileBreakpoint: "sm",
  },
  icons: {
    defaultSet: "mdi",
    sets: ["mdi"],
  },
  // add theme
  theme: {
    defaultTheme: MAIN_THEME,
    themes: {
      mainTheme,
      mainDarkTheme,
    },
    // primary-darken-9 primary-lighten-9 までできるようにする
    variations: {
      colors: ["primary", "secondary", "accent"],
      lighten: 9,
      darken: 9,
    },
  },
});
