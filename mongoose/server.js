const express=require("express")

const db=require("./config/db")
const app=express()

app.listen(5000,()=>{
    console.log("server")
})