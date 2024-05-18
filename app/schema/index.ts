import * as z from "zod";

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1,{
        message: "Please enter your name"
    }),
    password: z.string().min(8, {
        message: "Password should be min of 8 characters"
    }),
    confirmPassword: z.string().min(8,{
        message: "Password should be min of 8 characters"
    })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"] // This specifies the path to the field in the error message
});


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(1, {
        message: "Please Enter a password"
    }),
});