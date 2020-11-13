const fs=require("fs");
const path=require("path"); 
const express=require("express");
const app=express();
const date = require('date-and-time');
const { response } = require("express");
const now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');

app.get("/",(request,response)=>{
    response.json({
        time:now
    });
});

fs.open("current_timestamp.txt","w",function(err,file){
    if(err)throw err;
    console.log("created file")
    })
     fs.appendFile("current_timestamp.txt",now, function(err){
       if(err){
           console.log(err)
       }
    }) 
    app.get("/files",(request,response)=>{
        response.send("current_timestamp.txt")
    })
    app.listen(8000);