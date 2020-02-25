'use strict';
var Sequelize = require('sequelize');

var db = require('../services/Db');

var modelDefinition = {
  email_id: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
  }
};

// 2: The model options.
var modelOptions = {};

var UsersModel = db.define('users', modelDefinition, modelOptions);

module.exports = UsersModel;