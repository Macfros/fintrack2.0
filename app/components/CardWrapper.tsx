"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from "@/components/ui/card";
import AuthHeader from "@/app/components/auth/AuthHeader";
import BackButton from "@/app/components/auth/BackButton";

interface AppProps{
    label: string,
    title: string,
    backButtonHref: string,
    backButtonLabel: string,
    children: React.ReactNode,
}

const App: React.FC<AppProps> = ({label,title,backButtonHref,backButtonLabel,children}) => {
    return (
        <Card className="xl:w-1/4 md:w-1/2 shadow-md">
            <CardHeader>
                <AuthHeader label={label} title={title} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}/>
            </CardFooter>
        </Card>
    )
}

export default App;