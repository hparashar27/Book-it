const mongoose = require("mongoose");
const rooms =  require('../data/rooms');
const Room = require("../modals/roomModal");
const dbConnect = require("../config/dbConnect");

dbConnect();

const seedRooms = async () =>{
    try{
await Room.deleteMany();
console.log("Delete many rooms");
// insert all the data
await Room.insertMany(rooms);
console.log("insert all the data");
process.exit();
    }catch(error){
console.log("Something went wrong !")
    }
}
seedRooms()