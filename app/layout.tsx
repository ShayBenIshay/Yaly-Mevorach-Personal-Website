import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yalymevorach.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yaly Mevorach",
  url: SITE_URL,
  jobTitle: "PhD Student",
  affiliation: {
    "@type": "Organization",
    name: "University of Haifa",
  },
  description:
    "Marine biologist and PhD student at the University of Haifa, researching the impact of social structures on sperm whale communication under Project CETI.",
  knowsAbout: [
    "Marine biology",
    "Cetacean research",
    "Sperm whales",
    "Project CETI",
    "Mediterranean marine mammals",
    "Bioacoustics",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yaly Mevorach | Marine Biologist & PhD Student",
    template: "%s | Yaly Mevorach",
  },
  description:
    "Yaly Mevorach is a PhD student at the University of Haifa Investigating the The influence of social structure on communication complexity of sperm whales (Physeter macrocephalus) with Dr. Shane Gero and Prof. Dan Tchernov . Marine biologist passionate about cetacean conservation in the eastern Mediterranean.",
  keywords: [
    "Yaly Mevorach",
    "marine biologist",
    "PhD student",
    "sperm whales",
    "cetacean research",
    "Project CETI",
    "University of Haifa",
    "whale communication",
    "Mediterranean marine mammals",
    "cetacean conservation",
    "bioacoustics",
    "deep-diving cetaceans",
  ],
  authors: [{ name: "Yaly Mevorach", url: SITE_URL }],
  creator: "Yaly Mevorach",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Yaly Mevorach | Marine Biologist & PhD Student",
    description:
      "PhD student at the University of Haifa investigating sperm whale communication under Project CETI. Passionate about cetacean conservation in the eastern Mediterranean.",
    siteName: "Yaly Mevorach",
    locale: "en_US",
    images: [
      {
        url: "/images/YalyMevorach-personal-image.png",
        width: 1200,
        height: 630,
        alt: "Yaly Mevorach – Marine Biologist & PhD Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaly Mevorach | Marine Biologist & PhD Student",
    description:
      "PhD student at the University of Haifa investigating sperm whale communication under Project CETI.",
    images: ["/images/YalyMevorach-personal-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
