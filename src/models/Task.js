const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('task',{
    task_id: {
        type: sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING
    },
    user_id:{
        type: sequelize.STRING,
        references:{
            model: "User",
            key:"user_id"
        }
    }
},{
    timestamps:false,
})




