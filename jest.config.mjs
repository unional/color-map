export default {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      isolatedModules: true,
      useESM: true,
    },
  },
  collectCoverageFrom: [
    '<rootDir>/ts/**/*.[jt]s'
  ],
  moduleNameMapper: {
    // remove the phantom `.js` extension
    '^(\\.{1,2}/.*)\\.js$': '$1',
    // If dependency doing `import ... from '#<pkg>'.
    // e.g. `chalk` has this: `import ... form '#ansi-styles'`
    '#(.*)': '<rootDir>/node_modules/$1'
  },
  roots: [
    '<rootDir>/ts',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(spec|test|integrate|accept|system|unit).[jt]s?(x)',
  ],
  // transformIgnorePatterns: [
  //   // Need to MANUALLY identify each ESM package, one by one
  //   'node_modules/(?!(@unional\\fixture|chalk)/)'
  // ],
  transform: {
    // use `babel-jest` to transpile js files
    // can probably improve this by just doing `.js|mjs` in the `node_modules` folder.
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-suspend',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    [
      'jest-watch-toggle-config', { 'setting': 'verbose' },
    ],
    [
      'jest-watch-toggle-config', { 'setting': 'collectCoverage' },
    ],
  ],
}
