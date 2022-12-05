const mongoose = require("mongoose");
const skillsSchema = mongoose.Schema({
        skillsdesc:{type:String,required:true,},
        emojione:{data: Buffer,contentType: String},
        t_title:{type:String,required:true},
        t_desc:{type:String,required:true},
        emojitwo:{data: Buffer,contentType: String,},
        l_title:{type:String,required:true},
        l_desc:{type:String,required:true},
        emojithree:{data: Buffer,contentType: String,},
        r_title:{type:String,required:true},
        r_desc:{type:String,required:true},
        resume:{type:String,required:true},
})
const Skills = mongoose.model("Skills",skillsSchema);
module.exports = Skills;