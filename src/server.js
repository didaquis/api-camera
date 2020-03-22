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

	app.use('/', express.static(__dirname + '/public/media')); /* It allows serve the media files on the root of server */

	const ApiDomain = '/api-camera';
	const routes = require('./routes');
	app.use(ApiDomain, routes);

	const availableEnpoints = getApiEndpoints(ApiDomain, routes);

	const root = /\//;
	app.use(root, (req, res) => {
		res.status(statusCodeOk).json(success({ salute: 'Welcome to the API camera!', availableEnpoints: availableEnpoints, instructions: 'When calling the endpoint to take a photo, the server will give you the photo identifier. You can make a request to the server to obtain the file: http[s]://${server-ip}:${server-port}/${photo-id}' }));
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
