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

  korname: {
    type: Sequelize.STRING,
  },
  engname: {
    type: Sequelize.STRING,
  },

});

module.exports = SubCategory;
