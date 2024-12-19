/**
 * @type {import('lint-staged').Config}
 */
const config = {
	'*': [
		() => 'pnpm run check --no-errors-on-unmatched --files-ignore-unknown=true',
	],
	'*.{ts,json,mjs}': [() => 'pnpm run knip'],
};

export default config;
