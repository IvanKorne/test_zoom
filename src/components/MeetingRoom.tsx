"use client";
import { CallLayout } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Loader, Users2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayout>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const searchParams = useSearchParams();
  const isPersonal = !!searchParams.get("personal");

  const { useCallCallingState } = useCallStateHooks();
  const callState = useCallCallingState();

  if (callState !== CallingState.JOINED) return <Loader />;
  const CallLayouts = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <div className="relative h-screen w-full overflow-hidden p-4 ">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full items-center max-w-[1000px]">
          <CallLayouts />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            " block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        <CallControls />
        <DropdownMenu>
          <DropdownMenuTrigger className="p-3 m-0 rounded-full hover:bg-gray-900/80">
            <LayoutList />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item) => (
              <DropdownMenuItem
                className="cursor-pointer"
                key={item}
                onClick={() => setLayout(item.toLowerCase() as CallLayout)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button
          className=" p-3 m-0 rounded-full hover:bg-gray-900/80"
          onClick={() => setShowParticipants((prev) => !prev)}
        >
          <Users2 />
        </button>
        {!isPersonal && <EndCallButton />}
      </div>
    </div>
  );
};

export default MeetingRoom;
