const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('permission',{
    permission_id: {
        type: sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
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




