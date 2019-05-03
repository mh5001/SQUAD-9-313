const logger = require('../helpers/logger');

const requestLogger = (req, res, next) => {
	req.logger = logger.child({
		url: req.url,
	});

	next();
};

module.exports = requestLogger;