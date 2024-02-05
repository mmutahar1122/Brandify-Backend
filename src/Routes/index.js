const express = require("express");
const router = express.Router();
const signupValidate = require("../validations/signup-validation");
const signupMiddleware = require("../middlewares/signup-middleware");
const Login_Auth = require("../Controllers/Login-auth");
const User = require("../Controllers/user");
const User_Middleware = require("../middlewares/user-fromContactus-middleware")
const AuthController = require("../Controllers/signup-auth");


router.route("/signup").post(signupMiddleware(signupValidate), AuthController);  
router.route("/login").post(Login_Auth);  
router.route("/user-contactus").post(User_Middleware,User);  

module.exports = router
 
