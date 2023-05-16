import Room from "@/modals/roomModal";
import ErrorHandler from "@/utils/errorHandler";
import catchAsyncError from "@/middlewares/catchAsyncError";
import ApiFeatures from "@/utils/apiFeatures"


const newRoom = catchAsyncError(async (req,res,next) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ status: 'success', room });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: 'error', message: 'Something went wrong.' });
    // return next(new ErrorHandler("Something went wrong.",404));
  }
});
 

const allRooms = catchAsyncError(async (req,res,next)=>{
    try{
        const resPerPage = 4;
        const roomsCount = await Room.countDocuments();
        const apiFeatures = new ApiFeatures(Room.find(),req.query).search().filter();
        apiFeatures.pagination(resPerPage);
    const rooms = await apiFeatures.query;
    const filteredRoomsCount = rooms.length;
    res.status(200).json({
        status : "success",
        filteredRoomsCount,
        roomsCount,
        resPerPage,
        rooms
    })
    }catch(error){
        console.error(error);
        res.status(400).json({ status: 'error', message: 'Something went wrong.' });
        // return next(new ErrorHandler("Something went wrong.",404));

    }
})

const getroomById = catchAsyncError ( async (req,res,next) =>{
    try{
const getsingleRoom = await Room.findById(req.query.id);
if(!getsingleRoom){
    // res.status(404).json({
    //     status : " the room with this id is not available "
    // })
return next(new ErrorHandler("Something went wrong.",404));

}
res.status(200).json({
    status: "success",
    getsingleRoom
})
    }catch(error){
console.log("something went wrong with the roomid details")

    }
})

const updateRoomById = catchAsyncError( async (req,res,next) =>{
    try{
        let room = await Room.findById(req.query.id);
        if (!room) {
            return next(new ErrorHandler('Room not found with this ID', 404))
        }
        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
    
        res.status(200).json({
            success: true,
            room
        })
    
    }catch(error){
        console.log("something went wrong !")
    }
})

const removeRoomById = catchAsyncError( async (req,res,next) =>{
    try{
const RoomToDelete = await Room.findById(req.query.id);
if(!RoomToDelete){
    // res.status(404).json({
    //     status : " the room with this id is not available "
    // })  
    return next(new ErrorHandler("Something went wrong.",404));
}
await RoomToDelete.deleteOne();
res.status(200).json({
    status: "success",
    message: " the room is get deleted "
})
    }catch(error){
    console.log("something went wrong on the deletion of the room")
    }
})

export { allRooms, newRoom , getroomById ,updateRoomById, removeRoomById };