'use strict';

/**
 * Generate a random name to store media content. The result is formed by two values separated by a hyphen. The first of the values is a timestamp. The second value is an unique random token.
 * 
 * @return {String} Ex: '1584906102786-e78bea79f1c5ea1f80f6'
 */
const nameOfContentMedia = () => {
	const numberOfBytes = 10;
	const randomValue = require('crypto').randomBytes(numberOfBytes).toString('hex');
	const dateTime = new Date().getTime();

	return `${dateTime}-${randomValue}`;
};

module.exports = { nameOfContentMedia };
