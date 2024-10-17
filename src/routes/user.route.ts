import { registerUser } from "../controllers/user.controller";
import { validate } from "../middleware/validateResource";
import { userSchema } from "../middleware/userSchema.validate";

import e from "express";

export const userRouter = e.Router()

userRouter.post('/register', validate(userSchema), registerUser)