import React from "react";
import CallList from "@/components/CallList";

const Upcoming = () => {
  return (
    <div className="flex flex-col size-full p-4 gap-10 ">
      <h1 className="text-2xl md:text-3xl font-semibold">Upcoming</h1>
      <CallList type="upcoming" />
    </div>
  );
};

export default Upcoming;
