import { config } from "dotenv";
import { app } from "./src/app";
import logger from "./src/utils/logger";

config()

const PORT : any = process.env.PORT

app.listen(PORT, () =>{
    logger.info(`Server is Running on http://localhost:${PORT}`)
})