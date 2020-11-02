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
  image_icon: {
    type: Sequelize.STRING,
  },

  korname: {
    type: Sequelize.STRING,
  },
  engname: {
    type: Sequelize.STRING,
  },

});

module.exports = Category;
