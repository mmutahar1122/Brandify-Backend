const Signupusers = require("../models/signUp-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const Login_Auth =async (req, res)=>{
try {
const {email, password} = req.body;


const userExist = await Signupusers.findOne({email});
console.log("userExist", userExist)
if(!userExist){

    return res.status(401).json("Invalid email or password");

}
    const com_password = await bcrypt.compare(password , userExist.password);

    console.log("com_password",com_password)
    if(com_password){
        return res.status(200).json({
            msg:"login Succeful",
            Token:  await userExist.TokenGenerate(),
            userId: userExist._id.toString()
        });

    }else{
        
        return res.status(401).json("Invalid email or password");
    }
return res.status(200).json("Login Succefull")

} catch (err) {

    console.log("err from backend login",err);
    res.status(400).json("invalid Crediantial")
    
}
}

module.exports = Login_Auth;