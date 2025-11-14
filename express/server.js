const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());
// app.use(express.static(__dirname+"/public"))

var student = [
  {
    id: 1,
    name: "tejal",
  },
  {
    id: 2,
    name: "teju",
  },
];

app.post("/formPage", (req, res) => {
  const { id, name } = req.body;
  const obj = { id: student.length + 1, name };

  student.push(obj);
  res.redirect("/");
});

app.get("/", (req, res) => {
  // res.send("home page")
  res.render("home", { student });
});

app.get("/delete", (req, res) => {
  const id = req.query.id;
  const ans = student.filter((el, i) => {
    return el.id != id;
  });
  student = ans;
  res.redirect("/");
});

app.get("/edit", (req, res) => {
  const id = req.query.id;
  const ans = student.find((el) => {
    return el.id == id;
  });
  res.render("edit", {ans});
});

app.post("/editData", (req, res) => {
  const { id, name } = req.body;
  // const obj={id:Number(id),name}
  // student=student.filter(e => e.id != id)
  // student.push(obj)

  student.forEach((el) => {
    if (el.id == id) {
      el.name = name;
    }
  });
  res.redirect("/");
});

app.listen(3001, () => {
  console.log("server");
});
