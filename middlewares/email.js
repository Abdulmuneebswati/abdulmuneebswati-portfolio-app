const nodemailer = require('nodemailer');
const {SECRET_KEY ,TECH_ID ,Email_Host,Email_Port,Email_User,Email_pass ,Email_FROM,PORT,DB_URL}  = require("../config/keys");

let transporter = nodemailer.createTransport({
    host :Email_Host,
    port:Email_Port,
    secure:false,
    auth:{
        user:Email_User,
        pass:Email_pass
    }
});
module.exports = transporter;