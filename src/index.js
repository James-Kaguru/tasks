const express = require('express');
const cors = require('cors')
const api = require('./api/index');
const db = require('./config/config')


const startServer = async () => {
    await db.sync().catch(e => console.error(e.message))
    
    
    await db.authenticate().catch(e => {throw Error("Database connection error")})
    const app = express();
    app.use(cors())    
    app.use(express.json())
    app.use("/api", api)
    app.listen({ port: 5000 })

}           

try{
    startServer()
}
catch (err){
    console.log(err.message)
}

 







