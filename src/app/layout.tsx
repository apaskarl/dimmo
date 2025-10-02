import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Evaluate Software On Your Own | Dimmo",
  description:
    "Watch software demos without having to jump into sales cycles. Leverage our AI to understand which software is best for your challenges and business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      
      <body className={`antialiased`}>
        <Header />
        <main className="relative overflow-hidden bg-[#FFFBFD]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
