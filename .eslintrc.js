module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			plugins: ['@typescript-eslint', 'prettier'],
			extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
			parser: '@typescript-eslint/parser',
		},
	],
	ignorePatterns: ['**/__references/**', 'dist', 'build'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-empty-interface': 0,
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
				printWidth: 200,
				tabWidth: 4,
				useTabs: true,
				trailingComma: 'es5',
			},
		],
	},
}
