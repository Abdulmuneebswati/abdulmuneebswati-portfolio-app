require("dotenv").config();
const express = require("express");
require("./Db/conn");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const {PORT} = require("./config/keys");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/api/admin",adminRoutes);


if (process.env.NODE_ENV == "production") {
    const path = require("path");
    app.get("/",(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'frontend','build')));
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}
app.listen(process.env.PORT,()=>{
    console.log(`running at port ${PORT}`);
})
