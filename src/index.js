const express = require('express');
const api = require('./api/index');
const db = require('./config/config')


const startServer = async () => {
    await db.authenticate().catch(e => {throw Error("Database connection error")})
    const app = express();
    
    app.use(express.json())
    app.use("/api", api)
    app.listen({ port: 3000 })

}           
// const  test  = require('./test');

startServer()

 







