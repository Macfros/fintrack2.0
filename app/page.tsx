import {Button} from "@nextui-org/button";
import getUser from "./api/auth/[...nextauth]/Hooks/getUser"
import NavbarMain from "./components/Navbar/NavbarMain";

export default async function Home() {
    const user = await getUser();
  
  console.log("user:"+user?.email);
  return (
    <div>
    <NavbarMain user={user}/>
      {user ? (<h1>Hello {user.name} <Button color="success">
      Button
    </Button></h1>) : (<h1>No User</h1>)}
    </div>
  )
}
