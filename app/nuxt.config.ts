// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
// import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  // build: {
  //   transpile: ["vuetify"],
  // },
  // hooks: {
  //   "vite:extendConfig": (config) => {
  //     config.plugins!.push(vuetify({ autoImport: true }));
  //   },
  // },
  // vite: {
  //   ssr: {
  //     noExternal: ["vuetify"],
  //   },
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
  ssr: false,
  css: ["@/assets/main.scss"],
  modules: ["vuetify-nuxt-module", "dayjs-nuxt"],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: "./vuetify.config.ts", // <== you can omit it
  },
});