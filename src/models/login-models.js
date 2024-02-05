const {Schema, model} = require("mongoose");
const loginSchema = new Schema({
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
})

const loginUser= new model("login_User",loginSchema);



module.exports = loginUser;