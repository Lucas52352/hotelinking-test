import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotelinking Test Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-light-gray text-black">
        {children}
      </body>
    </html>
  );
}
