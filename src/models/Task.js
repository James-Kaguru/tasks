const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('tasks',{
    task_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    user_id:{
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
            model: "users",
            key:"user_id"
        }
        
    }
},{
    timestamps:false,
    freezeTableName: true
})




