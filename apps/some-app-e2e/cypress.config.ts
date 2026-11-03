import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  fixturesFolder: 'src/fixtures',
  modifyObstructiveCode: false,
  video: true,
  videosFolder: '../../dist/cypress/apps/some-app-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/some-app-e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'npx nx run some-app:serve' }
    }),
    baseUrl: 'http://localhost:4200',
    specPattern: 'src/integration/**/*.spec.ts',
    supportFile: 'src/support/index.ts'
  }
});
