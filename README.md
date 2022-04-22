# vitest-demo <!-- omit in toc -->

- [Setup](#setup)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Customize configuration](#customize-configuration)
- [Project Setup](#project-setup)
  - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
  - [Compile and Minify for Production](#compile-and-minify-for-production)
  - [Run Unit Tests with Vitest](#run-unit-tests-with-vitest)

## Setup

- Initialize new vue project

```shell
npm init vue@latest
```

- Select the following options
  - "Add TypeScript?" => No
  - "Add JSX Support?" => No
  - "Add Vue Router for Single Page Application Development?" => No
  - "Add Pinia for state management?" => No
  - "Add Vitest for Unit Testing?" => **Yes**
  - "Add Cypress for End-to-End testing?" => No
  - "Add ESLint for code quality?" => No

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
