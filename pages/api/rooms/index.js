 const allRooms = (req,res)=>{
    res.status(200).json({
        status : "success",
        message : " All rooms"
    })
}
export default allRooms;