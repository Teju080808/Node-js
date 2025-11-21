
const mongoose=require("mongoose")

const userModel=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const user=mongoose.model("user123",userModel)
module.exports=user