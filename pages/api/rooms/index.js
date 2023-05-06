import { allRooms, newRoom } from '@/controllers/roomController';
import dbconnect from "@/config/dbConnect.js"

export default function handler(req, res) {
  if (req.method === 'GET') {
    allRooms(req, res);
  } else if (req.method === 'POST') {
    newRoom(req, res);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

dbconnect();