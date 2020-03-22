'use strict';

const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const cors = require('cors');

const { logger, endLogger } = require('./utils/logger');
const { getListOfIPV4Address } = require('./utils/server-helpers');
const { success, fail, statusCodeOk, statusCode404, getApiEndpoints } = require('./utils/router-helpers');
const { enviromentConfiguration } = require('./appConfig');

/**
 * Init Express server
 */
const initAPI = () => {
	const app = express();

	app.use(cors({ credentials: true }));
	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

	const ApiDomain = '/api-camera';
	const routes = require('./routes');
	app.use(ApiDomain, routes);

	const availableEnpoints = getApiEndpoints(ApiDomain, routes);

	const root = /\//;
	app.use(root, (req, res) => {
		res.status(statusCodeOk).json(success({ salute: 'Welcome to the API camera!', availableEnpoints: availableEnpoints }));
	});

	app.use((req, res) => {
		res.status(statusCode404).json(fail('404 - Not found'));
	});
	app.listen(enviromentConfiguration.port, () => {
		getListOfIPV4Address().forEach(ip => {
			logger.info(`Application running on: http://${ip}:${enviromentConfiguration.port}`);
		});
	});
};

initAPI();

// Managing application shutdown
process.on('SIGINT', () => {
	logger.info('Stopping application...');
	endLogger();
	process.exit();
});
