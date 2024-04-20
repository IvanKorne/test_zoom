"use client";
import {
  VideoPreview,
  useCall,
  DeviceSettings,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({ setSetup }: { setSetup: (value: boolean) => void }) => {
  const [micCamOn, setMicCamOn] = useState(false);
  const call = useCall();

  if (!call) throw new Error("useCall must be in stream component");

  useEffect(() => {
    if (micCamOn) {
      call?.microphone.disable();
      call?.camera.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [micCamOn, call?.microphone, call?.camera]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
      <h1 className="text-2xl md:text-3xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex items-center justify-center gap-2 flex-col">
        <label
          htmlFor=""
          className="flex items-center justify-center gap-3 text-lg"
        >
          <input
            type="checkbox"
            checked={micCamOn}
            onChange={(e) => {
              setMicCamOn(e.target.checked);
            }}
          />
          Join with Mic and Camera Off
        </label>
        <DeviceSettings />
      </div>
      <Button
        onClick={() => {
          call.join();
          setSetup(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
