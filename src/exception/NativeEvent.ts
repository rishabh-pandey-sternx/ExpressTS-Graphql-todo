/**
 * Catch all your node env's native event
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Log from '../middlewares/Log';

class NativeEvent {
	public process (): void {
		// Catch the Process's uncaught-exception
		process.on('uncaughtException', (exception) =>
			Log.error(exception.stack)
		);

		// Catch the Process's warning event
		process.on('warning', (warning) =>
			Log.warn(warning.stack)
		);
	}
}

export default new NativeEvent;
