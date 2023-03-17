# Project Setup

- [Project Setup](#project-setup)
  - [Initial setup with create-react-app](#initial-setup-with-create-react-app)
  - [Add ESlint, Prettier and Husky](#add-eslint-prettier-and-husky)
    - [ESlint](#eslint)
    - [Prettier](#prettier)
    - [Integrating Prettier with ESLint](#integrating-prettier-with-eslint)
    - [Configure Scripts](#configure-scripts)
    - [Husky](#husky)
  - [Setup Jest and React Testing Library](#setup-jest-and-react-testing-library)
    - [Integrate Jest with ESLint](#integrate-jest-with-eslint)

## Initial setup with create-react-app

[Alternative without create-react-app](https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl)

create-react-app already comes with a [template](https://create-react-app.dev/docs/adding-typescript/) to integrate TypeScript, so I used that

```bash
npx create-react-app my-app --template typescript
```

## Add ESlint, Prettier and Husky

[Installation Guide](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
[Another Config](https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1)

### ESlint

```bash
npm install eslint --save-dev
npm init @eslint/config # select options according to needs
```

### Prettier

```bash
npm install --save-dev --save-exact prettier
```

Create file `.prettierrc.json` add this content

```json
{
  "tabWidth": 2,
  "useTabs": true,
  "printWidth": 80,
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "endOfLine": "lf"
}
```

### Integrating Prettier with ESLint

```bash
npm install --save-dev eslint-config-prettier
```

Extend prettier on ESlint file

```json
...
// Add prettier to extends list
"extends": [ "plugin:react/recommended", "standard-with-typescript", "prettier"],
...
```

### Configure Scripts

```json
"scripts": {
  ... // other scripts you have
  "lint": "eslint . --fix --max-warnings=0",
  "format": "prettier . --write"
},
```

### Husky

```bash
npx mrm@2 lint-staged
```

## Setup Jest and React Testing Library

[Guide](https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0)
[Guide for ts-jest](https://swizec.com/blog/how-to-configure-jest-with-typescript/)

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom # Install React testing library dependencies
npm install --save-dev jest jest-environment-jsdom # Install Jest dependencies
```

Make sure that `jest-environment-jsdom` version is the same as `jest` in `package.json`

```json
// package.json
{
  ...
  "jest": "^29.5.0",
  "jest-environment-jsdom": "^29.5.0",
  ...
}
```

Create file `jest.config.js` on root and add this:

```js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
```

Create file `jest.setup.js` and add:

```js
import '@testing-library/jest-dom'
```

### Integrate Jest with ESLint

```bash
npm install --save-dev eslint-plugin-jest
```

- in the `eslintrc.json` add `"jest"` in the plugins array
- in the `eslintrc.json` add `"plugin:jest/recommended"`, in the extends to use recommended jest syntax
- in the `eslintrc.json` in the env entry add `"jest/globals"`: true to enable jest in our eslint environment
