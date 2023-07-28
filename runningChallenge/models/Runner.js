module.exports = (sequelize, DataTypes) => {
    class Runner extends sequelize.Sequelize.Model {}
  
    Runner.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      TeamId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Teams', // 'Teams' refers to table name
          key: 'id', // 'id' refers to column name
        }
      }
    }, {
      sequelize,
      modelName: 'Runner'
    });
  
    Runner.associate = (models) => {
      Runner.belongsTo(models.Team); // Adds TeamId to Runner model
    };
  
    return Runner;
  };
  