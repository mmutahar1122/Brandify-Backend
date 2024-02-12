const Signupusers = require("../models/signUp-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Login_Auth =async (req, res, next)=>{
try {
const {email, password} = req.body;
console.log(req.body)


const userExist = await Signupusers.findOne({email});
console.log("userExist", userExist)
if(!userExist){
const err={
    status : 401,
    error_message : "Invalid email or password"
}
    // return res.status(401).json("Invalid email or password");

    next(err)

}
    const com_password = await bcrypt.compare(password , userExist.password);

    console.log("com_password",com_password)
    if(com_password){
        return res.status(200).json({
            msg:"login Succefull",
            Token:  await userExist.TokenGenerate(),
            userId: userExist._id.toString()
        });

    }else{
        
        // if(!userExist){
            const err={
                status : 401,
                error_message : "Invalid email or password"
            }
                // return res.status(401).json("Invalid email or password");
            
                next(err)
            
            // }
    }
// return res.status(200).json("Login Succefull")

} catch (error) {

    // console.log("err from backend login",err);
    // res.status(400).json("invalid Crediantial")

    // if(!userExist){
        const err={
            status : 400,
            error_message : "Please fill all the fields"
        }
            // return res.status(401).json("Invalid email or password");
        
            next(err)
        
        // }
    
}
}

module.exports = Login_Auth;