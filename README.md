# React Intro

React Intro Application

## Stack

- React
- Babel
- Webpack

### Install

Ignored Package:

Mode Development

```
npm i -D @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server
npm i -D style-loader css-loader
npm i -D file-loader
npm i -D @babel/plugin-proposal-class-properties
```

Mode Dependencies

```
npm i -S react react-dom
```

Instructions:

> babel.config.js

```
module.exports = {
  presets: [
    "@babel/preset-env", // Transformar as funcionalidades do JS para o browser (arrow functions, class, import, export)
    "@babel/preset-react", // Transformar do React (JSX)
  ],
}
```
