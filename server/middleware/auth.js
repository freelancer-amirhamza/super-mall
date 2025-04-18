const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async(req, res, next)=>{
    try {
        const token = req?.cookies?.accessToken || req?.headers?.authorization?.split(" ")[1]

        if(!token){
            return res.status(404).json({
                success:false,
                error: true,
                message: "You have not logged!"
            })
        }
        const decode =await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN)
        if(!decode){
            return res.status(401).json({
                success: true,
                error: true,
                message: "Unauthorized User"
            })
        }
        req.userId = decode.id

        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            error:true,
            message:  error.message,
        })
    }
}

module.exports = auth;