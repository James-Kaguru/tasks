const { Router } = require('express');
const user = require('./user');
const role = require('./role');
const permission = require('./permission');
const task = require('./task');
const assigned_task = require('./assigned_task');



const router = Router();

router.use('/users',user)
router.use('/roles',role)
router.use('/permissions',permission)
router.use('/tasks',task)
router.use('/assigned_tasks',assigned_task)

module.exports = router;