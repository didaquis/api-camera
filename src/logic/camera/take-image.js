'use strict';

const fs = require('fs');
const path = require('path');

const { StillCamera } = require('pi-camera-connect');

const { nameOfContentMedia } = require('../../utils/logic-helpers');

/**
 * Take image logic
 * @async
 * @return {String}
 */
module.exports = async () => {
	try {
		const stillCamera = new StillCamera();

		const nameOfPicture = `${nameOfContentMedia()}.jpg`;
		const mediaDestination = path.join(process.cwd(), `src/public/media/${nameOfPicture}`);

		const image = await stillCamera.takeImage();

		fs.writeFileSync(mediaDestination, image);

		return `Your picture is: ${nameOfPicture}`;
	} catch (e) {
		return e;
	}
};
