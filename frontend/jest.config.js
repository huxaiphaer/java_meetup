module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!/build",
    "!.idea/",
    "!src/App.vue",
    "!src/main.js",
    "!src/utils/Urls.js",
    "!src/store/index.js",
    "!src/plugins/vuetify.js",
    "!src/registerServiceWorker.js",
    "!src/store/modules/register.js"
  ]
};
