import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern:"./cypress/test/**/*spec.{ts,js,tsx,jsx}" ,
    baseUrl:"http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
