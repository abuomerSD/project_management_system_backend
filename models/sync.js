const sequelize = require('./config/database');
const User = require('./models/User');

(async () => {
  try {
    await sequelize.sync({ force: true }); // ❗ force: true يحذف الجداول ثم يعيد إنشاؤها
    console.log('✅ All models were synchronized successfully.');
  } catch (error) {
    console.error('❌ Error syncing models:', error);
  } finally {
    await sequelize.close();
  }
})();
