import React from "react";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center h-screen">
      <Loader2 className="animate-spin size-10" />
    </div>
  );
};

export default Loader;
