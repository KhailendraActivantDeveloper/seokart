require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
export const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from './middleware/error';
import userRouter from './routes/user.route';
import scrapeRouter from './routes/scraper.route';

//body parser
app.use(express.json({ limit: "50mb" }));

// cookes parser
app.use(cookieParser());

app.use(
    cors({
        origin : ['http://localhost:3000'],
        credentials: true
    })
)

app.use('/api/v1', userRouter);
app.use('/api/v1', scrapeRouter);

app.get("/test", (req: Request, res: Response, next:NextFunction)=>{
    res.status(200).json({
        success: true,
        msg: "API working"
    });
});

app.all("*",(req: Request, res: Response, next:NextFunction)=>{
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
})

app.use(ErrorMiddleware);