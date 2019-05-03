const { NotFoundError } = require('../errors');

// Catch Controller errors and send response
const routeErrorHandler = async (err, req, res, next) => {
	if (err && !res.headersSent) {
		const {
			message = 'Unhandled error', name, data, status = 500, stack,
		} = err;

		if (req.logger && req.logger.error) {
			req.logger.error(`Request error: ${status}`, { msg: message, stack, name });
		}

		res.status(status).send({ message, data, status });
		return;
	}

	next(err);
};

// Fallback route for undefined routes
const routeNotFoundHandler = async (req, res, next) => {
	throw new NotFoundError();
};

module.exports = {
	routeErrorHandler,
	routeNotFoundHandler,
};