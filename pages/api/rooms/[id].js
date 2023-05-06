import { getroomById ,updateRoomById ,removeRoomById } from "@/controllers/roomController";
import dbConnect from "@/config/dbConnect";

export default function roomHandler(req,res){
if(req.method === "GET"){
    getroomById(req,res);
}else if(req.method === "PUT"){
   updateRoomById(req,res);
}else if(req.method === "DELETE"){
   removeRoomById(req,res);
}
else{
    res.status(405).end(); // Method Not Allowed
}
}

dbConnect();