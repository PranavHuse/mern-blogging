import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { v2 as cloudinary } from "cloudinary";
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import messageRoutes from './routes/messageRoutes.js';
import { app, server } from "./socket/socket.js";
import cors from "cors";
dotenv.config();



//const app = express();
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});

app.use('/api/user',userRoutes)  ;
app.use('/api/auth',authRoutes) ;
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/messages', messageRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });