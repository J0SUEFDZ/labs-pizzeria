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
  - [Setup Tailwind](#setup-tailwind)
  - [React Router v6 Configuration](#react-router-v6-configuration)
  - [Setup Firebase](#setup-firebase)

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

## Setup Tailwind

[Guide](https://dev.to/ethand91/creating-a-react-app-with-typescript-tailwind-support-18b8)
[Another Guide](https://dev.to/ivadyhabimana/setup-tailwind-css-in-a-react-project-configured-from-scratch-a-step-by-step-guide-2jc8)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Next open up the created "tailwind.config.js" file and add the following to "content":

```js
content: [
  './src/**/*.{js,jsx,ts,tsx}',
],
```

Next we need to add the Tailwind directives to the "src/index.css" file, add the following to the top of the file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## React Router v6 Configuration

[React Router](https://www.freecodecamp.org/news/how-to-use-react-router-version-6)

```bash
npm install react-router-dom@6
```

In `App.tsx`, replace `<React.StrictMode>` with `<BrowserRouter>`

To create routes, use:

```js
<Routes>
  <Route path="/" element={ <Home/> } />
  <Route path="about" element={ <About/> } />
  <Route path="contact" element={ <Contact/> } />
</Routes>
```

Use those links with:

```js
<div>
  <h1>This is the home page</h1>
  <Link to="about">Click to view our about page</Link>
  <Link to="contact">Click to view our contact page</Link>
</div>
```

## Setup Firebase

[Guide](https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/)
[Firestore](https://firebase.google.com/docs/firestore)

```bash
npm install firebase
```

Create `firebase.config.js` with these contents:

```js
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXX',
  databaseURL: 'XXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXX',
  appId: 'XXXXXXXXXXXXXX',
  measurementId: 'XXXXXXXXXXXXXX',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
```
