const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/_vars.scss";`,
      },
    },
  },
});
