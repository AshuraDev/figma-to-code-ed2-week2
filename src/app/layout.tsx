import type { Metadata } from "next";
import { archivo } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BALLAMA SHOP",
  description:
    "Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {/*  */}
        {children}
        {/*  */}
      </body>
    </html>
  );
}
