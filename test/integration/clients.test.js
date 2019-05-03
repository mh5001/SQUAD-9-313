const chai = require('chai');

const chaiHttp = require('chai-http');
const rp = require('request-promise-native');
const config = require('../helpers/config')

const { assert, expect } = chai;

chai.use(chaiHttp);

const api = chai.request(config.apiPath);

describe('/api/v1/clients', () => {

});
