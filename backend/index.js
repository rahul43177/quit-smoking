const express = require("express")
const app = express()

require("dotenv").config()
const connectDatabase = require("./config/database")
const mongoDBURI = process.env.MONGODB_STRING
const cors = require("cors")
const cookieParser = require("cookie-parser")
const  userRoutes = require("./routes/userRoute")
const PORT = process.env.SERVER_PORT 
app.use(express.json())
app.use(cors())
app.use(cookieParser()) 
app.use("/app/users/" , userRoutes)

const start = async () => {
    try {
        await connectDatabase(mongoDBURI)
        app.listen(PORT , () => {
            console.log("The server is running on the port :" , PORT)
        })
        
    } catch(error) {
        console.log("Error in startup:",error)
    }
}

start()