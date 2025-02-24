"use client"

import CardWrapper from "@/app/components/CardWrapper";
import{
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/app/schema";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";

interface AppProps{
   
}

const RegisterForm: React.FC<AppProps> = () => {

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = (data: z.infer<typeof RegisterSchema>) =>{
        setLoading(true);
        console.log(data);

    }

    const {pending} = useFormStatus();
    const [loading, setLoading] = useState(false);

    return (
        <CardWrapper
        label="Create an account"
        title="Register"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account. Login Here">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Your Name"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder="username@gmail.com"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="********"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="********"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={pending}>
                        {loading ? "Loading..." : "Register"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm;