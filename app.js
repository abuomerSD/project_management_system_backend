const express = require("express");
const sequelize = require("./config/database");
const app = express();

const sync = require('./models/sync');

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server is Listening to port ${port}`);
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
});
