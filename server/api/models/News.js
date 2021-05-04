const Sequelize = require('sequelize');
// const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

// const hooks = {
//   beforeCreate(user) {
//     user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
//   },
// };

const tableName = 'news';

const News = sequelize.define('News', {
  cover: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.STRING,
  },
}, { tableName });

// eslint-disable-next-line
// User.prototype.toJSON = function () {
//   const values = Object.assign({}, this.get());

//   delete values.password;

//   return values;
// };

module.exports = News;
