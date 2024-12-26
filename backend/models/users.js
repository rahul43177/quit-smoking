const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {
        type : String , 
        required : true , 
        trim : true ,    
    } , 
    lastName : {
        type : String , 
        required : true , 
        trim : true 
    } , 
    email : {
        type : String  , 
        required : true , 
        unique : true , 
        trim : true  
    } , 
    password : {
        type : String , 
        required : true , 
        minLenght : 6  , 
        trim : true , 
    }
} , {timestamps : true })

module.exports.userModel = mongoose.model("users" , userSchema )