const { Sequelize } = require('sequelize');

const db = require('../config/db');

const Design = db.define('design', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  experience: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  duration: {
    type: Sequelize.INTEGER,
  },



});

module.exports = Design;
