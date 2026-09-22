import type { Metadata } from "next";
import "./globals.css";
import ThemeScripts from "./components/ThemeScripts";

export const metadata: Metadata = {
  title: "Ttulsi - Health Supplement and Landing Page",
  description: "Ttulsi - Health Supplement and Landing Page HTML converted to Next.js",
  themeColor: "#db2a24",
  icons: {
    icon: "/images/fav-icon/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msapplication-navbutton-color" content="#db2a24" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#db2a24" />
      </head>
      <body>
        {children}
        <ThemeScripts />
      </body>
    </html>
  );
}
