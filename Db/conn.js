const mongoose = require("mongoose");
const {DB_URL} = require("../config/keys");
mongoose.connect(DB_URL)
.then(()=>console.log("Successful"))
.catch((err)=>console.log(err));