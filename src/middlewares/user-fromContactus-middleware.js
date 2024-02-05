
const jwt = require("jsonwebtoken")
const signupusers = require("../models/signUp-models")
const User_Middleware= async (req, res, next) => {

    try {

        const Token = req.header("Authorization");
        const jwtToken = await Token.replace("Bearer","").trim();

        const isVerified = await jwt.verify(jwtToken, process.env.JWT_SECURITY_KEY)
        const userData = await signupusers.findOne({email : isVerified.email}).select({
            password : 0,
        })
        req.user = userData;
        req.Token = Token;
        req.userID = userData._id;
        // res.status(200).json(userData);
        next();
    } catch (error) {
        console.log(`error from User_Middleware ${error}`);
    }
}

module.exports = User_Middleware