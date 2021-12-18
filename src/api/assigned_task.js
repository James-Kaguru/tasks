const { Router } = require('express');
const AssignedTask = require('../models/AssignedTask');

const { handleSequelizeErrors } = require('../services/services');
const router = Router();


router.post('/', async (req,res) => {
    try{        
        res.json(await AssignedTask.create(req.body))
    } catch(err) { 
        res.status(400).json(handleSequelizeErrors(err)) 
    }
        
});

router.get("/to", async (req,res) => {
        try{
            const assigned_tasks = await AssignedTask.findAll({
                where:{
                    to: req.query.to,
            }})
            res.json(assigned_tasks)
        }
        catch(err) { 
            res.status(400).json( handleSequelizeErrors(err) ) 
        }       
    })
    
    router.get('/from', async (req,res) => {
        try{
            const assigned_tasks = await AssignedTask.findAll({
                where:{
                    from: req.query.from,
            }})
            res.json(assigned_tasks)
        }
        catch(err) { 
            res.status(400).json( handleSequelizeErrors(err) ) 
        }       
    })
router.get('/:assigned_task_id', async (req,res) => {
    try{
        const assigned_task = await AssignedTask.findOne({
            where:{
                assigned_task_id: req.params.assigned_task_id,
            }})
        res.json(assigned_task)
    }
    catch(err) {
        res.status(400).json(handleSequelizeErrors(err))
    }       
})



router.put('/:assigned_task_id', async (req,res) => {
    try{
        const assigned_task = await AssignedTask.findOne({
            where:{
                assigned_task_id: req.params.assigned_task_id,
            }})
        if(!assigned_task) res.status(400).json("Record was not found.")
        Object.assign(assigned_task,req.query)
        await assigned_task.save()
        res.json(assigned_task)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})

router.delete('/:assigned_task_id', async (req,res) => {
    try{
        const assigned_task = await AssignedTask.findOne({
            where:{
                assigned_task_id: req.params.assigned_task_id,
            }})
        if(!assigned_task) res.status(400).json("Record was not found.")
        Object.assign(assigned_task,req.query)
        await assigned_task.destroy()
        res.json(assigned_task)
    }
    catch(err) { 
        res.status(400).json( handleSequelizeErrors(err) ) 
    }       
})


module.exports = router;