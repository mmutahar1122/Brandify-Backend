const DB_Name = require("../constant")
const mongoose = require("mongoose")

const connectdb =async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log("connection Database succesful")
        
    } catch (error) {
        console.log("connection DataBase failes");
    }
}

module.exports = connectdb