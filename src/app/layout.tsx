import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UUHT - Top Product Recommendations for Everyday Life",
  description: "Discover the best products for your home, kitchen, fitness, and daily life. Expert reviews and recommendations to help you make smart shopping decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="lhverifycode" content="32dc01246faccb7f5b3cad5016dd5033" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
