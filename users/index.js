const express =require('express');
const router = express.Router();
const path = require('path')
const basePath = path.join(__dirname,'../templates')


router.get('/add', (req,res)=>{
    res.sendFile(`${basePath}/add.html`)
   
 })

 router.get('/contato', (req,res)=>{
    res.sendFile(`${basePath}/contatos.html`)
   
 })

 module.exports = router