const express = require("express");
const router = express.Router();
const signupValidate = require("../validations/signup-validation");
const validationiddleware = require("../middlewares/validationiddleware");
const Login_Auth = require("../Controllers/Login-auth");
const User = require("../Controllers/user");
const User_Middleware = require("../middlewares/user-fromContactus-middleware")
const AuthController = require("../Controllers/signup-auth");
const Mail = require("../Controllers/send_Mail")
const loginValidation = require("../validations/login-validation")

router.route("/signup").post(validationiddleware(signupValidate), AuthController);  
router.route("/login").post(validationiddleware(loginValidation),Login_Auth);  
router.route("/user-contactus").post(User_Middleware,User);  
router.route("/sendmail").post(Mail);   


module.exports = router
 
