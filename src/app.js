const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port= process.env.PORT || 6900;

// how to connect static path in express 
const staticPath=path.join(__dirname,"../public"); 
const templetePath=path.join(__dirname,"../templete/views"); 
const partialpath=path.join(__dirname,"../templete/partials"); 

app.set("view engine","hbs");
app.set("views",templetePath);
hbs.registerPartials(partialpath);



app.use(express.static(staticPath))


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("Error");
});



// listen app call fucntion 

app.listen(port,()=>{
    console.log(`the port is ready to lunch ${port}`);
})









