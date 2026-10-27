import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'src/fixtures',
  modifyObstructiveCode: false,
  video: true,
  videosFolder: '../../dist/cypress/apps/some-app-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/some-app-e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'src/integration/**/*.spec.ts',
    supportFile: 'src/support/index.ts'
  }
});
