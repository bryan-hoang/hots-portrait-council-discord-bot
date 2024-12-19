import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	entry: ['src/index.ts', 'src/{commands,lib}/*.ts', 'src/listeners/**/*.ts'],
};

export default config;
