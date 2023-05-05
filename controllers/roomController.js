import { allRooms } from "@/pages/api/rooms.js";
import nc from "next-connect";

const handler = nc();
handler.get(allRooms);

export default handler