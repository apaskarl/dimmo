import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
