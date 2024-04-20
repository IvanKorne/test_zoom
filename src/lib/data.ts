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
import av1 from "../../public/images/avatar-1.jpeg";
import av2 from "../../public/images/avatar-2.jpeg";
import av3 from "../../public/images/avatar-3.png";
import av4 from "../../public/images/avatar-4.png";
import av5 from "../../public/images/avatar-5.png";

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

export const avatarImages = [av1, av2, av3, av4, av5];
