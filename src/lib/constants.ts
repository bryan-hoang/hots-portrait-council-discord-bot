import { join } from 'node:path';
import { createCommonJS } from 'mlly';

const { __dirname } = createCommonJS(import.meta.url);

export const rootDir = join(__dirname, '..', '..');
export const srcDir = join(rootDir, 'src');
