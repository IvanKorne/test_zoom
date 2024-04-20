import { LucideProps } from "lucide-react";
import React, { FunctionComponentElement } from "react";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type MeetingHomeCardProps = {
  title: string;
  desc: string;
  icon: FunctionComponentElement<LucideProps>;
  className?: string;
  handleClick: () => void;
};

export type MeetingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: React.ReactNode;
  icon?: FunctionComponentElement<LucideProps>;
  buttonIcon?: FunctionComponentElement<LucideProps>;
};

export type ParamProps = {
  params: {
    id: string;
  };
};

export type MeetingState =
  | "isScheduleMeeting"
  | "isJoiningMeeting"
  | "isInstantMeeting"
  | undefined;

export type CallLayout = "grid" | "speaker-left" | "speaker-right";

export type CallType = {
  type: "ended" | "upcoming" | "recordings";
};

export type MeetingCardProps = {
  title: string;
  date: string;
  icon: FunctionComponentElement<LucideProps>;
  isPreviousMeeting?: boolean;
  buttonIcon?: FunctionComponentElement<LucideProps>;
  buttonText?: string;
  handleClick: () => void;
  link: string;
};
