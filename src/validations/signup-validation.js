const z = require("zod");


const signupValidation = z.object({
    fname:z.string({required_error : "first name is required"}).trim().min(3,"first name must be atleast 3 char"),
    lname:z.string({required_error : "last name is required"}).trim().min(3,"last name must be atleast 3 char"),
    email:z.string({required_error : "email is required"}).email("Invalid email").trim().min(3,"email must be atleast 3 char"),
    password:z.string({required_error : "password is required"}).trim().min(4,"password must be atleast 4 char"),
})


module.exports = signupValidation;