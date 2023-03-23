const userSchema = require("../db/models/user")
const registerController =async (req,res)=>{
    const {email,pass} = req.body
    if(email!==undefined && pass !==undefined){
        const createdUser = new userSchema(req.body)
        createdUser.save() .then(resp => {
           return res.json({msg:"register was succesfull"})

        })
        .catch(err => {
            return res.json({msg:"error was occured"})

        })        
    }
    else return res.json({msg:"error was occured2"})
    
}
module.exports = registerController