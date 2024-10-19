import { StatusCodes } from "http-status-codes";
import { Response } from "express";
import User from "../models/user.model";
import logger from "../utils/logger";
import { errorResponse } from "../utils/responses";
import { hashPassword, verifyPassword } from "../utils/userAuth.utils";
import { compare } from "bcrypt";

interface RegiserUserInput {
    name: string,
    email: string,
    password: string
}
export const registerUserService = async({name, email, password} : RegiserUserInput)=>{
    try {
        const existinguser = await User.findOne({email})
        if(existinguser){
            return {success: false, message: `User already exists, logIn!`}
        }
        const hashed = await hashPassword(password)
        const newUser = await User.create({
            name,
            email,
            password: hashed
       })

       return {success: true, user: newUser}
    } catch (error: any) {
        logger.error(`END: Register User Service Failed`)
        throw new Error("Error while creating user: " + error.message);
    }
}


export const validatePassword = async(
    {email, password}:

    {email: string, password: string}) => {
    const user = await User.findOne({email})
    if(!user){
        return false
    }

    const isValid = await compare(password, user.password)
    if(!isValid){
        return false
    }

    return user
}