import express, { Application } from "express";
import { DBconnection } from "./config/DBConnection";

import { userRouter } from "./routes/user.route";

export const app: Application = express()

app.use(express.json())

app.use('/api', userRouter)


DBconnection()