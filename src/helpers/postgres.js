const config = require('config').get('db');
const pgp = require('pg-promise');

// Exports pg-promise with connection-string
module.exports = pgp()(config.connString);