import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [
		{
			builder: 'mkdist',
			input: './src',
			outDir: './dist',
			format: 'cjs',
			ext: 'js',
			esbuild: {
				tsconfigRaw: {
					compilerOptions: {
						experimentalDecorators: true,
					},
				},
			},
		},
	],
});
