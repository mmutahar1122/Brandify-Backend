const z = require("zod");


const loginValidation = z.object({
    email:z.string({required_error : "email is required"}).email("Invalid email").trim().min(3,"email must be atleast 3 char"),
    password:z.string({required_error : "password is required"}).trim().min(4,"password must be atleast 4 char"),
})

module.exports = loginValidation