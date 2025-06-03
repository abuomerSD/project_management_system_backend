module.exports = (sequelize, DataTypes) => {
  const ProjectMember = sequelize.define(
    'Project_Member',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      role: {
        type: DataTypes.ENUM('manager', 'member'),
        defaultValue: 'member',
      },
    },
    {
      timestamps: true,
    }
  );

  ProjectMember.associate = models => {
    ProjectMember.belongsTo(models.Project, { foreignKey: 'project_id' });
    ProjectMember.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return ProjectMember;
};