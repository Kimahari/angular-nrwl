module.exports = {
  displayName: 'some-app',
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': ['jest-preset-angular', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }]
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleNameMapper: { '^@myworkspace/go-js-lib$': '<rootDir>/../../libs/go-js-lib/src/index.ts' },
  coverageDirectory: '../../coverage/apps/some-app'
};
