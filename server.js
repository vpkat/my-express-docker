var express=require("express");
var bodyParser=require('body-parser');
var routerProduct=require("./routes/product")

var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-methods", "GET,PUT,POST,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use("/product",routerProduct)

app.get("/",(Request,Response)=>{

    Response.send("Welcome to my backend");
})

app.listen(9797,'0.0.0.0',()=>{
    console.log("Server started on port 9797");
})