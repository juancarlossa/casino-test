import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/layout/Footer";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Toaster } from "@/components/juankui/toaster";
import { Providers } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Casino Anced",
  description: "El mejor casino dinero real",
};
export const defaultSize = 15
export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ResizablePanelGroup
            direction="horizontal"
            className="flex max-h-screen overflow-hidden rounded-lg border"
          >
            <ResizablePanel
              defaultSize={defaultSize}
              minSize={0}
              maxSize={20}
              className="flex flex-col"
            >
              <AppSidebar />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={85} className="flex flex-1 flex-col overflow-hidden">
              <Navbar className="top-2" />
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <main>
                  {children}
                  <Toaster />
                </main>
                <Footer />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Providers>
      </body>
    </html>
  );
}
