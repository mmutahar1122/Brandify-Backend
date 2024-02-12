const Signupusers = require("../models/signUp-models");
const bcrypt = require("bcrypt");

const signupUser = async (req, res, next) => {

    try {

        const { fname, lname, email, password } = req.body;
        console.log("SignUp Users",req.body)

        const userExist = await Signupusers.findOne({ email });

        if (userExist) {

            const error = {error_message : "user already exist"};
            
            return next(error)
        }
        const saltRound = 10;

        const hash_password =await bcrypt.hash(password,saltRound);
        // console.log("hashpassword",hash_password)
        const newUser = await Signupusers.create({ fname, lname, email, password : hash_password });

        // console.log("newUser", newUser);

        res.status(201).json({newUser, token : await newUser.TokenGenerate(), userId: newUser._id});
    } catch (error) {

        console.log("signup-controller-error-- internal server error", error);

        return res.status(400).json("internal server error");

    }

}


module.exports = signupUser