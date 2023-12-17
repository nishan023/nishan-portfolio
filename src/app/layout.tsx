import type { Metadata } from "next";
// import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Ezekiel - Portfolio",
  description: "Built by Daniel Ezekiel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-inter text-base'>{children}</body>
    </html>
  );
}

