module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Task, { foreignKey: "task_id", as: "task" });
    Comment.belongsTo(models.User, { foreignKey: "user_id", as: "author" });
  };

  return Comment;
};
