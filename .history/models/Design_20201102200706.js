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
  projectname: {
    type: Sequelize.STRING,
  },
  projectdesc: {
    type: Sequelize.STRING,
  },
  files1: {
    type: Sequelize.JSON,
  },
  files2: {
    type: Sequelize.JSON,
  },
  links: {
    type: Sequelize.JSON,
  },
  resulttype: {
    type: Sequelize.STRING,
  },
  resultunit: {
    type: Sequelize.STRING,
  },
  width: {
    type: Sequelize.INTEGER,
  },
  height: {
    type: Sequelize.INTEGER,
  },
  tools: {
    type: Sequelize.JSON,
  },
  requests: {
    type: Sequelize.JSON,
  },
  designerexperience: {
    type: Sequelize.INTEGER,
  },
  uuuuuuu: {
    type: Sequelize.JSON,
  },
  uuuuuuu: {
    type: Sequelize.JSON,
  },
  uuuuuuu: {
    type: Sequelize.JSON,
  },
  uuuuuuu: {
    type: Sequelize.JSON,
  },

});

module.exports = Design;
