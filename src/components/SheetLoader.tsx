import React from "react";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Sidebar from "./Sidebar";
import SidebarSheet from "./SidebarSheet";

const SheetLoader = () => {
  return (
    <div className="md:hidden block">
      <Sheet>
        <SheetTrigger>
          <Menu className="mt-2" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Image src={logo} alt="logo" width={100} height={100} />
            </SheetTitle>
            <SheetDescription>
              <SidebarSheet />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetLoader;
