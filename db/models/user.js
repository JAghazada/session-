const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },    
    pass:{
        type:String,
        required:true
    }
},{collection:"users",timestamps:true})
module.exports=mongoose.model("userSchema",userSchema)