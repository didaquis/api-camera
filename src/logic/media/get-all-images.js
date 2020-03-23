'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Take image logic
 * @return {Array}
 */
module.exports = () => {
	try {
		const files = [];
		const mediaFolder = path.join(process.cwd(), 'src/public/media/');

		const isImage = /.(jpg|jpeg|png|gif)$/i;
		fs.readdirSync(mediaFolder).forEach(file => {
			if (file.match(isImage)) {
				files.push(file);
			}
		});

		return files;
	} catch (e) {
		return e;
	}
};
