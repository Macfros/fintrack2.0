import React from "react";
import {Input} from "@nextui-org/react";

interface EmailInputProps{
    checkEmail: (isInvalid: boolean) => void;
    handleData : (data: string | (readonly string[] & string) | undefined) => void;
}

const  EmailInput : React.FC<EmailInputProps> = ({checkEmail, handleData}) => {

  const [value, setValue] = React.useState<string | (readonly string[] & string) | undefined>("");

  const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;
    handleData(value);
    return validateEmail(value) ? false : true;

  }, [value]);

  React.useEffect(() => {
    checkEmail(isInvalid);
  }, [isInvalid, checkEmail]);

  return (
    <Input
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage="Please enter a valid email"
      onValueChange={setValue}
      className="w-full"
    />
  );
}

export default EmailInput;  
