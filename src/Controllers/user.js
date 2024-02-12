const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service : "gmail",
    host : "",
    port : "",
    secure : false,
    auth:{
        user : process.env.USER,
        pass : process.env.APP_PASSWORD
    }
})

const mailOption = {
    from : {
        name : "brandify",
        address : process.env.USER
    },
    to : "mmutahar38@gmail.com",
    subect : "send mail using node js",
    text : "hello brandify web"
}
const  sendMail = async(transporter, mailOption)=>{

}
const User = async (req, res)=>{

    try {
        const user = req.user;

        
       transporter.sendMail(transporter, mailOption);
       console.log("eamil send succefull");

        console.log(user);
        res.status(200).json(user);

        
    } catch (error) {
        console.log(`error from user file in backen ${error}`)
    }
}
module.exports = User