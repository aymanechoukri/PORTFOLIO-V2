import type { Metadata } from "next";
import Header from "@/src/Components/Header";
import "./globals.css";
import BackEffect from "@/src/Components/BackgroundEffect";
import Footer from "@/src/Components/Footer";

export const metadata: Metadata = {
  title: "Aymane Chokri | Front-End & Full-Stack Developer",
  description: "Portfolio of Aymane Chokri, a web developer from Morocco building responsive web experiences with React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Aymane Chokri | Web Developer",
    description: "Selected projects, skills, experience, and ways to get in touch.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-gray-900 via-black to-gray-900 font-inter bg-no-repeat p-0 m-0">
        <Header />
        <BackEffect />
        {children}
        <Footer />
      </body>
    </html>
  );
}
