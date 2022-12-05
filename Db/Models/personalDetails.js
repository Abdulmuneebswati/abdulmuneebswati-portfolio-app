const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  email: {
    type:String,
    required:true,
  },
  desc:{
    type:String,
    required:true,
  },
  githubLink: {
    type:String,
    required:true,
  },
  fbLink: {
    type:String,
    required:true,
  },
  instaLink: {
    type:String,
    required:true,
  },
  linkedinLink: {
    type:String,
    required:true,
  },
  img: {
    type:String,
    required:true,
  },
});
module.exports = mongoose.model("personalDetails", mySchema);