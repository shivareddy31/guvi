const express=require("express")
const bodyparser=require("body-parser");
const { request, response } = require("express");
const roomdetails =require("./room-details")
const app=express();
app

//gets all the rooms
.get("/room",(request,response)=>{
    response.status(200).json({
    data:roomdetails,
});
})
//allows you to book a room, booking room has to be done in accordance with json retrieved from get rooms method
.post("/room",(request,response)=>{
    const newroom=request.body;
    roomdetails.push(newroom)
    response.send(`new room is added to database`)
        })
//searches for room when id is given in parameters
.get("/room/:id",(request,response)=>{
let { id }=request.params;
let foundroom = roomdetails.find((room)=> room.id==id);

    response.send(foundroom)
})
//deletes the room when given id
.delete("/room/:id", (request,response)=>{
    let { id }=request.params;
    let foundroom =roomdetails.find((room)=>room.id==id);
    roomdetails.pop(foundroom)
    response.send(`room is deleted`)
})
//used to add updates to room, booked,timing etc..
.use(bodyparser.json())
.patch("/room/:id",(request,response)=>{
    let { id }=request.params;
    
    const{ status, CustomerName, Date, StartTime, EndTime }=request.body;
    let room =roomdetails.find((room)=>room.id==id)
    /* if(status){
        room.status=status;
    } */
    if(CustomerName){
        room.CustomerName=CustomerName;
    }
    if(Date){
        room.Date=Date;
    }
    
    if(EndTime){
        room.EndTime=EndTime;
    }

})
.listen(8000)