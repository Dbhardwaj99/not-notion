import { z } from "zod";

export const FormSchema = z.object({
    email: z.string().describe('Email').email({ message: 'Invalid email address' }),
    password: z.string().describe('Password').min(1, { message: 'Password must be at least 1 characters long' }),
});
