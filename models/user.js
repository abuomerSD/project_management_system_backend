module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('admin', 'member'),
        defaultValue: 'member',
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  User.associate = models => {
    User.hasMany(models.Project, { foreignKey: 'owner_id', as: 'ownedProjects' });
    User.belongsToMany(models.Project, {
      through: 'Project_Members',
      as: 'projects',
      foreignKey: 'user_id',
    });
    User.hasMany(models.Task, { foreignKey: 'assigned_to', as: 'tasks' });
    User.hasMany(models.Comment, { foreignKey: 'user_id', as: 'comments' });
  };

  return User;
};