const mongoose = require("mongoose");
const adminschema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
});
module.exports = new mongoose.model("admin",adminschema);