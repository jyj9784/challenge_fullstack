module.exports = (sequelize, DataTypes) => {
    class Team extends sequelize.Sequelize.Model {}
  
    Team.init({
      teamName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      modelName: 'Team'
    });
  
    return Team;
  };
  