import express, { Application, NextFunction, Request, Response } from "express"
import cors from 'cors'
import router from "./app/routes";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
const app: Application = express();
app.use(cors());
 app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req: Request, res: Response)=> {
    res.send({
        Message: "Home service......!" 
    })
})

app.use('/api', router)


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})

export default app;