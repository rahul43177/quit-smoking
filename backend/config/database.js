const mongoose = require("mongoose");

const connectDatabase = (mongoString) => {
    mongoose.connect(mongoString)
    .then(() => {
        console.log("MongoDB is connected.")
    })
    .catch((error) => {
        console.log("Mongo Connection Error : " , error)
    })
}

module.exports = connectDatabase