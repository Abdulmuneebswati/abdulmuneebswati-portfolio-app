const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    tools:{
        type:Array,
        required:true
    },
    youtubeLink:{
        type:String,
        required:true
    },
    githubLink:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})
module.exports = new mongoose.model("projects",projectSchema);