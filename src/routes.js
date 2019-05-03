const { asyncRouteHandler } = require('./middleware/routeHandlers');
const ClientsController = require('./controllers/ClientsController');

const apiRoutes = (app) => {
	app.route('/api/v1/clients').get(asyncRouteHandler(ClientsController.get));
	app.route('/api/v1/clients').post(asyncRouteHandler(ClientsController.createOne));
	app.route('/api/v1/clients/:clientId').get(asyncRouteHandler(ClientsController.getOne));

	// SQUAD-9-313 endpoint for updating client object.
	app.route('/api/v1/clients/:clientId').put(asyncRouteHandler(ClientsController.updateOne));
	// End code

	app.route('/api/v1/clients/:clientId').delete(asyncRouteHandler(ClientsController.deleteOne));
};

module.exports = {
	apiRoutes,
};
