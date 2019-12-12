const express=require("express");
const app=express();
app.use(express.static("./dist"));


app.get("/",(req,res)=>{
	res.send("hello world vue.js");
})
app.listen(3000,()=>{
	console.log("请访问:http://127.0.0.1:3000/index.html")
}) 