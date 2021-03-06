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

	// Delete Client by ID
	static async deleteById(clientId) {
		return db.none(queries.clients.deleteOne, { clientId });
	}

	// Update Client by ID
	static async updateById(clientId, clientData) {
		clientData['clientId'] = clientId;
		// Make sure both firstname and surname exist
		const previousData = await db.one(queries.clients.getOne, { clientId });
		
		if(!('firstname' in clientData)) clientData['firstname'] = previousData['firstname'];
		if(!('surname' in clientData)) clientData['surname'] = previousData['surname'];

		return db.none(queries.clients.updateOne, clientData);
	}
}

module.exports = ClientModel;
