'use strict';

/**
 * Take image logic
 * @return {String}
 */
module.exports = async (stillCamera, fs, mediaFolder) => {

	const image = await stillCamera.takeImage();

	await fs.writeFile(`${mediaFolder}/still-image.jpg`, image);
	

	return 'shoot';
};
