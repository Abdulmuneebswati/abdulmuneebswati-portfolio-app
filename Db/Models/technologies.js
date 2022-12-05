const mongoose = require("mongoose");
const techSchema = mongoose.Schema({technologies:{type:Array,required:true}});
module.exports = new mongoose.model("technology",techSchema);