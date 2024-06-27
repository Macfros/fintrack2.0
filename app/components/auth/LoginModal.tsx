import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { GoogleButton } from "./GoogleButton";
import { FcGoogle } from "react-icons/fc";
import EmailInput from "./EmailInput";
import { useState } from "react";
import {handleSignIn} from "./handleSignIn";

interface LoginModalProps{
    onClose: () => void;
    isOpen: boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({isOpen, onClose}) => {
    const [disabled, setDisabled] = useState<boolean>(true); 
    const [email, setEmail] = useState<string>();

    const handleDisabled = (isInvalid: boolean) => {
        setDisabled(isInvalid);
      };

    const handleFormValue = (data: string | (readonly string[] & string) | undefined) => {
        setEmail(data);
        console.log("email in Parent: "+data);
    }

    const SignInWithMagicLinks = () => {
        handleSignIn({email});
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}  className="w-full">
        <ModalContent>
        {(onClose) => (
            <div>
                <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
                <ModalBody>
                    <div>
                     <Button size="lg" className="w-full" onClick={() => GoogleButton()} color="success" href="#" variant="flat">
                        Sign in using Google Account<FcGoogle size={20}/>
                     </Button>
                    </div>

                    <div className="flex items-center w-full my-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-600 font-semibold">OR</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div>
                       <EmailInput checkEmail = {handleDisabled} handleData={handleFormValue}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                    
                    <Button isDisabled = {disabled} color="primary" onPress={SignInWithMagicLinks}>
                        Send Link
                    </Button>
                    
                </ModalFooter>
            </div>
        )}
    </ModalContent>
    </Modal>
    )
}

export default LoginModal;