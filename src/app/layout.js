import "bootstrap/dist/css/bootstrap.min.css";
import "katex/dist/katex.min.css";
import "../style.css";
import "../App.css";
import "../index.css";

import RootShell from "../components/RootShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abu-syed.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abu Syed | Portfolio",
    template: "%s | Abu Syed",
  },
  description: "Developer portfolio of Abu Syed.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Abu Syed | Portfolio",
    description: "Developer portfolio of Abu Syed.",
    siteName: "Abu Syed",
    images: [
      {
        url: "/i.png",
        width: 1200,
        height: 630,
        alt: "Abu Syed portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Syed | Portfolio",
    description: "Developer portfolio of Abu Syed.",
    images: ["/i.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0c0513",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
