'use strict';

const { Router } = require('express');
const routes = Router();

/* Handlers */
const camera = require('./camera');
const media = require('./media');


/* Routes */
routes.get('/take-image', camera.takeImage);
routes.get('/media', media.getAllImages);

module.exports = routes;
