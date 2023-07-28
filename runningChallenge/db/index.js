const Sequelize = require('sequelize');
const RunnerModel = require('../models/Runner');
const TeamModel = require('../models/Team');
const PointModel = require('../models/Point');
const TaskModel = require('../models/Task');

const sequelize = new Sequelize('Run', 'postgres', 'root123', {
  host: 'localhost',
  dialect: 'postgres'
});

const Runner = RunnerModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Point = PointModel(sequelize, Sequelize);
const Task = TaskModel(sequelize, Sequelize);

Runner.associate({ Team });
Team.hasMany(Runner);
Point.associate({ Runner });
Task.associate({ Runner });
Runner.hasMany(Point);
Runner.hasMany(Task);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
  Runner,
  Team,
  Point,
  Task
};
