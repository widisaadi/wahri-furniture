import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wahri Furniture - Ginger Chair",
  description: "Ginger Chair - Wahri Furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} ${playfairDisplay.variable} antialiased font-sans bg-background-light text-text-light transition-colors duration-300 min-h-screen flex flex-col`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
