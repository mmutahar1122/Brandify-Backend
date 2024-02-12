
const Errhandler = async (err,req,res,next)=>{
try {
    const error_message=err?.error_message || 401;

    const status= err?.status || 400;

    console.log("--err--",error_message);

    return res.status(status).json(error_message);
    
} catch (error) {

    res.status(400).json("internal server error")
}
}
module.exports = Errhandler