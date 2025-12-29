const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // ⏱ Global timeout for Cypress commands
  defaultCommandTimeout: 10000,

  // 🎥 Enable video recording (only works with `cypress run`)
  video: true,

  // 📊 Mochawesome Reporter
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress HTML Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: false,
    overwrite: true
  },

  // 🔌 Cypress E2E setup
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    }
  }
});
