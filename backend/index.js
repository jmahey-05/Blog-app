import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:4000',
  'http://localhost:3001',
  'http://localhost:5173', 
  'https://blog-app-ten-omega-23.vercel.app' // Your deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      console.log('Blocked origin:', origin); // Debug log
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.options('*', cors());


app.use(express.json());
app.use(cookieParser());
const db = async() =>{
    try{
        const mongo = process.env.DB;
        await mongoose.connect(mongo);
        console.log("database connected");

    }catch(error){
        console.log(error)
    }
};
db();


app.use('/ping', (req, res)=>{
    res.json({
        message: "Service is live"
    });
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});
 
app.listen(3000, ()=>{
    console.log('Server is running on port 3000!');
})