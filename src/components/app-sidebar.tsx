"use client";

import { FlatSubMenu } from "@twapor/components/flat-sub-menu";
import { NavUser } from "@twapor/components/nav-user";
import { TeamSwitcher } from "@twapor/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@twapor/components/ui/sidebar";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
} from "lucide-react";
import * as React from "react";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  menu: [
    {
      name: "Dashboard",
      url: "#",
      icon: Map,
    },
    {
      name: "Apps",
      url: "#apps",
      icon: Frame,
    },
    {
      name: "Jobs",
      url: "#jobs",
      icon: PieChart,
    },
    {
      name: "Tenants",
      url: "#tenants",
      icon: Map,
    },
    {
      name: "Settings",
      url: "#settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <FlatSubMenu data={data.menu} label={"Menus"} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
