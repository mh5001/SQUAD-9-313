const fs = require('fs');
const swaggerModelValidator = require('swagger-model-validator');
const { ValidationError } = require('../errors');

const swaggerModel = JSON.parse(fs.readFileSync('public/swagger.json'));

swaggerModelValidator(swaggerModel);

// Validates swagger model against body
async function validate(model, body) {
	const validationRes = swaggerModel.validateModel(model, body, true, true);
	if (validationRes.valid) return;

	throw new ValidationError({
		errors: validationRes.GetErrorMessages(),
	});
}

module.exports = { validate, swaggerModel };
