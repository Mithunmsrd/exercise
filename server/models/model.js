const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    Username : {type : String, required : true},
    Password : {type : String, required :true}
})

const exercise = ("exercise",exerciseSchema)
module.exports = exercise;