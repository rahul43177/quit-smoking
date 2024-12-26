const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstName : {
        type : String , 
        required : true , 
        trim : true 
    } , 
    lastName : {
        type : String , 
        required : true , 
        trim : true 
    } , 
    email : {
        type : String , 
        unique : true , 
        trim : true , 
        required : true , 
        lowercase : true , 

    } ,
    password : {
        type : String , 
        required : true , 
        trim : true , 
        minLength : 6 
    }
}, {timestamps : true})


userSchema.pre("save" , async (next) => {
    if(!this.isModified("password")) {
        return next()
    }
    try { 
        const salt = await bcrypt.genSalt(10);
        this.password = await brcrypt.hash(this.password ,salt);
        next();
    } catch(error) {
        next(error);
    }
})

userSchema.methods.comparePassword = async (cadidatePassword) => {
    return await bcrypt.compare(cadidatePassword , this.password)
}

module.exports = mongoose.model("Users", userSchema)