# Qantas Hotel

Qantas Group Accommodation Front-End Code Test

```text
User Story

As a user of Qantas Hotels I would like to see a list of hotels that can be sorted by price.
```

## Live Demo

Demo Portal available at [Qantas Hotel](https://qantas.arthurku.com/index.html).

This demo portal was bootstrapped with [ViteJs](https://vitejs.dev/) with the React + TS template `npm init vite@latest --template react-ts`.

## Quick Start

On the project root folder, run following:

```bash
# install dependencies
npm i

# start development server
npm start
```

or preferably use a much faster runner [Bun](https://bun.sh/)

```bash
# start development server
bun start
```

and go to [`http://127.0.0.1:5173/`](http://127.0.0.1:5173/).

## Coding style

### Typescript

Strong-typed all properties, methods, and returns when possible

### SCSS

Class naming to follow [BEM - Block Element Modifier](http://getbem.com/)

### Accessibility

Use `tabindex` to enable keyboard focus for narrative or screen reader navigation by keyboard.

## Build

```zsh
npm run build
```

or preferably use a much faster runner [Bun](https://bun.sh/)

```bash
bun run build
```

Builds the app for production to the build folder.

## Testing

Run `npm test` or `npm run test` to start all unit tests

## Tech Decisions Log

- [Bun](https://bun.sh/) is the `npm` alike, but much faster on build and rebuild

- [Vite](https://vitejs.dev/guide/why.html) a `webpack` alike which CRA is using, provide faster rebuild.

- [SCSS](https://sass-lang.com/) CSS extension which provides more rich-features e.g. variables, nesting, modules and many more.

- [Semantic-UI](https://react.semantic-ui.com/) provides fast prototyping build, simple and easy to use. It has all of the components needed to build this project.

- [Jest](https://jestjs.io/) & [RTL](https://testing-library.com/docs/) provides a minimum required for a simple unit testing and quick DOM testing of the components.
