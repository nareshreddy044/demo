const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/results-[hash].xml', // Ensure this path matches the archiving path in Jenkins
  },
  // Other Cypress configurations...
});
