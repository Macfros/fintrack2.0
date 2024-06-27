
interface AppProps{
   children: React.ReactNode
}

const AuthLayout: React.FC<AppProps> = ({children}) => {
    return (
        <section className="w-full">
            <div className="h-screen flex items-center justify-center">
            {children}
        </div>
        </section>   
    )
}

export default AuthLayout;