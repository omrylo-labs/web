import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://omrylo.com";
const description =
  "Every conversation opens a new world. AI-powered story worlds where characters remember, worlds evolve, and choices matter.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Omrylo",
  description,
  openGraph: {
    title: "Omrylo",
    description: "Every conversation opens a new world.",
    url: siteUrl,
    siteName: "Omrylo",
    images: [
      {
        url: "/og-image.png",
        width: 1254,
        height: 1254,
        alt: "Omrylo portal logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
