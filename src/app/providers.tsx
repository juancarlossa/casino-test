// app/providers.tsx (ejemplo común)
"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { ReactNode } from "react";

export function Providers ({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ViewTransitions>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark"]}
          enableSystem={false}
          disableTransitionOnChange
        >
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ThemeProvider>

      </ViewTransitions>
    </SessionProvider>
  )
}