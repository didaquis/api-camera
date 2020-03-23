'use strict';

const logic = require('../../logic');
const { success, fail, statusCodeOk, statusCodeError } = require('../../utils/router-helpers');

/**
 * Get all media route handler
 * @async
 * @param  {Object} req - Request (Express)
 * @param  {Object} res - Response (Express)
 * @return {Object}     - An Express HTTP response with status code and JSON data
 */
module.exports = (req, res) => {
	try {
		const result = logic.getAllImages();
		res.status(statusCodeOk).json(success(result));
	} catch (e) {
		res.status(statusCodeError).json(fail(e));
	}
};
