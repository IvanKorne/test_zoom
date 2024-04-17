import type { Metadata } from "next";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "@/components/providers";
import "./globals.css";

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
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </CSPostHogProvider>
      </ClerkProvider>
    </html>
  );
}
