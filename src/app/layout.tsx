import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Providers
import Providers from "./providers";
// lib
import { fetchResume } from "@/lib/fetchResume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const resume = await fetchResume();
  return {
    title: `${resume.fullName}`,
    description: `Discover the professional portfolio of ${resume.fullName},${resume.profession} Developer.`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black bg-white`}
      >
        <Providers>
          {children}
        </Providers >
      </body>
    </html>
  );
}