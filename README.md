# THEMIS
#### Tool for Harmonizing Education and Mastery of Instructions and Strategies
##### Named after the goddess of law and order

## Description
- THEMIS is a platform to help create and view flashcards for board game rules
- The intent behind THEMIS was to help me with Game Mastering board games for customers at a board game cafe
    - Help me pick out board games based on criteria like play time, number of people, type of board game, level of strategy
    - Help me revise the rules of a board game at a glance to ensure speedy service to the customer


## Tech Jargon

### Stack
#### Frontend
(tool -> reason for usage)
- React.js -> Library to help with component based page creation
- Redux Toolkit -> State management
- Tailwind CSS -> Styling
- Look for libraries for the following
    - Form filling (flashcard creation)

#### Backend
- API Type - REST
- API - Express


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },                                
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
