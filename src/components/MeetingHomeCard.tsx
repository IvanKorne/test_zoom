"use client";
import { MeetingHomeCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

const MeetingHomeCard = ({
  title,
  desc,
  icon,
  handleClick,
  className,
}: MeetingHomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-orange-500 cursor-pointer min-h-[260px] xl:max-w-[270px] w-full flex flex-col justify-between rounded-xl p-6",
        className
      )}
      onClick={handleClick}
    >
      <div className="p-1 bg-white/40 w-fit rounded flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm text-gray-200 font-semibold">{desc}</p>
      </div>
    </div>
  );
};

export default MeetingHomeCard;
