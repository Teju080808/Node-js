const express = require("express");
const app = express();
const db = require("./config/db");
const user = require("./userModel/userModel");
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());

app.get("/", async (req, res) => {
  const userr = await user.find({});
  // console.log(userr)
  // res.send(userr)
  res.render("home", { userr });
});

app.post("/insertData", async (req, res) => {
  const data = await user.create(req.body);
  res.send(data);
});

app.get("/delete", async (req, res) => {
  await user.findByIdAndDelete(req.query.id);
  res.redirect("/");
});

app.get("/edit", async (req, res) => {
  const userData = await user.findById(req.query.id);
  res.render("edit", { userData });
});

app.post("/editData",async(req,res)=>{
    await user.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/")
})

app.listen(3001, () => {
  console.log("server listen");
});
