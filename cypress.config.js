const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "62u4w9",
    setupNodeEvents(on, config) {
      
    },
    video:true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
