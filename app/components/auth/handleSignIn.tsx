'use server'

import { signIn } from "@/auth"

interface Props{
    email: string | undefined;
}

export async function handleSignIn({ email }: { email: string | undefined }){
  //console.log("email in handleSignIn:"+ email);
  try {
      await signIn("nodemailer", { email });
      // Handle success (e.g., show a success message or close the modal)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Sign-in error", error);
    }
  };
