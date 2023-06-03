import {registerNewUser } from "@/controllers/authController";
import dbConnect from "@/config/dbConnect";
import OnError from "@/middlewares/error"

export default function roomHandler(req,res){
if(req.method === "POST"){
   registerNewUser(req,res);
}
else{
    res.status(404).end(); // Method Not Allowed
}
}

dbConnect();