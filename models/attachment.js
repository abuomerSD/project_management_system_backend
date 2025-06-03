module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define(
    'Attachment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      file_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Attachment.associate = models => {
    Attachment.belongsTo(models.Task, { foreignKey: 'task_id', as: 'task' });
  };

  return Attachment;
};