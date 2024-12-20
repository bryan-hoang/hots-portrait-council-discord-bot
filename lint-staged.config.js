/**
 * @type {import('lint-staged').Config}
 */
const config = {
	'*': [
		() =>
			'pnpm run check --no-errors-on-unmatched --files-ignore-unknown=true --fix --unsafe',
	],
	'*.{ts,json,js}': [() => 'pnpm run check:knip'],
	'*.{ts,json}': [() => 'pnpm run check:types'],
};

export default config;
