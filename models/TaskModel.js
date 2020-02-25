'use strict';
var Sequelize = require('sequelize');

var db = require('../services/Db');

var modelDefinition = {
    email_id: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
};

// 2: The model options.
var modelOptions = {};

var UsersModel = db.define('tasks', modelDefinition, modelOptions);

module.exports = UsersModel;