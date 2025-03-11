[![Testing](https://github.com/tyler36/vitest-demo/actions/workflows/vitest.yml/badge.svg)](https://github.com/tyler36/vitest-demo/actions/workflows/vitest.yml)

# Vitest <!-- omit in toc -->

- [Overview](#overview)
  - [Vitest vs. Jest](#vitest-vs-jest)
- [Setup](#setup)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
  - [Coverage](#coverage)
  - [Snapshots](#snapshots)
    - [Property matchers](#property-matchers)
  - [Mocking](#mocking)
  - [Checking errors](#checking-errors)
  - [GitHub Action](#github-action)

## Overview

[Vitest](https://vitest.dev/guide/) is JavaScript testing framework, an alternative to [Jest](https://jestjs.io/).
Vitest a next-generation testing framework, based on Vite, and emphasizes speed.

- Supports TypeScript
- Compatible with Jest API

> [!WARNING]
> [Vite CJS Node API deprecated](https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated)

### Vitest vs. Jest

- If your project uses Vite, Vitest can re-use the same pipeline
- Native TypeScript support
- "compatibility with most of the Jest API and ecosystem libraries"

@see <https://vitest.dev/guide/comparisons.html#Jest>

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
- Instrumented code coverage via [istanbul](https://istanbul.js.org/).

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

Use `--coverage.reportOnFailure` or set in configuration to generate coverage even when tests fail.

### Snapshots

Snapshots allow you to capture information in a file and match against it.
This is helpful to check that data does not change, while also recording expected behavior.

  ```js
  expect(data).toMatchSnapshot()
  ```

On first run, Vitest will save the data to a file, later runs will attempt to match against it.

Vitest uses a `snap` format which may not be desirable.
Use `.toMatchSnapshotFile()` to specify a filename.

Use `vitest -u` to update snapshots.

#### Property matchers

To match against dynamic data-types (`id`, `createdAt`), use property matches.

```js
it('will fail every time', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot();
});

// Snapshot
exports[`will fail every time 1`] = `
{
  "createdAt": 2018-05-19T23:36:09.816Z,
  "id": 3,
  "name": "LeBron James",
}
`;
```

Values passed to `matchSnapshot()` will match against the dynamic `Any` type (if correct).
Other values must be an exact match.

```js
it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});

// Snapshot
exports[`will check the matchers and pass 1`] = `
{
  "createdAt": Any<Date>,
  "id": Any<Number>,
  "name": "LeBron James",
}
`;
```

### Mocking

Use [`vitest-fetch-mock`](https://github.com/IanVS/vitest-fetch-mock) to mock fetch requests.

### Checking errors

```js
function getFruitStock(type) {
  if (type === 'pineapples'){
    throw new Error('Pineapples are not in stock')
  }
  // Do some other stuff
}

test('throws on pineapples', () => {
  // You can also use regex. For example: (/stock/)
  expect(() => getFruitStock('pineapples')).toThrowError('stock')

  // Test the exact error message
  expect(() => getFruitStock('pineapples')).toThrowError(
    /^Pineapples are not in stock$/,
  )
})
```

### GitHub Action

Vitest includes a GitHub Action reporter.
Vitest automatically enables GitHub reporter in the report group `default` when `process.env.GITHUB_ACTIONS === 'true'`.

If you override `test.reports`, manually enable it as follows:

```js
process.env.GITHUB_ACTIONS === 'true'export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['dot'],
  },
}
```
