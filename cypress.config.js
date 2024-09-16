const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      mochawesome(on);
      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Cypress Test Results",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    baseUrl: "http://localhost:8080/parabank/index.htm",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
