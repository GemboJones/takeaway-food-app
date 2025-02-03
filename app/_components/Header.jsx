"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <nav className="flex justify-between items-center py-4 shadow-sm px-10 md:px-20 gap-4">
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={220} height={220} priority />
      </Link>

      <div className="hidden md:flex border gap-2.5 py-2 px-3 rounded-md bg-gray-100 w-96 ">
        <Search className="text-gray-400 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full outline-none "
        />
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 ">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </nav>
  );
};
