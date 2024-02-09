// console.log("brandify backend")
require('dotenv').config()
const connectdb = require("../src/db")
const express=require('express');
const router= require("./Routes/index.js")
const app=express();
const port=3003;
const cors = require("cors")
// app.get('/',(req,res)=>{
//     res.send('brandify backend run--')
// });

const corsOptions= {
    origin : "http://localhost:3000",
    method : "GET, POST, DELETE, PUT, PATCH, HEAD",
    credentials : true
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router); 
connectdb().then(() => 
{
    app.listen(process.env.PORT,()=>{
    console.log(`server run on ${process.env.PORT} port`)
})
})
