const mongoose = require("mongoose");
const testmonialSchema = mongoose.Schema({
    clientImg:{type:String,required:true},
    review:{type:String,required:true}
})
module.exports = new mongoose.model("testmonial",testmonialSchema);