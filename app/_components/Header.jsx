"use client"
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-sm fixed w-full top-0 left-0 z-20 ">
      <Image src={"/next.svg"} alt="logo" width={150} height={150} />

      <div className="hidden md:flex border p-2 rounded-md bg-gray-200 w-96 ">
        <input type="text" className="bg-transparent w-full outline-none " />
        <Search />
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5 ">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Signup</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};
