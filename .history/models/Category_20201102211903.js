const { Sequelize } = require('sequelize');

const db = require('../config/db');

const Category = db.define('category', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  koreanname: {
    type: Sequelize.STRING,
  },
  englishname: {
    type: Sequelize.STRING,
  },

});

module.exports = Category;
