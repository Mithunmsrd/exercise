const express = require("express")
//const mongoose = require("mongoose")
const route = express.Router();
const login = require("../models/model")

route.get("/",async(req,res)=>{
    const details = await login.find({})
    res.json(details)
})

route.post("/login",async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const details = await login.create(data)
        res.status(201).json(details)
    }
    catch(error){
        res.status(501).json
    }
})
module.exports = route;
