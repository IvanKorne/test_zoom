"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: "https://app.posthog.com",
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthProvider> {children}</PostHogAuthProvider>
    </PostHogProvider>
  );
}

const PostHogAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useAuth();
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0].emailAddress,
        name: userInfo.user.fullName,
      });
    } else if (!user.isSignedIn) {
      posthog.reset();
    }
  }, [userInfo, user]);

  return children;
};
