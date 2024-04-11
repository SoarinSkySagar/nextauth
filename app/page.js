"use client"
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <button onClick={
        async () => {
          const res = await signIn("github", {

          })
          console.log(res)
        }

      }>
        Sign In with GitHub
      </button>
    </>  
  );
}
