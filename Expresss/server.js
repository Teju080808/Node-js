
const express=require("express")

const app=express()

app.set("view engine" , "ejs")
app.use(express.urlencoded())

var student=[
  {
    id:1,
    name:"tej"
  },{
    id:2,
    name:"teju"
  }
]

app.get("/",(req,res)=>{
  res.render("home",{student})
})

app.post("/insertData",(req,res)=>{
  const {id,name}=req.body
  const obj={id:student.length+1,name}
  student.push(obj)
  res.redirect("/")
})

app.get("/delete",(req,res)=>{
  const id=req.query.id
  const ans = student.filter( e => e.id != id)
  student=ans
  res.redirect("/")
})

app.get("/edit",(req,res)=>{
  const id=req.query.id
  const ans=student.find(e => e.id == id)
  res.render("edit",{ans})
})

app.post("/editData",(req,res)=>{
  const {id,name}=req.body
  const index=student.findIndex(e=> e.id == id)
  if(index != -1){
    student[index].name=name
  }
  res.redirect("/")
})

app.listen(3001,()=>{
  console.log("server listen")
})