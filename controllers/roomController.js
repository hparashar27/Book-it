import Room from "@/modals/roomModal";

const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ status: 'success', room });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: 'error', message: 'Something went wrong.' });
  }
};
 

const allRooms = async (req,res)=>{
    try{
        const rooms = await Room.find()
    res.status(200).json({
        status : "success",
        count : rooms.length,
        rooms
    })
    }catch(error){
        console.error(error);
        res.status(400).json({ status: 'error', message: 'Something went wrong.' });
    }
    
}

const getroomById = async (req,res) =>{
    try{
const getsingleRoom = await Room.findById(req.query.id);
if(!getsingleRoom){
    res.status(404).json({
        status : " the room with this id is not available "
    })
}
res.status(200).json({
    status: "success",
    getsingleRoom
})
    }catch(error){
console.log("something went wrong with the roomid details")
    }
}


const updateRoomById = async (req,res) =>{
    try{
let singleRoom = await Room.findById(req.query.id);
if(!singleRoom){
    res.status(404).json({
        status : " the room with this id is not available "
    })
}
   singleRoom = await Room.findByIdAndUpdate(req.query.body , req.body,{
     new : true,
     runVadilators : true,
     useFindandModify : false
   })

res.status(200).json({
    status: "success",
    singleRoom
})
    }catch(error){
console.log("something went wrong with the roomid details")
    }
}

const removeRoomById = async (req,res) =>{
    try{
const room = await Room.findById(req.query.id);
if(!room){
    res.status(404).json({
        status : " the room with this id is not available "
    })   
}
await room.remove();
res.status(200).json({
    status: "success",
    message: " the room is get deleted "
})
    }catch(error){
        console.log("something went wrong on the deletion of the room")
    }
}

export { allRooms, newRoom , getroomById ,updateRoomById, removeRoomById };