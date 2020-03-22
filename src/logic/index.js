'use strict';

const fs = require('fs').promises;

const { StillCamera } = require('pi-camera-connect');
const stillCamera = new StillCamera();

const mediaFolder = `${__dirname}`;

const takeImage = require('./camera/take-image')(stillCamera, fs, mediaFolder);

module.exports = {
	takeImage,
};