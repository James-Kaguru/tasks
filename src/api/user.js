const { Router } = require('express');
const { User } = require('../models/User');

const { handleSequelizeErrors } = require('../../services/services');
const router = Router();


//signup
router.post('/', async (req,res) => {
    try{        
        res.json(await User.create(req.query))
    } catch(err) { 
        res.status(400).json(handleSequelizeErrors(err)) 
    }
        
});

router.get('/:user_id', async (req,res) => {
    try{
        const user = await User.findOne({
            where:{
                user_id: req.params.user_id,
            }})
        res.json(user)
    }
    catch(err) {
        res.status(400).json(handleSequelizeErrors(err))
    }       
})

router.get('/', async (req,res) => {
    try{
        const users = await User.findAll()
        res.json(users)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.put('/:user_id', async (req,res) => {
    try{
        const user = await User.findOne({
            where:{
                user_id: req.params.user_id,
            }})
        if(!user) res.status(400).json("Record was not found.")
        Object.assign(user,req.query)
        await user.save()
        res.json(user)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.delete('/:user_id', async (req,res) => {
    try{
        const user = await User.findOne({
            where:{
                user_id: req.params.user_id,
            }})
        if(!user) res.status(400).json("Record was not found.")
        Object.assign(user,req.query)
        await user.destroy()
        res.json(user)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})




//login
router.post('/', async (req,res) => {
    try{        
        const user = await User.findOne({
            where:{
                username: req.query.username,
                password: req.query.password,
        }})
        if(!user) res.status(400).json("Invalid username or password")
        res.json(user)
    } catch(err) { 
        res.status(400).json(handleSequelizeErrors(err)) 
    }
        
});


module.exports = router;