module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
    }
  );

  Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: "owner_id", as: "owner" });
    Project.belongsToMany(models.User, {
      through: "Project_Members",
      as: "members",
      foreignKey: "project_id",
    });
    Project.hasMany(models.Task, { foreignKey: "project_id", as: "tasks" });
  };

  return Project;
};
