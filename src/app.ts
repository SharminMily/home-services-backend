import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { UserRouter } from "./app/modules/User/user.routes";
const app: Application = express();


app.use(cors());

app.get('/', (req: Request, res: Response)=> {
    res.send({
        Message: "Home service......!" 
    })
})

app.use('/api/users', UserRouter)
export default app;