import { compare } from "bcrypt"
import User from "../models/user.model"
import logger from "../utils/logger"
import { validatePassword } from "../service/user.service"
import { any } from "zod"
import { errorResponse } from "../utils/responses"
import { StatusCodes } from "http-status-codes"



export const createUserSessionHandler = async(req: Request, res: Response) => {
 
    try {
        const user = await validatePassword(req.body)
        if(!user){
            return errorResponse(res, StatusCodes.NOT_FOUND, `Email does not exist, try again!`)
        }
    } catch (error) {
        logger.error(`END: Failed to Create User Session`)
    }




}