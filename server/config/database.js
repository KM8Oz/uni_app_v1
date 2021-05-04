const Sequelize = require('sequelize');
// const path = require('path');

const connection = require('./connection');

const database = new Sequelize(
  connection.production.database,
  connection.production.username,
  connection.production.password, {
    host: connection.production.host,
    dialect: connection.production.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);

module.exports = database;
