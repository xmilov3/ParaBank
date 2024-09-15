const { defineConfig } = require("cypress");

//module.exports = defineConfig({
//e2e: {
//setupNodeEvents(on, config) {
// implement node event listeners here
//},
//},
//});
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080/parabank/index.htm",
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {},
  },
});
