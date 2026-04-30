import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://consultation-landing-page.vercel.app"),
  title: {
    default: "Free 1:1 Digital Marketing Consultation | TPT",
    template: "%s | TPT"
  },
  description:
    "Book a free 1:1 digital marketing consultation and get a customized marketing plan for your business.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  openGraph: {
    title: "Get More Customers Consistently Without Wasting Money on Ads",
    description:
      "Simple, clear marketing plan made specifically for your business.",
    url: "/",
    siteName: "TPT Digital Marketing Consultation",
    images: [
      {
        url: "/tpt-logo-latest.png",
        width: 512,
        height: 512,
        alt: "TPT logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation",
    description:
      "Get a customized digital marketing plan for your business for free.",
    images: ["/tpt-logo-latest.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
