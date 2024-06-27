import { Button } from "@nextui-org/button";
import { IconType } from "react-icons/lib";


interface ButtonProp{
    func: () => void;
    title: string;
    icon: IconType;
}

export const ButtonProp: React.FC<ButtonProp> = ({ func, title, icon: Icon }) => {
    return(
        <Button
        onClick={func}
        endContent={<Icon/>}>
            {title}
        </Button>
    )
}