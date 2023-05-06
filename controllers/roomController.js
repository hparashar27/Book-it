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

const roomById = async (req,res) =>{
    try{
const singleRoom = await Room.findById(req.query.id);
if(!singleRoom){
    res.status(404).json({
        status : " the room with this id is not available "
    })
}
res.status(200).json({
    status: "success",
    singleRoom
})
    }catch(error){
console.log("something went wrong with the roomid details")
    }
}

export { allRooms, newRoom ,roomById};