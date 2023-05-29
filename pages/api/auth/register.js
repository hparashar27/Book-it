import {registerNewUser } from "@/controllers/authController";
import dbConnect from "@/config/dbConnect";
import OnError from "@/middlewares/error"

export default function roomHandler(req,res){
if(req.method === "PUT"){
   registerNewUser(req,res,OnError);
}
else{
    res.status(405).end(); // Method Not Allowed
}
}

dbConnect();