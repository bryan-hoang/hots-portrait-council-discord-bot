import {
	ApplicationCommandRegistries,
	RegisterBehavior,
} from '@sapphire/framework';
import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-scheduled-tasks/register';

// Unless explicitly defined, set NODE_ENV as development:
process.env.NODE_ENV ??= 'development';

// Set default behavior to bulk overwrite
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(
	RegisterBehavior.BulkOverwrite,
);
