import { roomById } from "@/controllers/roomController";
import dbConnect from "@/config/dbConnect";

export default function roomHandler(req,res){
if(req.method === "GET"){
    roomById(req,res);
}else{
    res.status(405).end(); // Method Not Allowed
}
}

dbConnect();