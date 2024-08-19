import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import "./globals.css";
import "../styles/globals.scss"
import Navigation from "@/components/navbar/navigation";

/*
Use Poppins font from Google
- https://nextjs.org/docs/app/building-your-application/optimizing/fonts
*/

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ryan Barillos",
  description: "The official website of Ryan Barillos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
