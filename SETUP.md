# Project Setup

## Initial setup with create-react-app

create-react-app already comes with a [template](https://create-react-app.dev/docs/adding-typescript/) to integrate TypeScript, so I used that

```bash
npx create-react-app my-app --template typescript
```

## Add ESlint, Prettier and Husky

[Installation Guide](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)

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
