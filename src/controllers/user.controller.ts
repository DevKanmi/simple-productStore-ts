import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import logger from "../utils/logger";
import { successResponse, errorResponse } from "../utils/responses";
import { registerUserService } from "../service/user.service";
import { createUserInput } from "../middleware/userSchema.validate";

export const registerUser = async(req: Request<{}, {}, createUserInput["body"]>, res: Response): Promise<any> =>{
    const {name, email, password } = req.body
    console.log(req.body)
    try{
        logger.info(`START: Attemping Creating a User`)
        const newUser = await registerUserService({name, email, password})

        if(!newUser.success){
            return errorResponse(res, StatusCodes.BAD_REQUEST, newUser.message)
        }

        logger.info(`END: User Successfully Created`)
        return successResponse(res, StatusCodes.CREATED, `User Registered Successfully`, newUser.user)
    }

    catch(error){
        logger.error(`END: User Registration Failed`, error)
    }
}