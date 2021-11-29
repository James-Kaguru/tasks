const { Router } = require('express');
const { Permission } = require('../models/Permission');

const { handleSequelizeErrors } = require('../services/services');
const router = Router();

router.post('/', async (req,res) => {
    try{        
        res.json(await Permission.create(req.query))
    } catch(err) { 
        res.status(400).json(handleSequelizeErrors(err)) 
    }        
});

router.get('/:permission_id', async (req,res) => {
    try{
        const permission = await Permission.findOne({
            where:{
                permission_id: req.params.permission_id,
            }})
        res.json(permission)
    }
    catch(err) {
        res.status(400).json(handleSequelizeErrors(err))
    }       
})

router.get('/', async (req,res) => {
    try{
        const permissions = await Permission.findAll({
            where: {
                role_id: req.query.role_id
            }
        })
        res.json(permissions)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.put('/:permission_id', async (req,res) => {
    try{
        const permission = await Permission.findOne({
            where:{
                permission_id: req.params.permission_id,
            }})
        if(!permission) res.status(400).json("Record was not found.")
        Object.assign(permission,req.query)
        await permission.save()
        res.json(permission)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.delete('/:permission_id', async (req,res) => {
    try{
        const permission = await Permission.findOne({
            where:{
                permission_id: req.params.permission_id,
            }})
        if(!permission) res.status(400).json("Record was not found.")
        Object.assign(permission,req.query)
        await permission.destroy()
        res.json(permission)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})


module.exports = router;