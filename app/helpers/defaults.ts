import type { DefaultsInstance } from "vuetify/lib/framework.mjs";

export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 1,
    height: 48,
  },
  VSelect: {
    density: "compact",
    variant: "outlined",
    hideDetails: "auto",
  },
  VAutocomplete: {
    density: "compact",
    variant: "outlined",
    hideDetails: "auto",
  },
  VList: {
    density: "compact",
    // activeColor: "#00896B",
    // baseColor: "primary",
    // // bgColor: "#00896B",
    // color: "primary",
  },
  VBtn: {
    color: "primary",
    // height: 38,
    // rounded: "lg",
    // size: "small",
  },

  VTextField: {
    elevation: 0,
    color: "primary",
    variant: "outlined",
    density: "compact",
    hideDetails: "auto",
  },
  VCheckbox: {
    hideDetails: "auto",
  },
  VTextarea: {
    elevation: 0,
    color: "primary",
    variant: "outlined",
    density: "compact",
    hideDetails: "auto",
  },
};
