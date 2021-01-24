const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Aditya PUri')
})

router.get('/dashboard', (req,res)=>{
    res.send('Aditya the boss')
})

router.post('/adduser',actions.addNew)
router.post('/authenticate',actions.authenticate)
router.get('/getinfo', actions.getinfo)


module.exports = router 