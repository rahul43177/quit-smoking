const { userModel } = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config({
  path: "../.env",
});
let secretKey = process.env.JWT_SECRET;

module.exports.register = async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;

    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({
        status: false,
        message: `The user with ${email} email already exists in the application.`,
      });
    }

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createUser = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    password = undefined;
    const token = jwt.sign({ userId: createUser._id }, secretKey, {
      expiresIn: "1d",
    });

    res
      .cookie("auth-token", token, {
        expiresIn: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
      })
      .status(201)
      .json({
        status: true,
        token: token,
        userDetails: {
          firstName,
          lastName,
          email,
        },
        message: "The user has been created successfully.",
      });
  } catch (error) {
    return res.status(500).json({
      status: false,
      errorMessage: error.message,
    });
  }
};



module.exports.login = async (req,res) => {
    try {
        let {email , password} = req.body

        const user = await userModel.findOne({email})
        if(!user) {
            return res.status(400).json({
                status : false , 
                message : `The user with ${email} email is not present in the application`
            })
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch) {
            return res.status(400).json({
                status : false , 
                error : "Invalid Credentials"
            })
        }

        const token = jwt.sign(
            {userId : user._id} , 
            secretKey , 
            {
                expiresIn : "1d" 
            }
        )
        res.cookie("auth-token" , token , {
            expiredIn : new Date(Date.now() + 8 * 3600000) ,
            httpOnly : true
        }).status(200).json({
            status : true , 
            token , 
            message : "Login Successful"
        })
    } catch(error) {
        return res.status(500).json({
            status : false ,
            errorMessage : error.message
        })
    }
}

