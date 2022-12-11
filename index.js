const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/name",(req,res)=>{
    res.send("Yogendra is my name")
})

app.listen(8081,()=>{
    console.log("we are listeining on port 8081")
})