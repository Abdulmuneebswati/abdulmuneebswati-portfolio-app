require("dotenv").config();
const express = require("express");
require("./Db/conn");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/api/admin",adminRoutes);



app.listen(process.env.PORT, () => {
  console.log(`running at port ${process.env.PORT}`);
});
