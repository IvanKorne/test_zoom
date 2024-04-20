"use client";
import { homeItems } from "@/lib/data";
import React, { useState } from "react";
import MeetingHomeCard from "./MeetingHomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "sonner";
import { MeetingState } from "@/lib/types";
import { Copy, BadgeCheck } from "lucide-react";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingState>(undefined);

  const [vidValues, setVidValues] = useState({
    dateTime: new Date(),
    desc: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;
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

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          handleClick={() => createMeeting()}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          className="text-center"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-base">Create a description</label>
              <Textarea
                className="focus-visible:ring-0 focus-visible-ring-offset-0 bg-gray-900"
                onChange={(e) => {
                  setVidValues({ ...vidValues, desc: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base">Select Date and Time</label>
              <ReactDatePicker
                selected={vidValues.dateTime}
                onChange={(date) =>
                  setVidValues({ ...vidValues, dateTime: date! })
                }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full rounded bg-gray-900 px-2 py-1 "
              />
            </div>
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast("Link Copied");
          }}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          buttonIcon={React.createElement(Copy)}
          buttonText="Copy Meeting Link"
          className="text-center"
          icon={React.createElement(BadgeCheck)}
        ></MeetingModal>
      )}
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
