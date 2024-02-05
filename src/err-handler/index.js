
const err_handler = async (err,req,res)=>{
try {
    const error_message=err.err;
    const status= err.status
    console.log("--err--",err);
    return res.status(status).json(error_message)
} catch (error) {
    
}
}