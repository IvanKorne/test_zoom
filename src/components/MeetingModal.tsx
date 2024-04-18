import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MeetingModalProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  icon,
  buttonIcon,
  children,
  handleClick,
  buttonText,
  className,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6  px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {icon && <div className="flex justify-center">{icon}</div>}
          <h1 className={cn("text-3xl font-bold ", className)}>{title}</h1>
          {children}
          <Button
            className={
              "bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onClick={handleClick}
          >
            {buttonIcon} &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
