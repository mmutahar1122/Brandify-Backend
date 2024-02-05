
const User = async (req, res)=>{

    try {
        const user = req.user;
        console.log(user);
        res.status(200).json(user);

        
    } catch (error) {
        console.log(`error from user file in backen ${error}`)
    }
}
module.exports = User