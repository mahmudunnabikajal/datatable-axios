# Changelog

All notable changes to this project are documented in this file. Format is
based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-09-06

Modernization relaunch — no public API changes.

- Add ESLint + Prettier configuration.
- Add unit tests (`node:test`) covering `get`/`post`/`put` with and without
  `page`/`paginate`/`search` query parameters.
- Add GitHub Actions workflows for CI/publish and SonarCloud analysis.
- Add semantic-release configuration for automated npm publishing.
- Simplify `datatable.js` request methods to return the underlying
  `window.axios` promise directly instead of wrapping it in a redundant
  `new Promise(async ...)` executor (behavior unchanged).

## [0.0.11] - 2023-09-07

Note: not published to npm (latest published version is 0.0.10); dated from
the version-bump commit `6842c9b`.

- Add JSDoc comments across `datatable.js`.
- Fix `searchParams` variable scoping (moved from global to local scope).
- Change `const` to `let` for reassigned variables.
- Add `publish` npm script.
- Various README/documentation and image/branding refinements (author info,
  npm install instructions, header meta tags, permission policy meta, OG
  images, copy-code notification, `.vscode` gitignore entry).

## [0.0.10] - 2023-08-21

- Add documentation link to README.

## [0.0.9] - 2023-08-21

- Add license.
- Add pros & cons section, badge information, and general documentation to
  README.
- Correct README API URL and text.
- Add npm website reference.

## [0.0.8] - 2023-08-20

- Add code comments and reorganize README.

## [0.0.7] - 2023-08-20

- Change package export file configuration.

## [0.0.6] - 2023-08-20

- Add `.npmignore`.

## [0.0.5] - 2023-08-20

- Add `rollup.config.js` for bundling.
- Add `peerDependencies` to `package.json`.
- Update `package.json` keywords.

## [0.0.4] - 2023-08-20

- Change all files (internal restructuring).

## [0.0.3] - 2023-08-20

- Fix: add `axios` dependency.

## [0.0.2] - 2023-08-20

- Remove unused `datatable` constructor.

## [0.0.1] - 2023-08-20

- Initial release: `datatable` class with `get`/`post`/`put` methods that
  proxy `window.axios` requests, appending `page`/`paginate`/`search` query
  parameters when present in the current page's URL.
