const db = require('../helpers/postgres');
const queries = require('./sql/queries');

class ClientModel {
	// Returns a list of clients
	static async getList(search = {}) {
		return db.any(queries.clients.get, search);
	}

	// Returns Client by ID
	static async getOne(clientId) {
		return db.one(queries.clients.getOne, { clientId });
	}

	// Create client
	static async createOne(clientData) {
		return db.one(queries.clients.createOne, clientData);
	}

	// Delete Client by id
	static async deleteById(clientId) {
		return db.none(queries.clients.deleteOne, { clientId });
	}
}

module.exports = ClientModel;
