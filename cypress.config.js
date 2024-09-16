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
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
