const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('users',{
    user_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING
    },
    username:{
        type: sequelize.STRING,
        unique:true,
    },
    email:{
        type: sequelize.STRING
    },
    password:{
        type: sequelize.STRING
    },
    role_id:{
        type: sequelize.INTEGER,
        references:{
            model: "roles",
            key:"role_id"
        }
    }
},{
    timestamps:false,
    freezeTableName: true
})



