import { defineConfig } from "cypress";

import config from "./src/config";

export default defineConfig({
  responseTimeout: 30000,
  defaultCommandTimeout: 30000,
  numTestsKeptInMemory: 0,
  pageLoadTimeout: 60000,
  projectId: "8tuww5",
  trashAssetsBeforeRuns: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
  env: {
    auth0_username: config.username,
    auth0_password: config.password,
  },
});
