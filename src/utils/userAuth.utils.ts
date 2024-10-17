import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import logger from './logger'
import { ObjectId } from 'mongoose'

config()

const JWT_SECRET : any = process.env.JWT
const jwt_lifetime = process.env.lifetime


export const hashPassword = async(password: string) =>{
    const saltRounds = 10
    return await bcrypt.hash(password,saltRounds)
}

export const verifyPassword = async(pass1: string, pass2: string) =>{
    return await bcrypt.compare(pass1, pass2)

}


export const createtoken = (id: ObjectId) =>{
    const token = jwt.sign({id}, JWT_SECRET, {expiresIn: jwt_lifetime})
    return token
}

export const validToken = (token: string) =>{
    return jwt.verify(token, JWT_SECRET)
}
