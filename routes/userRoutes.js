const express = require("express");
const upload = require("../middlewares/multer");
const route = express.Router();
const Usercontroller = require("../controllers/userController");

route.post("/intro" , upload.single('image') , Usercontroller.createIntroDetails);
route.get("/intro"  , Usercontroller.getIntroDetails);
route.post("/services",upload.fields([{name:"emojione", maxCount: 1},{name:"emojitwo", maxCount: 1},{name:"emojithree", maxCount: 1}
,{name:"resume", maxCount: 1}]),Usercontroller.createServicesDetails);
route.get("/services",Usercontroller.getServices);
route.post("/technologies",Usercontroller.listTechnologies);
route.get("/technologies",Usercontroller.getTechnologies);
route.get("/education",Usercontroller.getEducation);
route.get("/projects",Usercontroller.getProjects);
route.get("/projects/:id",Usercontroller.getOneProject);
route.get("/randomprojects",Usercontroller.getRandomProjects)
route.get("/recommendation",Usercontroller.getRecommendation);
module.exports = route;