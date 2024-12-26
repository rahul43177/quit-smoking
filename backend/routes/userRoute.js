const express = require("express")
const {register , login } = require("../controller/userController")

const authMiddleware = require("../middleware/authentication")
const router = express.Router()

router.post("/register" ,register) 
router.post("/login" , login)

router.get("/profile" , authMiddleware , (req,res) => {
    res.json({
        status : true , 
        user : req.user
    })
})


module.exports = router
