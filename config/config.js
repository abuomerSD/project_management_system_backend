require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root1',
    password: process.env.DB_PASS || 'rootroot',
    database: process.env.DB_NAME || 'project_management_system',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: console.log,
  },
  test: {
    username: 'root',
    password: '',
    database: 'project_management_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};