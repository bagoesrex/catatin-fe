"use client";

import {
  LayoutDashboard,
  List,
  Loader2,
  LogOut,
  MessageSquare,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarItem from "./sidebar-item";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Chat AI",
    url: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    title: "Transaksi",
    url: "/dashboard/transaction",
    icon: List,
  },
];

export default function AppSidebar() {
  const { isLoading, user, logout } = useAuth();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-b-gray-200 px-4 py-4">
        <h1 className="text-xl font-bold">
          Catat<span className="text-blue-700">In</span>
        </h1>
      </SidebarHeader>
      <SidebarContent className="mt-3 px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  href={item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-t-gray-200">
        <div className="flex flex-row gap-4 rounded-sm bg-blue-200/50 px-3 py-2">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/avatar.jpg"
              alt="Ini gambar"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold">{user?.name}</p>
            <p className="text- text-xs">{user?.email}</p>
          </div>
        </div>
        <Button
          onClick={logout}
          variant={"ghost"}
          className="w-full font-semibold text-red-600 hover:text-red-600"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </>
          )}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
