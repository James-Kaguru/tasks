const { Sequelize } = require('sequelize');

module.exports =  new Sequelize('tasks_db', 'root', 'Cero!3312', {
  host: 'localhost',
  dialect:'mysql',
  logging: false,
})

