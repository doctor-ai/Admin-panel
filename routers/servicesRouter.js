const express = require('express');
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.render("pages/services/home")
})

router.get('/deseasefinder',(req,res,next)=>{
    res.render("pages/services/deseaseFinder/home")
})

router.get('/deseasefinder/add',(req,res,next)=>{
    res.render("pages/services/deseaseFinder/addDesease")
})

router.get('/deseasefinder/update',(req,res,next)=>{
    res.render("pages/services/deseaseFinder/updateDesease")
})

router.get('/deseasefinder/list',(req,res,next)=>{
    res.render("pages/services/deseaseFinder/list")
})
module.exports = router;