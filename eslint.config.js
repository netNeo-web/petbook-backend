import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default [
  {
    files: ['**/*.ts', '**/*.js'],
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      'package.json',
      'package-lock.json',
      'jest.config.js',
      'eslint.config.js',
      '.prettierrc',
      'commitlint.config.ts',
    ],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // Reglas recomendadas de ESLint
      'no-empty': 'error',
      eqeqeq: ['error', 'always'],

      // Reglas de @typescript-eslint
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',

      // Reglas de Prettier
      'prettier/prettier': 'error',
    },
  },
  // Configuración Prettier para desactivar reglas que pueden entrar en conflicto
  {
    rules: {
      ...require('eslint-config-prettier').rules,
    },
  },
];
