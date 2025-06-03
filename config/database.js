const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('project_management_system', 'root1', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;