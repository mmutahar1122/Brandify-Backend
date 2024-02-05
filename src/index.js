// console.log("brandify backend")
require('dotenv').config()
const connectdb = require("../src/db")
const express=require('express');
const router= require("./Routes/index.js")
const app=express();
const port=3003;

// app.get('/',(req,res)=>{
//     res.send('brandify backend run--')
// });
app.use(express.json());

app.use("/api/auth", router); 

connectdb().then(() => 
{
    app.listen(process.env.PORT,()=>{
    console.log(`server run on ${process.env.PORT} port`)
})
})
