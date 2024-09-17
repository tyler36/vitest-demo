# Vitest <!-- omit in toc -->

- [Overview](#overview)
  - [Vitest vs. Jest](#vitest-vs-jest)
- [Setup](#setup)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
  - [Coverage](#coverage)
  - [GitHub action](#github-action)

## Overview

[Vitest](https://vitest.dev/guide/) is JavaScript testing framework, similar to [Jest](https://jestjs.io/).
It is a next-generation testing framework, based on Vite, and emphasizes speed.

- Supports TypeScript
- (mostly) compatible with Jest API

> [!WARNING]
> [Vite CJS Node API deprecated](https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated)

### Vitest vs. Jest

- if your project uses Vite, Vitest can re-use the same pipeline
- native TypeScript support
- "compatibility with most of the Jest API and ecosystem libraries"

@see <https://vitest.dev/guide/comparisons.html#jest>

## Setup

```shell
npm install -D vitest
```

## Getting started

1. Create example file to test, `sum.js`.

    ```js
    // src/sum.js
    export function sum(a, b) {
      return a + b
    }
    ```

1. Create `tests/sum.test.js` file.

    ```js
    import { test, expect } from 'vitest'
    import { sum } from '../src/sum'

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
    ```

## Usage

- To run all tests in "watch" mode (aka `vitest dev`)

    ```shell
    vitest
    ```

- To run in `watch` mode

    ```shell
    vitest run
    ```

## Configuration

### Coverage

Vitest supports Native code coverage via

- [v8](https://v8.dev/blog/javascript-code-coverage) (default) and
- instrumented code coverage via [istanbul](https://istanbul.js.org/).

Update `vitest.config.ts` to specify `instanbul`, if required.
Vite will nudge you to install the coverage package if it can not find it.

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
  },
})
```

To run with coverage:

```json
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage --coverage.reportOnFailure"
  }
}
```

Use `--coverage.reportOnFailure` or the configuration equivalent to generate coverage even when tests fail.

### GitHub action

Vitest includes a GitHub action reporter.
It is automatically enabled in the report group `default` when `process.env.GITHUB_ACTIONS === 'true'`.

If you override `test.reports`, you can manually enable it as follows:

```js
process.env.GITHUB_ACTIONS === 'true'export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['dot'],
  },
}
```
