import type { Metadata } from "next";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "@/components/providers";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
      <ClerkProvider>
        <CSPostHogProvider>
          <ThemeProvider>
            <body className={`${inter.className} dark`}>
              <div className="grid grid-rows-[auto,1fr] h-screen">
                <NavBar />
                {children}
              </div>
            </body>
          </ThemeProvider>
        </CSPostHogProvider>
      </ClerkProvider>
    </html>
  );
}
