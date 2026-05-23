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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1499407278403538');
fbq('track', 'PageView');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1499407278403538&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
