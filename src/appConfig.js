'use strict';

require('dotenv').config();

/* Home doc */
/**
 * @file The configuration of the application environment variables
 * @see module:appConfig
 */

/* Module doc */
/**
 * The configuration of the application environment variables
 * @module appConfig
 */

/**
 * Default port server
 * @type {Number}
 */
const serverPortByDefault = 14159;

/**
 * Application environment variables
 * @type {object}
 */
const enviromentConfiguration = Object.freeze({
	port: Number(process.env.PORT) || serverPortByDefault
});


module.exports = { enviromentConfiguration };
