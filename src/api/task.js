const { Router } = require('express');
const Task = require('../models/Task');

const { handleSequelizeErrors } = require('../services/services');
const router = Router();


router.post('/', async (req,res) => {
    try{        
        res.json(await Task.create(req.body))
    } catch(err) { 
        res.status(400).json(handleSequelizeErrors(err)) 
    }
        
});

router.get('/:task_id', async (req,res) => {
    try{
        const task = await Task.findOne({
            where:{
                task_id: req.params.task_id,
            }})
        res.json(task)
    }
    catch(err) {
        res.status(400).json(handleSequelizeErrors(err))
    }       
})

router.get('/', async (req,res) => {
    try{
        const tasks = await Task.findAll({
            where:{
                user_id: req.query.user_id,
            }
        })
        res.json(tasks)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.put('/:task_id', async (req,res) => {
    try{
        const task = await Task.findOne({
            where:{
                task_id: req.params.task_id,
            }})
        if(!task) res.status(400).json("Record was not found.")
        Object.assign(task,req.query)
        await task.save()
        res.json(task)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.delete('/:task_id', async (req,res) => {
    try{
        const task = await Task.findOne({
            where:{
                task_id: req.params.task_id,
            }})
        if(!task) res.status(400).json("Record was not found.")
        Object.assign(task,req.query)
        await task.destroy()
        res.json(task)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})


module.exports = router;