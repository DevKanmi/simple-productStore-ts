import { Request } from "express";

// Extend the Request interface to add the 'validates' property
declare module "express-serve-static-core" {
    interface Request {
        validated?: any; }
}