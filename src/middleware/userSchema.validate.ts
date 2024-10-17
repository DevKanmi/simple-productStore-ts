import { TypeOf, z } from "zod";

export const userSchema = z.object({
    body: z.object({

        email: z.string().email({ message: 'Invalid Email' }).trim().toLowerCase(),
        
        name: z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Only Strings are allowed'
            }).min(1, { message: 'Name must not be less than 1' }).trim().toLowerCase(),
        
        password: z.string().trim(),
    })
});

export type createUserInput = TypeOf< typeof userSchema>


