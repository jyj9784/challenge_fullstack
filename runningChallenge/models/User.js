// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Assuming you have a separate file for Sequelize database connection

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
});

module.exports = User;
