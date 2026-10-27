import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  { ignores: ['**/dist/**', '**/coverage/**', '**/.nx/**', '**/.angular/**'] },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': ['error', {
        enforceBuildableLibDependency: true,
        allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
        depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }]
      }],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'guard-for-in': 'error',
      'no-bitwise': 'error',
      'no-new-wrappers': 'error',
      'no-eval': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'radix': 'error',
      'no-restricted-imports': ['error', 'rxjs/Rx']
    }
  }
];
