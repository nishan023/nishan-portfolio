import type { Metadata } from "next";
// import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Ezekiel - Portfolio",
  description:
    "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
  applicationName: "Daniel Ezekiel Portfolio website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Daniel Ezekiel",
    "Daniel Boluwatife Ezekiel",
    "Daniel Ezekiel Portfolio",
  ],
  creator: "Daniel Ezekiel",

  metadataBase: new URL("https://danielbezekiel.vercel.app"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: false,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.jpg",
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },

  openGraph: {
    title: "Daniel Ezekiel - Frontend Developer",
    description:
      "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
    url: "https://danielbezekiel.vercel.app",
    siteName: "Daniel Ezekiel - Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "/images/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Preview Image",
      },
    ],
    // locale: 'en_US',
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Daniel Ezekiel - Frontend Developer",
    description:
      "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
    // siteId: '1467726470533754880',
    creator: "@db_ezekiel",
    // creatorId: '1467726470533754880',
    images: ["https://danielbezekiel.vercel.app/images/og-image.png"],
  },
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

