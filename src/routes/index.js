'use strict';

const { Router } = require('express');
const routes = Router();

/* Handlers */
const camera = require('./camera');


/* Routes */
routes.get('/take-image', camera.takeImage);

module.exports = routes;
