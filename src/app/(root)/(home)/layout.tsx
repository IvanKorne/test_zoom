import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { ChildrenProps } from "@/lib/types";
import React from "react";

const HomeLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <NavBar />
      <div className="grid grid-cols-[auto,1fr]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
