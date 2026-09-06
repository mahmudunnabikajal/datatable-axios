# Execution Plan — 3 Parallel Tracks

Companion to `MODERNIZATION_PLAN.md`. Split into 3 tracks so 3 subagents
can work mostly independently. Each step lists exact files to touch and
the exact commit to make immediately after — **one commit per step, in
order, no batching**. Commit messages follow Conventional Commits
(`type(scope): description`), matching niftycli's history.

**Dependency rule between tracks:** Track A (library tooling) should reach
at least Step A4 (tests passing) before Track C (relaunch/CHANGELOG)
starts, because the 1.0.0 relaunch commit should be on top of a working,
linted, tested codebase. Track B (docs rebrand) has no dependency on A or
C and can run fully in parallel from the start.

Repos:

- Track A + C → `/home/mahmudun-nabi-kajal/Workspace/Personal/datatable-axios`
- Track B → `/home/mahmudun-nabi-kajal/Workspace/Personal/datatable-axios-docs`

---

## Track A — Library tooling modernization

Repo: `datatable-axios`. Work on a branch: `git checkout -b chore/modernize-tooling`.

### A1. Lint + format config

Copy from niftycli, adapted for browser globals:

- Create `eslint.config.js` (copy `niftycli/eslint.config.js`, swap
  `globals.node` → `globals.browser`).
- Create `.prettierrc.json`, `.prettierignore` (copy verbatim from niftycli).
- Add devDeps: `@eslint/js`, `eslint`, `eslint-config-prettier`,
  `eslint-plugin-prettier`, `globals`, `prettier`.
- Add scripts to `package.json`: `lint`, `lint:fix`, `format`, `format:check`.
- Run `npm run lint:fix && npm run format` to normalize existing `src/` files.

**Commit:**

```
chore(lint): add eslint and prettier configuration
```

### A2. Test scaffolding

- Add `test/datatable.test.js` using `node:test` + `node:assert`. Stub
  `globalThis.window = { location: { search: "" }, axios: mockAxios }`
  per test case (see MODERNIZATION_PLAN.md §4 for cases: GET/POST/PUT
  with and without page/paginate/search params).
- Add scripts: `"test": "node --test"`,
  `"test:coverage": "node --test --experimental-test-coverage --test-reporter=lcov --test-reporter-destination=lcov.info"`.
- Run `npm test` locally, confirm green.

**Commit:**

```
test(datatable): add unit tests for get, post, and put methods
```

### A3. CI workflows

- Create `.github/workflows/publish.yml` (copy niftycli's, adjust Node
  version for CI runner only — recommend `"20"` LTS instead of `"24"`,
  since this library has no Node-runtime requirement of its own).
- Create `.github/workflows/sonar.yml` (copy niftycli's verbatim, same
  Node version choice).
- Create `sonar-project.properties` (copy niftycli's, update
  `sonar.projectKey`/`sonar.organization` values to datatable-axios's).

**Commit:**

```
ci: add publish and sonarcloud workflows
```

### A4. semantic-release setup

- Create `.releaserc.json` (copy niftycli's verbatim).
- Add devDeps: `semantic-release`, `@semantic-release/commit-analyzer`,
  `@semantic-release/git`, `@semantic-release/github`,
  `@semantic-release/npm`, `@semantic-release/release-notes-generator`.
- Update `package.json`: add `"update:deps"` script, remove the old
  `"publish": "npm run build && npm publish"` script, add
  `"prepublishOnly": "npm run build"`.
- Verify end-to-end locally: `npm run lint && npm run format:check && npm
test && npm run build` all pass clean.

**Commit:**

```
chore(release): configure semantic-release for automated npm publishing
```

_(Gate: Track C should not start until this commit is done and green.)_

---

## Track B — datatable-axios-docs rebrand

Repo: `datatable-axios-docs`. Work on a branch: `git checkout -b chore/rebrand-datatable-axios`.
(If this repo has no initial commit yet, run `git init` / first commit
before branching — check `git status` first.)

### B1. Remove niftycli-only assets

- Delete `gif-generator/` entirely (no CLI/TUI to demo for a browser
  library).
- Delete `website/docs/email-setup.md`, `mcp-server.md`,
  `project-management.md` (niftycli-only concepts).

**Commit:**

```
chore: remove niftycli-specific gif-generator and docs content
```

### B2. Rebrand Docusaurus config

- Edit `website/docusaurus.config.ts`: `title`, `tagline`, `url` (set to
  `https://datatable-axios.mahmudunnabikajal.com`), `baseUrl` (`/`),
  `organizationName`/`projectName` → `mahmudunnabikajal`/`datatable-axios`,
  GitHub edit-this-page links → datatable-axios-docs repo, favicon, social
  card image.
- Add `website/static/CNAME` containing `datatable-axios.mahmudunnabikajal.com`.

**Commit:**

```
chore(config): rebrand docusaurus site for datatable-axios
```

### B3. Rewrite CLAUDE.md

- Rewrite project description, tech-stack notes, and any
  niftycli-specific command/skill references to describe the
  datatable-axios docs site instead.

**Commit:**

```
docs: rewrite CLAUDE.md for datatable-axios-docs
```

### B4. Replace docs content

- `website/docs/intro.md` — what datatable-axios does + installation
  (port from `datatable-axios/Readme.md` intro section).
- `website/docs/usage.md` — get/post/put + pagination/search examples
  (port from Readme.md usage sections).
- `website/docs/api-reference.md` — class/method signatures.
- `website/docs/changelog.md` — will sync with `datatable-axios/CHANGELOG.md`
  once Track C produces it; stub it now with a "coming soon" note if C
  hasn't landed yet, revisit in B5.
- `website/docs/faq.md`, `troubleshooting.md` — rewrite or trim to
  datatable-axios-relevant content; delete if nothing applies yet.

**Commit:**

```
docs: replace niftycli content with datatable-axios documentation
```

### B5. Sync changelog page (after Track C lands)

- Copy the finalized `datatable-axios/CHANGELOG.md` content into
  `website/docs/changelog.md` (Docusaurus front-matter + formatting pass).

**Commit:**

```
docs(changelog): sync changelog with 1.0.0 relaunch
```

### B6. Verify build

- Run the `engineering-loop` skill (format, lint, typecheck, build) in
  this repo; fix anything it flags.

**Commit (only if the loop required fixes):**

```
fix(docs): resolve engineering-loop findings
```

---

## Track C — CHANGELOG backfill + 1.0.0 relaunch

Repo: `datatable-axios`. Depends on Track A reaching A4. Same branch as
Track A (`chore/modernize-tooling`) or its own `chore/relaunch-1.0.0` —
recommend continuing on Track A's branch so the relaunch commit sits on
top of working tooling.

### C1. Write CHANGELOG.md backfill

- Create `CHANGELOG.md` in Keep-a-Changelog format, one `## [x.y.z] -
YYYY-MM-DD` section per version 0.0.1 → 0.0.11.
- Dates from `npm view datatable-axios time --json` (already fetched:
  0.0.1 2023-08-20 through 0.0.11 — note 0.0.11 doesn't appear in current
  npm registry metadata, confirm via `npm view datatable-axios versions`
  before finalizing; if unpublished, date it from git commit `6842c9b`
  2023-09-07 instead and note it as such).
- Content per version from `git log --oneline` commit ranges between each
  version-bump commit (already captured in this conversation — reuse
  that list rather than re-running).

**Commit:**

```
docs(changelog): backfill changelog for 0.0.1 through 0.0.11
```

### C2. Version bump to 1.0.0

- Edit `package.json`: `"version": "1.0.0"`.
- Add a `## [1.0.0] - <today>` section to `CHANGELOG.md` summarizing the
  modernization (lint/tests/CI/semantic-release, no API changes).

**Commit:**

```
chore(release): relaunch as 1.0.0 with modernized tooling
```

### C3. Tag and push (requires user confirmation before pushing)

- `git tag v1.0.0`
- Confirm with user before `git push origin chore/modernize-tooling
--tags` or opening a PR — pushing tags/branches is a shared-state
  action, do not push without explicit go-ahead.

**No additional commit** — tagging only.

---

## Suggested subagent assignment

| Subagent | Track                                           | Repo                 |
| -------- | ----------------------------------------------- | -------------------- |
| 1        | A (A1→A4)                                       | datatable-axios      |
| 2        | B (B1→B4, B6)                                   | datatable-axios-docs |
| 3        | C (C1→C3) — starts after subagent 1 finishes A4 | datatable-axios      |

After A4 and C1/C2 land, subagent 2 should pick up B5 to sync the
changelog page.

## Final integration checklist (you, not a subagent)

- [ ] Review and merge `chore/modernize-tooling` branch in datatable-axios.
- [ ] Confirm GitHub repo secrets `NPM_TOKEN`, `SONAR_TOKEN` exist for
      datatable-axios (copy from niftycli's repo settings if needed).
- [ ] Set DNS CNAME record for `datatable-axios.mahmudunnabikajal.com`.
- [ ] Review and merge `chore/rebrand-datatable-axios` branch in
      datatable-axios-docs.
- [ ] Wire up the docs deploy workflow (inspect niftycli-docs' actual
      deploy mechanism first — not yet confirmed in this plan).
- [ ] Push `v1.0.0` tag only after your explicit approval.
