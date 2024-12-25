import { ScheduledTask } from '@sapphire/plugin-scheduled-tasks';

export class PortraitReminderTask extends ScheduledTask {
	public constructor(
		context: ScheduledTask.LoaderContext,
		options: ScheduledTask.Options,
	) {
		super(context, {
			...options,
			pattern: '0 * * * *',
		});
	}

	public async run() {
		this.container.logger.info('I run every hour at *:00');
	}
}

declare module '@sapphire/plugin-scheduled-tasks' {
	interface ScheduledTasks {
		pattern: never;
	}
}
