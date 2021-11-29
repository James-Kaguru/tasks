const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('role',{
    role_id: {
        type: sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING,
        unqiue:true
    },    
},{
    timestamps:false,
})




