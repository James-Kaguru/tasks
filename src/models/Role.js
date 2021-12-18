const sequelize = require ('sequelize')
const db = require ('../config/config')

module.exports = db.define('roles',{
    role_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: sequelize.STRING,
        unqiue:true
    },    
},{
    timestamps:false,
    freezeTableName: true
})




