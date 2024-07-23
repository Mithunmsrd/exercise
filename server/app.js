const express = require('express')
const mongoose = require("mongoose")
const route = require("./routes/route")

const app = express();

app.use(express.json())

const rout = require("./routes/route")
app.use("/route",rout)

mongoose.connect("mongodb://localhost:27017/exer")

const database = mongoose.connection;

database.once("connected",()=>{
    console.log("Database Connected")
})

database.on("error",(error)=>{
    console.log(error)
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is runing on Port ${PORT}`)
})