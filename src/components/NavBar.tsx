"use client";
import Image from "next/image";
import React from "react";
import { ToggleTheme } from "./ToggleTheme";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import logo from "../assets/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between  w-full px-4 py-2 border-b border-white">
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={100} />
      </Link>
      <div className="flex gap-5 px-4 items-center">
        <ToggleTheme />
        <div>
          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
