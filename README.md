# Myworkspace

## Dependency compatibility update

Use Node 22 (the tested version is pinned in `.nvmrc`) and npm 10 or newer.
The Angular framework packages are aligned at 20.3.35, with Angular CLI/build
tooling 20.3.42, Nx 24.0.3, Cypress 16.2.1, Jest 30.2.0, and TypeScript 5.8.3.
Nx uses the project definitions in `apps/*/project.json` and `libs/*/project.json`,
with Jest, ESLint, and Cypress targets inferred from their configuration files.
The legacy `angular.json` retains Angular build/serve definitions, but no longer
registers the Nx executors removed in Nx 24. Use the Nx commands below for tests
and lint. Both default and production Cypress targets start the matching app server.
The older generated documentation below predates this tooling update; use these commands:

```powershell
npm ci
npm run build
npm run build -- --configuration=production
npm test -- --skip-nx-cache
npm run lint -- --skip-nx-cache
npm run e2e -- --skip-nx-cache
npm audit --omit=dev
npm audit
```

The production dependency audit is clean after this update. The full audit still
reports development-tooling findings; do not use `npm audit fix --force` to clear
them, because its suggested major upgrades and downgrades can break this package
set. Cypress needs its separately downloaded browser binary to run end-to-end
tests (`npx cypress install` if it is missing).

Unit and Cypress tests verify the actual library diagram, including its initialized
canvas, rather than the removed welcome-heading scaffold. Jest uses a canvas helper
so the real GoJS component can initialize in the unit test environment.

ESLint 9 replaces TSLint and Codelyzer. All three projects use Nx lint targets with
TypeScript rules and module-boundary checks; the Angular app and library also lint
external and inline templates. The existing NgModule architecture is explicitly
allowed. Lint fails on any warning. Edit the root and project `eslint.config.mjs`
files to change these rules.

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@myworkspace/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
