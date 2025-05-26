import express, { Application, Request, Response } from "express"
import cors from 'cors'
import router from "./app/routes";


const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req: Request, res: Response)=> {
    res.send({
        Message: "Home service......!" 
    })
})

app.use('/api', router)

export default app;