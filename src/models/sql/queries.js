const { QueryFile } = require('pg-promise');
const path = require('path');

const clients = {
	get: new QueryFile(path.join(__dirname, './clients/get.sql')),
	getOne: new QueryFile(path.join(__dirname, './clients/getOne.sql')),
	deleteOne: new QueryFile(path.join(__dirname, './clients/deleteOne.sql')),
	createOne: new QueryFile(path.join(__dirname, './clients/createOne.sql')),

	// Updating a client in the DB
	updateOne: new QueryFile(path.join(__dirname, './clients/updateOne.sql')),
};

const queries = {
	clients,
};

module.exports = queries;