const express = require("express")
const connectDB = require("./config/database")
const cors = require("cors")
require("dotenv").config()
const port = process.env.SERVER_PORT 
const mongoURI = process.env.MONGODB_STRING


const app = express()

app.use(cors())
app.use(express.json())


const start = async () => {
    try { 
         await connectDB(mongoURI)
         app.listen(port , ()=> {
            console.log(`The server is running on port ${port}`)
         })
    } catch(e){
        console.log("Something went wrong : error ->" , e)
    }
}


start()




