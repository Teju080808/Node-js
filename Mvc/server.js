
const express=require("express")
const app=express()
const db=require("./config/db")
const user = require("./userModel/userModel")
app.use(express.json())

app.post("/insertData",async(req,res)=>{
    const data=await user.create(req.body)
    res.send(data)
})

app.get("/",async(req,res)=>{
    const user1=await user.find({})
    res.send(user1)
})

app.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const data=await user.findByIdAndDelete(id)
    res.send("success")
})

app.patch("/:id",async(req,res)=>{
    const id=req.params.id
    const data=await user.findByIdAndUpdate(id,req.body)
    res.send(data)
})

app.listen(3001,()=>{
    console.log("server listen")
})