import express from "express";
//import protectRoute from "../middlewares/protectRoute.js";
import { verifyToken } from '../utils/verifyUser.js';
import { getMessages, sendMessage, getConversations } from "../controllers/messageController.js";
//import {sendMessage, getMessages } from "../controllers/messageController.js";
const router = express.Router();

router.get("/conversations", verifyToken, getConversations);
router.get("/:otherUserId", verifyToken, getMessages);
router.post("/", sendMessage);
//router.post("/", sendMessage);
export default router;