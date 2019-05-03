const config = require('config').get('logger');
const { createLogger, format, transports } = require('winston');

// Transport configuration
const fileTransportConfig = config.get('file');
const consoleTransportConfig = config.get('console');

// Create logger instance
const logger = createLogger({
	format: format.json(),
	exitOnError: false,
});

// Create Console transport
if (consoleTransportConfig.get('enabled')) {
	logger.add(new transports.Console({
		level: consoleTransportConfig.get('level'),
		handleExceptions: true,
		humanReadableUnhandledException: true,
		format: format.combine(
			format.timestamp(),
			format.colorize(),
			format.simple(),
		),
	}));
}

// Create File transport
if (fileTransportConfig.get('enabled')) {
	logger.add(new transports.File({
		filename: './logs/error.log',
		level: fileTransportConfig.get('level'),
		handleExceptions: true,
	}));
}

module.exports = logger;