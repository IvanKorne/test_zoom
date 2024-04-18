import type { Metadata } from "next";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "@/components/providers";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoom",
  description: "Zoom clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <CSPostHogProvider>
          <ThemeProvider>
            <body className={`${inter.className} dark`}>
              <div className="grid grid-rows-[auto,1fr] h-screen">
                <NavBar />
                <div className="grid grid-cols-[auto,1fr]">
                  <Sidebar />
                  {children}
                </div>
              </div>
            </body>
          </ThemeProvider>
        </CSPostHogProvider>
      </ClerkProvider>
    </html>
  );
}
