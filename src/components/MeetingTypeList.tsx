"use client";
import { homeItems } from "@/lib/data";
import React, { useState } from "react";
import MeetingHomeCard from "./MeetingHomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const createMeeting = () => {};

  const MeetingFunction = [
    () => {
      setMeetingState("isInstantMeeting");
    },
    () => {
      setMeetingState("isScheduleMeeting");
    },
    () => {
      router.push("/recording");
    },
    () => {
      setMeetingState("isJoiningMeeting");
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-5 ">
      {homeItems.map((item) => (
        <MeetingHomeCard
          key={item.desc}
          className={item.className}
          desc={item.desc}
          title={item.title}
          icon={item.icon}
          handleClick={MeetingFunction[item.handleClick]}
        />
      ))}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        className="text-center"
        handleClick={() => createMeeting()}
        onClose={() => setMeetingState(undefined)}
        buttonText="Start Meeting"
        title="Start an Instant Meeting"
      />
    </div>
  );
};

export default MeetingTypeList;
