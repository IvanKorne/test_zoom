"use client";
import React, { useState } from "react";
import { ParamProps } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";

const MeetingPage = ({ params }: ParamProps) => {
  const { user, isLoaded } = useUser();
  const [setup, setSetup] = useState(false);

  const { call, loading } = useGetCallById(params.id);

  if (!call || loading) return <Loader />;
  return (
    <div className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!setup ? <MeetingSetup setSetup={setSetup} /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </div>
  );
};

export default MeetingPage;
