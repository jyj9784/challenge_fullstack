module.exports = (sequelize, DataTypes) => {
    class Task extends sequelize.Sequelize.Model {}
  
    Task.init({
      time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      point: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      RunnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Runners', 
          key: 'id', 
        }
      }
    }, {
      sequelize,
      modelName: 'Task'
    });
  
    Task.associate = (models) => {
      Task.belongsTo(models.Runner); // Adds RunnerId to Task model
    };
  
    return Task;
  };
  