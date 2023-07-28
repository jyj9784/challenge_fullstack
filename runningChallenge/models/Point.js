module.exports = (sequelize, DataTypes) => {
    class Point extends sequelize.Sequelize.Model {}
  
    Point.init({
      value: {
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
      modelName: 'Point'
    });
  
    Point.associate = (models) => {
      Point.belongsTo(models.Runner); // Adds RunnerId to Point model
    };
  
    return Point;
  };
  