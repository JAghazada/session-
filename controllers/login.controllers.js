const userSchema = require("../db/models/user")
const loginController =async (req,res)=>{
    const {email,pass} = req.body
    if(email !== undefined  && pass !==undefined){
        const user = await userSchema.findOne({email})
        console.log(user._id)
        req.session.userID = user._id
        res.json(user)
    }
    else {   
        return res.json({msg:"error was occured2"})}
}
module.exports = loginController