
const err_handler = async (err,req,res)=>{
try {
    const error_message=err.err;
    const status= err.status
    console.log("--err--",err);
    req.err = error_message;
    console.log("req.err-=",req.err)
    return res.status(status).json(error_message)
} catch (error) {
    res.status(400).json("internal server error")
}
}