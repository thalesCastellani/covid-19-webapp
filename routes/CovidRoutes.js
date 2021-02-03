const express = require('express');
const routes = express.Router({ mergeParams: true });
const CovidController = require('../controllers/CovidController');

routes.get('/statesCurrent', CovidController.getStatesCurrent);

module.exports = routes;