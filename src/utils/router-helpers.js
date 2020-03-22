'use strict';

/**
 * Generate a response object (successful cases)
 * @param {string} [data] - Data to send in response 
 */
const success = (data) => {
	const res = { status: 'OK' };
	if (data) res.data = data;
	return res;
};

/**
 * Generate a response object (failed cases)
 * @param {string} [error] - Error information to send in response 
 */
const fail = (error) => {
	const res = { status: 'ERROR' };
	if (error) res.error = error;
	return res;
};

/**
 * @constant
 * @type {Number}
 * @default
 */
const statusCodeOk = 200;

/**
 * @constant
 * @type {Number}
 * @default
 */
const statusCodeError = 400;

/**
 * @constant
 * @type {Number}
 * @default
 */
const statusCode404 = 404;

/**
 * Return an Array with all valid endpoints of the API
 * @param  {String} ApiDomain - Base URL of API
 * @param  {Object} routes    - Express router object
 * @return {Array<String>}
 */
const getApiEndpoints = (ApiDomain, routes) => {
	const endpoints = [];
	routes.stack.forEach(function (r){
		if (r.route && r.route.path){
			endpoints.push(`${ApiDomain}${r.route.path}`);
		}
	});
	return endpoints;
};

module.exports = { success, fail, statusCodeOk, statusCodeError, statusCode404, getApiEndpoints };
