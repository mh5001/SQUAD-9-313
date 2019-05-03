class RequestError extends Error {
	constructor(data, message, statusCode = 400) {
		super();

		this.name = 'RequestError';
		this.message = message || 'System-level error occurred';
		this.data = data;
		this.status = statusCode;
	}
}

class NotFoundError extends Error {
	constructor(data, message, statusCode = 404) {
		super();

		this.name = 'NotFoundError';
		this.message = message || 'Resource not found';
		this.data = data;
		this.status = statusCode;
	}
}

class ValidationError extends Error {
	constructor(data, message, statusCode = 400) {
		super();
		this.name = 'ValidationError';
		this.message = message || 'Error when validating data';
		this.data = data;
		this.status = statusCode;
	}
}

module.exports = {
	RequestError,
	ValidationError,
	NotFoundError,
};
