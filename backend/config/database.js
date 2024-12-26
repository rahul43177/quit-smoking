require("dotenv").config({
    path : "../.env"
})
const mongoose = require("mongoose")


const connectDB = async (mongoDBString) => {
    try { 
        await mongoose.connect(mongoDBString);
        console.log("MongoDB Connected.")
    } catch(error) {
        console.log("file : database.js" , error)
    }
}

module.exports = connectDB;