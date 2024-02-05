const { Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");


const SignupSchema = new Schema(
    {
    fname:{
        type : String,
        required : true
    },
    lname:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
},
{ timestamps: true });

SignupSchema.methods.TokenGenerate = async function(){
    try {
        
     const token= jwt.sign(
    {
        userId : this._id,
        email:this.email,

    },
    process.env.JWT_SECURITY_KEY,
    {
        expiresIn : "2d"
    }
    ) 
    return token
} catch (error) {
        console.log("error in generate jwt token",error);
}
}
const Signupusers =new model("Signup-User",SignupSchema);

module.exports = Signupusers;