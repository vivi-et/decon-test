const { Sequelize } = require('sequelize');

const db = require('../config/db');

const SubCategory = db.define('subcategory', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
  },

});

module.exports = SubCategory;
