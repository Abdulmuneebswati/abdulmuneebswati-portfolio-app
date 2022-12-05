const Detail = require("../Db/Models/personalDetails");
const fs = require("fs");
const Skills = require("../Db/Models/skillsDetail");
const Technologies = require("../Db/Models/technologies");
const Education = require("../Db/Models/education");
const Project = require("../Db/Models/projects");
const Testmonials = require("../Db/Models/testmonials");
class Usercontroller {
  static createIntroDetails = async (req, res) => {
    const addInfo = await new Detail({
      name: req.body.name,
      email: req.body.email,
      desc: req.body.desc,
      githubLink: req.body.githubLink,
      fbLink: req.body.fbLink,
      instaLink: req.body.instaLink,
      linkedinLink: req.body.linkedinLink,
      img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });
    const saveInfo = await addInfo.save();
    res.json(saveInfo);
  };

  static getIntroDetails = async (req, res) => {
    const allData = await Detail.find();
    res.json(allData);
  };

  static createServicesDetails = async (req, res) => {
    console.log(req.files);
    try {
      const createServices = await new Skills({
        skillsdesc: req.body.skillsdesc,
        emojione: {
          data: fs.readFileSync("uploads/" + req.files.emojione[0].filename),
          contentType: "image/png",
        },
        t_title: req.body.t_title,
        t_desc: req.body.t_desc,
        emojitwo: {
          data: fs.readFileSync("uploads/" + req.files.emojitwo[0].filename),
          contentType: "image/png",
        },
        l_title: req.body.l_title,
        l_desc: req.body.l_desc,
        emojithree: {
          data: fs.readFileSync("uploads/" + req.files.emojithree[0].filename),
          contentType: "image/png",
        },
        r_title: req.body.r_title,
        r_desc: req.body.r_desc,
        resume: {
          data: fs.readFileSync("uploads/" + req.files.resume[0].filename),
          contentType: "application/pdf",
        },
      });
      const saveSkills = await createServices.save();
      res.json(saveSkills);
    } catch (error) {
      console.log(error);
    }
  };
  
  static getServices = async (req, res) => {
    try {
      const getService = await Skills.find();
      res.json(getService);
    } catch (error) {
      console.log(error);
    }
  };

  static listTechnologies = async (req, res) => {
    try {
      const insertTechnology = await new Technologies({
        technologies: req.body.technologies,
      });
      const saveTech = await insertTechnology.save();
      res.json(saveTech);
    } catch (error) {
      console.log(error);
    }
  };

  static getOneProject = async (req, res) => {
    try {
      const _id = req.params.id;
      const getProject = await Project.findById(_id);
      res.json(getProject);
    } catch (error) {
      console.log(error);
    }
  };

  static getTechnologies = async (req, res) => {
    try {
      const tech = await Technologies.findOne();
      res.json(tech);
    } catch (error) {
      console.log(error);
    }
  };

  static getEducation = async (req, res) => {
    try {
      const edu = await Education.find();
      res.json(edu);
    } catch (error) {
      console.log(error);
    }
  };

  static getProjects = async (req, res) => {
    try {
      const findProjects = await Project.find();
      res.json(findProjects);
    } catch (error) {
      console.log(error);
    }
  };

  static getRandomProjects = async (req, res) => {
    try {
      const find = await Project.find().sort({ _id: -1 }).limit(4);
      res.json(find);
    } catch (error) {
      console.log(error);
    }
  };
  
  static getRecommendation = async (req, res) => {
    try {
      const reviews = await Testmonials.find().limit(3).sort({ _id: -1 });
      res.json(reviews);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Usercontroller;
