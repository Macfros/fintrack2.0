import { auth } from "@/auth";

const getUser = async() => {
    const session = await auth();
        
    if(!session?.user) return null;

    const user = prisma?.user.findFirst({
        where: {
            email: session?.user?.email as string
        }
    });

    return user; 
}

export default getUser;
