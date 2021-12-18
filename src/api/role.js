const { Router } = require('express');
const Role = require('../models/Role');
const { handleSequelizeErrors } = require('../services/services');
const router = Router();

router.post('/', async (req,res) => {
    try{        
        res.json(await Role.create(req.body))
    } catch(err) { 
        res.status(400).json(handleSequelizeErrors(err)) 
    }        
});

router.get('/:role_id', async (req,res) => {
    try{
        const role = await Role.findOne({
            where:{
                role_id: req.params.role_id,
            }})
        res.json(role)
    }
    catch(err) {
        res.status(400).json(handleSequelizeErrors(err))
    }       
})

router.get('/', async (req,res) => {
    try{
        const roles = await Role.findAll()
        res.json(roles)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.put('/:role_id', async (req,res) => {
    try{
        const role = await Role.findOne({
            where:{
                role_id: req.params.role_id,
            }})
        if(!role) res.status(400).json("Record was not found.")
        Object.assign(role,req.body)
        await role.save()
        res.json(role)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.delete('/:role_id', async (req,res) => {
    try{
        const role = await Role.findOne({
            where:{
                role_id: req.params.role_id,
            }})
        if(!role) res.status(400).json("Record was not found.")
        Object.assign(role,req.query)
        await role.destroy()
        res.json(role)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})


module.exports = router;