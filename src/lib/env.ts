import { env as processEnv } from 'std-env';
import * as v from 'valibot';
import { createEnv } from 'valibot-env';

export const env = createEnv({
	schema: {
		private: {
			DISCORD_BOT_TOKEN: v.pipe(v.string(), v.nonEmpty()),
		},
	},
	values: processEnv,
});
