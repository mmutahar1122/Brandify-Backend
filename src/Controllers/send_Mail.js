const nodemailer = require("nodemailer");

const Mail = async (req,res) => {
console.log(req.body)
  const transporter = nodemailer.createTransport({
        service : 'gmail',
        port : 2525,
        auth : {
            user :'mmutahar38@gmail.com',
            pass :'gwtmbplnjsdewwnd'
        }
    })
// const transporter = nodemailer.createTransport({
//     // host: 'smtp.ethereal.email',
//     // port: 587,
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'laury.wisoky21@ethereal.email',
//         pass: 'vy5EVPNdQTsP5kNx71'
//     }
// });
    const MailOptions = {
        from : 'laury.wisoky21@ethereal.email',
        to : 'mmutahar38@gmail.com',
        subject : 'welcome to brandify web',
        text : 'email send from brandigy backend'
    }

   
    // console.log("email send succefull");

    try {
        const result = await transporter.sendMail(MailOptions);
        console.log("result",result);
        console.log("email send succefull");
        res.json(result)
    } catch (error) {
        console.log(error)
        console.log("failed to send email");
        res.json(error)
    }

}

module.exports = Mail