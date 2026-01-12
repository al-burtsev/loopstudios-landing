import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";
import "./globals.css";

const alata = Alata({
  variable: "--font-alata",
  weight: '400',
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loopstudios",
  description: "The leader in interactive VR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alata.variable} ${josefinSans.variable} antialiased selection:bg-fuchsia-300 selection:text-fuchsia-900 dark:selection:text-gray-200 dark:selection:bg-fuchsia-900`}
      >
        {children}
      </body>
    </html>
  );
}
