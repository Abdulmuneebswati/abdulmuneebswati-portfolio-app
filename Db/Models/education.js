const mongoose = require("mongoose");
const eduSchema = mongoose.Schema({
    discipline:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
    from:{
        type:Number,
        required:true,
    },
    to:{
        type:Number,
        required:true,
    }
});
module.exports = new mongoose.model("education",eduSchema);