/**
 * Define the error & exception handlers
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Log from '../middlewares/Log';

class Handler {
	/**
	 * Handles all the not found routes
	 */
	public static notFoundHandler(_express): any {
		_express.use('*', (req, res) => {
			const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

			Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
			return res.json({
				error: 'Page Not Found'
			});
		});

		return _express;
	}

	/**
	 * Handles your api/web routes errors/exception
	 */
	public static clientErrorHandler(err, req, res, next): any {
		Log.error(err.stack);

		return res.status(500).send({error: 'Something went wrong!'});
	}

	/**
	 * Show undermaintenance page incase of errors
	 */
	public static errorHandler(err, req, res, next): any {
		Log.error(err.stack);
		res.status(500);

		if (err.name && err.name === 'UnauthorizedError') {
			const innerMessage = err.inner && err.inner.message ? err.inner.message : undefined;
			return res.json({
				error: [
					'Invalid Token!',
					innerMessage
				]
			});
		}

		return res.json({
			error: err
		});
	}

	/**
	 * Register your error / exception monitoring
	 * tools right here ie. before "next(err)"!
	 */
	public static logErrors(err, req, res, next): any {
		Log.error(err.stack);

		return next(err);
	}
}

export default Handler;
