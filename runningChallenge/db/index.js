const Sequelize = require('sequelize');
const RunnerModel = require('../models/Runner');
const TeamModel = require('../models/Team');
const TaskModel = require('../models/Task');

const sequelize = new Sequelize('Run', 'postgres', 'root123', {
  host: 'localhost',
  dialect: 'postgres'
});

const Runner = RunnerModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Task = TaskModel(sequelize, Sequelize);

Runner.associate({ Team });
Team.hasMany(Runner);
Task.associate({ Runner });
Runner.hasMany(Task);

// Synchronize the database tables with the models
sequelize.sync({ force: false }).then(() => {
// sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch((err) => {
  console.error('Error synchronizing database:', err);
});

module.exports = {
  Runner,
  Team,
  Task
};
