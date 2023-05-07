import { getroomById ,updateRoomById ,removeRoomById } from "@/controllers/roomController";
import dbConnect from "@/config/dbConnect";
import OnError from "@/middlewares/error"

export default function roomHandler(req,res){
if(req.method === "GET"){
    getroomById(req,res,OnError);
}else if(req.method === "PUT"){
   updateRoomById(req,res,OnError);
}else if(req.method === "DELETE"){
   removeRoomById(req,res,OnError);
}
else{
    res.status(405).end(); // Method Not Allowed
}
}

dbConnect();