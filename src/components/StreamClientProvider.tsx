import { ChildrenProps } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
import {
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

const StreamClientProvider = ({ children }: ChildrenProps) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    const { user, isLoaded } = useUser();
    if (!user || !isLoaded) throw new Error("Unauthorized");
    if (!apiKey) throw new Error("API Error");
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.username || user.fullName,
        image: user.imageUrl,
      },
      tokenProvider: async () => {},
    });
  }, []);
  return <StreamVideo client={videoClient}></StreamVideo>;
};

export default StreamClientProvider;
