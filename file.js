// const fs = require("fs");

// fs.writeFileSync("b.txt", "welcome");

// fs.appendFileSync("b.txt", " Tejal");

// fs.renameSync("b.txt", "c.txt");

// a = fs.readFileSync("c.txt", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
// });
// console.log(a.toString());

// fs.unlinkSync("c.txt")

// const fs = require("fs");

// fs.writeFile("b.txt", "Welcome", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
// });

// fs.appendFile("b.txt","Tejal",(err,data)=>{
//   if(err){
//   return  console.log(err)
//   }
// })

// fs.rename("b.txt","c.txt",(err,data)=>{
//   if(err){
//     console.log(err)
//   }
// })

// fs.readFile("c.txt",(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//    console.log(data.toString())
// })

// fs.unlink("c.txt",(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
// })

const {add,PI}=require("./aa.js")
console.log(add(2,3))