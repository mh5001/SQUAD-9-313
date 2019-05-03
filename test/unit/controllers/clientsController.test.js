const chai = require('chai');
const td = require('testdouble');

const { expect } = chai;

describe('clientsController', () => {	
	afterEach = () =>  {
		td.reset()
	}

	it('#get should return clients list', async () => {
		const clientsList = [
			{ id: 'someid' }
		]

		const clientModel = td.replace('../../../src/models/ClientModel');
		td.when(clientModel.getList()).thenResolve(clientsList);
	
		const ClientsController = require('../../../src/controllers/ClientsController');

		const getResult = await ClientsController.get();
		
		expect(getResult)
			.to.be.an('array')
			.that.equals(clientsList)
	});

	it ('#getOne should return one client', async () => {
		const clientModel = td.replace('../../../src/models/ClientModel');
		td.when(clientModel.getOne('some-client-id')).thenResolve({ id: 'some-client-id' });

		const ClientsController = require('../../../src/controllers/ClientsController');
		const getOneResult = await ClientsController.getOne({ params: { clientId: 'some-client-id' }});

		expect(getOneResult)
			.to.be.an('object')
			.and.has.property('id')
			.that.equals('some-client-id')
	});

	it ('#createOne should create one client', async () => {
		const req = {
			body: {
				phoneNumber: '+4407777712333',
				firstname: 'John',
				surname: 'Doe',
			}
		}
		
		const validator = td.replace('../../../src/helpers/validator');
		td.when(validator.validate(td.matchers.isA(String), req.body))
			.thenReturn({ valid: true });

		const clientModel = td.replace('../../../src/models/ClientModel');
		td.when(clientModel.createOne(req.body)).thenResolve({ client: 'client-created' });

		const ClientsController = require('../../../src/controllers/ClientsController');
		const createOneResult = await ClientsController.createOne(req);


		expect(createOneResult)
			.to.be.an('object')
			.and.has.property('client')
			.that.is.an('string')
	});

	it ('#deleteOne should return success', async () => {
		const clientModel = td.replace('../../../src/models/ClientModel');
		td.when(clientModel.deleteById('some-client-id')).thenResolve();
		
		const ClientsController = require('../../../src/controllers/ClientsController');
		const deleteOneResult = await ClientsController.deleteOne({ params: { clientId: 'some-client-id' }});

		expect(deleteOneResult)
			.to.be.an('object')
			.and.has.property('message')
			.that.is.an('string')
			.that.equals('success')
	});
});