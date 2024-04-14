// import type { Metadata } from "next";
// // import { Red_Hat_Display } from "next/font/google";
// import "./globals.css";

// // const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Nishan Dhakal - Portfolio",
//   description:
//     "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
//   applicationName: "Daniel Ezekiel Portfolio website",
//   referrer: "origin-when-cross-origin",
//   keywords: [
//     "Nishan Dhakal ",
//     "Dhakal Nishan",
//     "Nishan Dhakal Portfolio",
//     "Nishan Dhakal Fullstack Developer",
//   ],
//   creator: "Nishan Dhakal",

//   metadataBase: new URL("https://danielbezekiel.vercel.app"),
//   alternates: {
//     canonical: "/",
//   },

//   robots: {
//     index: false,
//     follow: true,
//     // nocache: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   icons: {
//     icon: "/favicon.ico",
//     // shortcut: '/shortcut-icon.png',
//     // apple: '/apple-icon.png',
//     // other: {
//     //   rel: 'apple-touch-icon-precomposed',
//     //   url: '/apple-touch-icon-precomposed.png',
//     // },
//   },

//   openGraph: {
//     title: "Nishan Dhakal  | Full Stack Web Developer",
//     description:
//       "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
//     url: "https://danielbezekiel.vercel.app",
//     siteName: " Nishan Dhakal- Portfolio website",
//     images: [
//       {
//         url: "/faviconn.ico",
//         width: 1280,
//         height: 720,
//       },
//       {
//         url: "/images/og-image.png",
//         width: 1920,
//         height: 1080,
//         alt: "Preview Image",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Daniel Ezekiel - Frontend Developer",
//     description:
//       "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
//     // siteId: '1467726470533754880',
//     creator: "@nissandhakal11",
//     // creatorId: '1467726470533754880',
//     images: ["https://danielbezekiel.vercel.app/images/og-image.png"],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en'>
//       <body className='font-inter text-base'>{children}</body>
//     </html>
//   );
// }
import type { Metadata } from "next";
// import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishan Dhakal - Portfolio",
  description:
    "Nishan Dhakal is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
  applicationName: "Nishan Dhakal Portfolio website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Nishan Dhakal ",
    "Dhakal Nishan",
    "Nishan Dhakal Portfolio",
    "Nishan Dhakal Fullstack Developer",
  ],
  creator: "Nishan Dhakal",

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
    icon: "/favicon.ico",
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },

  openGraph: {
    title: "Nishan Dhakal  | Full Stack Web Developer",
    description:
      "Nishan Dhakal is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
    url: "https://danielbezekiel.vercel.app",
    siteName: " Nishan Dhakal- Portfolio website",
    images: [
      {
        url: "/favicon1.png",
        width: 1280,
        height: 720,
      },
      {
        url: "/images/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nishan Dhakal - Frontend Developer",
    description:
      "Nishan Dhakal is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
    // siteId: '1467726470533754880',
    creator: "@nissandhakal11",
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


