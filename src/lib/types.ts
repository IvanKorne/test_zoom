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
