const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('assigned_tasks',{
    assigned_task_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    from:{
        type: sequelize.INTEGER,  
        allowNull: false,      
        references:{
            model: "users",
            key:"user_id"
        }
    },
    to:{
        type: sequelize.INTEGER,
        allowNull: false,
        references:{
            model: "users",
            key:"user_id"
        }
    },
    
},{
    timestamps:false,
    freezeTableName: true
})




