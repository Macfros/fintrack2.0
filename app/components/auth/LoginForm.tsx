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
import { LoginSchema } from "@/app/schema";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";

interface AppProps{
   
}

const LoginForm: React.FC<AppProps> = () => {

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof LoginSchema>) =>{
        setLoading(true);
        console.log(data);

    }

    const {pending} = useFormStatus();
    const [loading, setLoading] = useState(false);

    return (
        <CardWrapper
        label="Login to your account"
        title="Login"
        backButtonHref="/auth/register"
        backButtonLabel="Don't have an account? Create now!">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
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
                    </div>
                    <Button type="submit" className="w-full" disabled={pending}>
                        {loading ? "Loading..." : "Login"}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm;