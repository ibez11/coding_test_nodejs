'use strict';

var config = require('../config/config')
var Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.development
);