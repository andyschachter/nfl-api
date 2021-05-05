const Sequelize = require('sequelize');
const teamsModel = require('./teams');

const connection = new Sequelize('nfl', 'teamsUser', 'password123',
  { host: 'localhost', dialect: 'mysql' })

const teams = teamsModel(connection, Sequelize)

module.exports = { teams }
