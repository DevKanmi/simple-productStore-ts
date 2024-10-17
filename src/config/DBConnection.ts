import mongoose from "mongoose";
import { config } from "dotenv";
import logger from "../utils/logger";

config()

const uri : any = process.env.MONGO_URI

export const DBconnection = () =>{
    mongoose.connect(uri)
    .then(()=>{
        logger.info(`Successfully Connected to DB`)
    })
    .catch(error =>{
        logger.error(`Failed to connect to DB`, error)
        process.exit(1)
    })
}