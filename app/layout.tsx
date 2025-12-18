import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast';
import {GoogleAnalytics} from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TPI CNC | Industrial Machining & Manufacturing Solutions Windsor-Essex",
  description: "Premier CNC machining and industrial automation solutions in Windsor-Essex County, Ontario. Specializing in precision manufacturing, custom machining, equipment maintenance, and advanced industrial technology. Serving Windsor, Essex, Tecumseh, LaSalle, Lakeshore, and surrounding areas.",
  openGraph: {
    title: "TPI CNC - Advanced Manufacturing & Industrial Solutions Windsor-Essex",
    description: "Leading provider of CNC machining, industrial automation, and manufacturing solutions in Windsor-Essex. Expert precision machining, maintenance services, and industrial technology solutions for automotive, aerospace, and manufacturing sectors.",
    url: "https://tpicnc.com",
    siteName: "TPI CNC",
    images: [
      {
        url: "/logos/tpiwbg.png",
        width: 500,
        height: 500,
        alt: "TPI CNC - Industrial Machining & Manufacturing Solutions Windsor-Essex Ontario",
      },
    ],
    locale: "en_CA",
    type: "website",
    countryName: "Canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPI CNC - Windsor-Essex Industrial Manufacturing Solutions",
    description: "Expert CNC machining, industrial automation, and manufacturing solutions in Windsor-Essex County. Serving Ontario's automotive, aerospace, and industrial sectors with precision engineering.",
    images: ["/logos/tpiwbg.png"],
    site: "@TPICNC",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Windsor CNC machining",
    "Essex County manufacturing",
    "Windsor-Essex industrial services",
    "Tecumseh industrial automation",
    "LaSalle manufacturing solutions",
    "Ontario industrial maintenance",
    "Southwestern Ontario CNC services",
    "CNC machining services",
    "industrial automation solutions",
    "precision manufacturing",
    "custom machining services",
    "industrial equipment maintenance",
    "manufacturing technology integration",
    "industrial process optimization",
    "machine shop services",
    "automotive manufacturing solutions",
    "aerospace machining services",
    "industrial equipment repair",
    "advanced manufacturing technology",
    "industrial robotics integration",
    "precision parts manufacturing",
    "5-axis CNC machining",
    "CNC milling services",
    "CNC turning solutions",
    "precision engineering",
    "quality control systems",
    "industrial automation controls"
  ],
  category: "Manufacturing & Industrial Services",
  alternates: {
    canonical: "https://tpicnc.com",
  },
  authors: [{ name: "TPI CNC" }],
  generator: "Next.js",
  applicationName: "TPI CNC",
  referrer: "origin-when-cross-origin",
  creator: "TPI CNC",
  publisher: "TPI CNC",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://tpicnc.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ... existing code ...
  verification: {
    google: "add-your-google-site-verification-here",
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Windsor-Essex County",
    "geo.position": "42.3149;-83.0364",
    "ICBM": "42.3149, -83.0364",
  }
};

// extract viewport to its own export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <html lang="en">
    <body className={inter.className}>
    <Navbar />
      {children}
      <Footer />
      <Toaster position="bottom-center" />
    </body>
    <GoogleAnalytics gaId="GT-NM8WP38T" />
  </html>;
}
