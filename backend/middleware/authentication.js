const { userModel } = require("../models/users");
const jwt = require("jsonwebtoken")
require("dotenv").config({
    path : "../.env"
})

const secretKey = process.env.JWT_SECRET

const authMiddleware = async (req,res,next) => {
    try {
        const token = req.cookies["auth-token"]
        if(!token) {
            return res.status(401).json({
                status : false , 
                errorMessage : "Access denied. No token provided"
            })
        }
        const decoded = jwt.verify(token,secretKey);
        req.user = await userModel.findById(decoded.userId).select("-password");
        next();
    } catch(error) {
        return res.status(500).json({
            status : false , 
            errorMessage : error.message
        })
    }
}

module.exports = authMiddleware