const asyncRouteHandler = fn => async (req, res, next) => {
	try {
		const result = await fn(req, res, next);
		// Send returned data from controller
		if (result !== undefined) {
			res.json(result);
		}
	} catch (err) {
		// eslint-disable-next-line callback-return
		next(err);
	}
};

module.exports = {
	asyncRouteHandler,
};
