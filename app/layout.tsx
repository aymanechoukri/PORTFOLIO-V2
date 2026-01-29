import Header from "@/src/Components/Header";
import "./globals.css";
import BackEffect from "@/src/Components/BackgroundEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-gray-900 via-black to-gray-900 font-inter bg-no-repeat p-0 m-0">
        <Header />
        <BackEffect />
        {children}
        </body>
    </html>
  );
}
