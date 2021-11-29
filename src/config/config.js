const { Sequelize } = require('sequelize');

module.exports =  new Sequelize('tasks_db', 'root', 'tasks123', {
  host: 'localhost',
  dialect:'mysql',
  logging: false,
})

