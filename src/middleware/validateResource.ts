import { Request, Response, NextFunction } from "express"
import {z, AnyZodObject, any} from "zod"
import { errorResponse } from "../utils/responses"
import { StatusCodes } from "http-status-codes"

export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
        body: req.body,
        query: req.query,
        params: req.params
    });
    console.log(result.success)
    if (!result.success) {
        console.error("Validation failed:", result.error.format()); // Log detailed error for debugging
        return errorResponse(res, StatusCodes.BAD_REQUEST, {
            message: "Invalid input",
            details: result.error.errors.map((err) => ({
                field: err.path.join('.'),
                message: err.message
            }))
        });
    }
    
    next();
};

