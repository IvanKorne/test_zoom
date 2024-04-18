import {
  History,
  Home,
  CalendarSearch,
  Video,
  CircleUserRound,
  Plus,
  LucideProps,
  User,
  Calendar,
} from "lucide-react";
import React from "react";

export const sidebarItems = [
  {
    label: "Home",
    url: "/",
    icon: React.createElement(Home),
  },
  {
    label: "Upcoming",
    url: "/upcoming",
    icon: React.createElement(CalendarSearch),
  },
  {
    label: "Previous",
    url: "/previous",
    icon: React.createElement(History),
  },
  {
    label: "Recordings",
    url: "/recording",
    icon: React.createElement(Video),
  },
  {
    label: "Personal",
    url: "/personal",
    icon: React.createElement(CircleUserRound),
  },
];

export const homeItems = [
  {
    title: "New Meeting",
    desc: "Start an Instant Meeting",
    icon: React.createElement(Plus),
    handleClick: 0,
  },
  {
    title: "Schedule Meeting",
    desc: "Plan your Meetings",
    icon: React.createElement(Calendar),
    handleClick: 1,
    className: "bg-purple-600",
  },
  {
    title: "View Recordings",
    desc: "Check out your Recordings",
    icon: React.createElement(Video),
    handleClick: 2,
    className: "bg-blue-600",
  },
  {
    title: "Join Meeting",
    desc: "Join Meeting Now",
    icon: React.createElement(User),
    handleClick: 3,
    className: "bg-yellow-600",
  },
];
