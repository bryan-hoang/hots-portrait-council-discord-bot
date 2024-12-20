import {
	ApplicationCommandRegistries,
	RegisterBehavior,
} from '@sapphire/framework';
import '@sapphire/plugin-logger/register';
import { join } from 'node:path';
import { setup } from '@skyra/env-utilities';
import { srcDir } from './constants.js';

// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

// Set default behavior to bulk overwrite
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(
	RegisterBehavior.BulkOverwrite,
);

// Read env var
setup({ path: join(srcDir, '.env') });
