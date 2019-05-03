const { asyncRouteHandler } = require('./middleware/routeHandlers');
const ClientsController = require('./controllers/ClientsController');

const apiRoutes = (app) => {
	app.route('/api/v1/clients').get(asyncRouteHandler(ClientsController.get));
	app.route('/api/v1/clients').post(asyncRouteHandler(ClientsController.createOne));

	app.route('/api/v1/clients/:clientId').get(asyncRouteHandler(ClientsController.getOne));
	app.route('/api/v1/clients/:clientId').delete(asyncRouteHandler(ClientsController.deleteOne));
};

module.exports = {
	apiRoutes,
};
