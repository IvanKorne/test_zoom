"use client";
import { sidebarItems } from "@/lib/data";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Copyright } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-900 border-r border-white h-screen pt-12 px-10 hidden md:block">
      <div className="flex flex-col gap-5  ">
        {sidebarItems.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={cn(
              "flex gap-5  justify-between py-3 px-5 rounded-xl  hover:bg-blue-700",
              pathname === link.url && "bg-blue-700"
            )}
          >
            {link.icon}
            <h1>{link.label}</h1>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 absolute bottom-0 left-4 text-gray-600">
        <Copyright className="size-4" />
        <h1 className="text-xs">Created by Ivan Korneychuk</h1>
      </div>
    </div>
  );
};

export default Sidebar;
