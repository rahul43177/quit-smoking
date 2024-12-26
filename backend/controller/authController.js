const jwt = require("jsonwebtoken");
const Users = require("../models/users");

module.exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await Users.findOne({ email });

        if (user) {
            return res.status(400).json({
                status: false,
                message: "A user with the same email address already exists."
            });
        }

        const newUser = new Users({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(201).json({
            status: true,
            token,
            userDetails: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
            },
            message: "User registered successfully."
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({
            status: false,
            errorMessage: error.message
        });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Please provide both email and password."
            });
        }

        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: false,
                message: `No user found with email address ${email}.`
            });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({
                status: false,
                message: "Incorrect credentials provided."
            });
        }
        let hashedPassword = user.password;
        console.log("🚀 ~ module.exports.login= ~ hashedPassword:", hashedPassword)
        console.log("passwordHashed" , hashedPassword)


        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({
            status: true,
            token,
            message: "User logged in successfully."
        });
    } catch (error) {
        console.log("Error in login:", error);
        return res.status(500).json({
            status: false,
            errorMessage: error.message
        });
    }
};