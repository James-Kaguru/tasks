const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('assigned_task',{
    assigned_task_id: {
        type: sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING
    },
    from:{
        type: sequelize.STRING,        
        references:{
            model: "User",
            key:"user_id"
        }
    },
    to:{
        type: sequelize.STRING,
        references:{
            model: "User",
            key:"user_id"
        }
    },
    
},{
    timestamps:false,
})




