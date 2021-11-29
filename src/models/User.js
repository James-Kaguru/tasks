const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('user',{
    user_id: {
        type: sequelize.STRING,
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
        type: sequelize.STRING,
        references:{
            model: "Role",
            key:"role_id"
        }
    }
},{
    timestamps:false,
})




