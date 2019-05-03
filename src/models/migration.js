const { QueryFile } = require('pg-promise');
const path = require('path');
const db = require('../helpers/postgres');

const initialSQL = new QueryFile(path.join(__dirname, './sql/migration/initial.sql'));

function migration(logger) {
	logger.info('Running DB migration');
	return db.none(initialSQL).catch((err) => {
		logger.error('DB migration failed', { err });
	});
}

module.exports = migration;