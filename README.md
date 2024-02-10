# Expense Tracker Application

Simple expense tracker that utilizes a local database

## Installation / Building

Within terminal, select the target directory where the cloned application files will be created

Below is an example directory for a windows user desktop.

```bash
cd %USERPROFILE%/desktop
```

Clone the repository.

```bash
git clone https://github.com/EivindDelFierro/Expense-Tracker.git
```

This will create an Expense-Tracker folder within your target directory containing all the relevant application files.

Enter the repository folder.

```bash
cd Expense-Tracker
```

Install application relevant dependencies.

```bash
npm install
```

## Building

To use the developer build with the use of webPack devServer with hot module reloading turned on, you may run the following script which produces an output with minimal optimizations:

```bash
npm run dev
```

This will also automatically launch the application.

To create the release build with optimizations such as minification and uglification, run the following script:

```bash
npm run build
```

This will create a '/dist' folder within the application that contains an HTML file (index.html), the bundled/minified/uglified JavaScript filed (bundle.js), and any assets the application may use.

## Usage

After building the application, located the '/dist' folder within the cloned folder.
The application may be run by opening 'index.html'

## Notes

1. Technologies Utilized:

```
JavaScript, React, Webpack, HTML, CSS
```

2. Dependency explanation:

```
Babel (and related libraries): Allows simplified transpilation of ES6 to ES5 to facilitate backwards compatibility with older browsers such as IE11.

ESLint: Automates development opinions as documented in configuration file, improving consistency and maintainability.
- eslint-config-prettier: Disables rules that conflict with prettier and is faster than eslint-plugin-prettier, makes prettier act as the linter, which is slower
- eslint-config-react-app: Has appropriate rule sets for react development, including support for hooks

html-loader: Utilized to conver html links into strings.

html-webpack-plugin: Simplified HTML file creation during webpack build compilation.

Prettier: Automate code formatting, improving code consistency

react: Modularizes front-end development by allowing reusable component functions.

react-dom: Provides methods to allow rendering of React applications

terser-webpack-plugin: Enables built in minification and uglification optimization options in Webpack.

Webpack (and related libraries): Allows modular development of application with transpilation to JavaScript through the use of loaders.

webpack-merge: Facilitated modular webpack configurations depending on environment.
```
