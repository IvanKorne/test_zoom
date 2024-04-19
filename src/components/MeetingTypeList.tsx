"use client";
import { homeItems } from "@/lib/data";
import React, { useState } from "react";
import MeetingHomeCard from "./MeetingHomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "sonner";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const [vidValues, setVidValues] = useState({
    dateTime: new Date(),
    desc: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!user || !client) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Call error");
      const startsAt =
        vidValues.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = vidValues.desc || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);
      toast("Meeting Created");
      if (!vidValues.desc) {
        router.push(`/meeting/${call.id}`);
      }
    } catch (err) {
      toast("Failed to create Meeting");
    }
  };

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
