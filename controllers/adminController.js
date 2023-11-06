const Admin = require("../Db/adminModel/createAdmin");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const personalDetails = require("../Db/Models/personalDetails");
const Skills = require("../Db/Models/skillsDetail");
const Technologies = require("../Db/Models/technologies");
const Project = require("../Db/Models/projects");
const Testmonials = require("../Db/Models/testmonials");
const Education = require("../Db/Models/education");
const transporter = require("../middlewares/email");


class AdminController {
  static createAdmin = async (req, res) => {
    try {
      const { email, password, cpassword } = req.body;
      if (email && password && cpassword) {
        if (password === cpassword) {
          const newPassword = await bcrypt.hash(password, 12);
          const createAdmin = await new Admin({
            email: email,
            password: newPassword,
          });
          const saveAdmin = await createAdmin.save();
          res.json(saveAdmin);
        } else {
          res.json({ error: "Password doesn't match" });
        }
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  static loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const findEmail = await Admin.findOne({ email: email });
      if (findEmail) {
        const isMatch = await bcrypt.compare(password, findEmail.password);
        if (isMatch) {
          const data = {
            user: {
              id: findEmail._id,
            },
          };
          const authToken = await jwt.sign(data, SECRET_KEY, {
            expiresIn: "24h",
          });
          res.json({ authToken });
        } else {
          res.json({ error: "Invalid Crecedentials" });
        }
      } else {
        res.json({ error: "Invalid Crecedentials" });
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  static getInfo = async (req, res) => {
    try {
      const info = await personalDetails.findOne();
      res.json(info);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  static updateInfo = async (req, res) => {
    try {
      console.log(req.body);
      const info = await personalDetails.findOne();
      const update = await personalDetails.findByIdAndUpdate(
        info._id,
        { $set: req.body },
        { new: true }
      );
      res.json(update);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  static updateServices = async (req, res) => {
    try {
      const findOne = await Skills.findOne();
      const update = await Skills.findByIdAndUpdate(
        findOne._id,
        { $set: req.body },
        { new: true }
      );
      if (update) {
        res.json({ successful: "Your Services Section Updated Successfully" });
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  static updateTechnologies = async (req, res) => {
    try {
      const update = await Technologies.findByIdAndUpdate(
        TECH_ID,
        { $set: req.body },
        { new: true }
      );
      if (update) {
        res.json({
          successful: "Your Technologies Section Updated Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  };

  static getProject = async (req, res) => {
    try {
      const id = req.params.id;
      if (id) {
        const project = await Project.findById(id);
        if (project) {
          res.json(project);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  static updateProject = async (req, res) => {
    try {
      const id = req.params.id;
      if (id) {
        const project = await Project.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );
        if (project) {
          res.json(project);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  static uploadProject = async (req, res) => {
    try {
      const createProject = await new Project({
        title: req.body.title,
        desc: req.body.desc,
        tools: req.body.tools,
        youtubeLink: req.body.youtubeLink,
        githubLink: req.body.githubLink,
        img: req.body.img,
      });
      const saveProject = await createProject.save();
      res.json({ success: "Project has been added" });
    } catch (error) {
      console.log(error);
    }
  };

  static deleteProject = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteProject = await Project.findByIdAndDelete(id);
      if (deleteProject) {
        res.json(deleteProject);
      }
    } catch (error) {
      console.log(error);
    }
  };

  static uploadRecommendation = async (req, res) => {
    try {
      const { clientImg, review } = req.body;
      const reviews = await new Testmonials({
        clientImg: clientImg,
        review: review,
      });
      const saveReview = await reviews.save();
      if (saveReview) {
        res.json({ success: "Review has been updated" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static getRecommendation = async (req, res) => {
    try {
      const reviews = await Testmonials.find();
      res.json(reviews);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteRecommendation = async (req, res) => {
    try {
      let id = req.params.id;
      const reviews = await Testmonials.findByIdAndDelete(id);
      res.json(reviews);
    } catch (error) {
      console.log(error);
    }
  };

  static listEducation = async (req, res) => {
    try {
      const { discipline, details, from, to } = req.body;
      if (discipline && details && from && to) {
        const createEdu = await new Education({
          discipline: discipline,
          details: details,
          from: from,
          to: to,
        });
        const saveEdu = await createEdu.save();
        res.json(saveEdu);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  static deleteEducation = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteOne = await Education.findByIdAndDelete(id);
      res.json(deleteOne);
    } catch (error) {
      console.log(error);
    }
  };

  static resetPassword = async (req, res) => {
    try {
      const admin = await Admin.findById(req.user);
      if (admin) {
        const token = await jwt.sign(
          { _id: admin._id },
          SECRET_KEY,
          { expiresIn: "5m" }
        );
        const info = await transporter.sendMail({
          from: Email_FROM,
          to: Email_FROM,
          subject: "Verify Your Email",
          html: `Hi ${admin.name} Please click here to <a href='http://localhost:3000/resetpassword/${admin._id}/${token}'> Verify </a>`,
        });
        res.json({
          message: "An Email For Reset Password Has Been Sent to Your Gmail",
        });
      } else {
        res.json({ message: "Something Went Wrong" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static changePassword = async (req, res) => {
    try {
      const { id, token } = req.params;
      const { currentpassword, password, confirmpassword } = req.body;
      if (password === confirmpassword) {
        const verifyToken = await jwt.verify(token, SECRET_KEY);
        const admin = await Admin.findById(id);
        if (verifyToken && admin) {
          const isMatch = await bcrypt.compare(currentpassword, admin.password);

          if (isMatch) {
            
            const newPassword = await bcrypt.hash(password, 12);
            const updatePassword = await Admin.findByIdAndUpdate(
              verifyToken._id,
              { $set: { password: newPassword } },
              { new: true }
            );
            if (updatePassword) {
              res.json({ message: "Password has been updated" });
            }
          } else {
            res.json({ error: "Invalid current password" });
          }
        } else {
          res.json({ error: "Session has been expired" });
        }
      } else {
        res.json({ error: "Passwords doesnot match" });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  };
}
module.exports = AdminController;
