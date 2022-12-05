const jwt = require("jsonwebtoken");
const verifyAdmin = async (req,res,next)=>{
    try {
        const token = req.header("auth-token");
        if (token) {
            const data = jwt.verify(token,process.env.SECRET_KEY);
            req.user = data.user.id;
            next();
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
module.exports = verifyAdmin;