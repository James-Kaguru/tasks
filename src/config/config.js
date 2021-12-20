const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()
// console.log("update",process.env.MYSQL_DATABASE,process.env.MYSQL_USER,process.env.MYSQL_PASSWORD)
// module.exports =  new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
//   host: "localhost",
//   dialect:'mysql',
//   logging: false,
// })
module.exports =  new Sequelize("tasks_db", "jimmy", "password", {
  host: "localhost",
  dialect:'mysql',
  logging: false,
})
