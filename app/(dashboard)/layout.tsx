"use client";

import DashboardHeader from "@/components/layout/header/dashboard-header";
import AppSidebar from "@/components/layout/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/use-auth";
import QueryProvider from "@/providers/query-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isLoading, refreshUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/auth/login");
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) return null;

  return (
    <QueryProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          {/* <SidebarTrigger /> */}
          <DashboardHeader />
          <div className="h-full min-h-screen bg-blue-100/30 pt-15">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </QueryProvider>
  );
}
