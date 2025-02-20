import express, { urlencoded } from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 7000;
import connectDB from './config/connectDB';
connectDB();
import userRouters from './routes/user.routes';
import { erroMiddleware } from './middleware/ErrorMiddleware';
import restaturantRouters from './routes/restaurant.routes';
import menuRouters from './routes/menu.routes';
import orderRouter from './routes/order.routes';




// Cors configurations : 
const corsConfig = {
    origin: `http://localhost:5173`,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-type', 'Authorization']
}



// Middlewares : 
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes : 
app.use('/api/user', userRouters);
app.use('/api/restaurant', restaturantRouters);
app.use('/api/menu', menuRouters);
app.use('/api/order', orderRouter);



// Error handling middleware : 
app.use(erroMiddleware);






app.listen(PORT, () => {
    console.log(`Server is listening at PORT http://localhost:${PORT}`);
})