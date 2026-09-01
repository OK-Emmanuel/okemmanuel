import type { Metadata } from "next";
import { Manrope, Cormorant } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Script from "next/script";
import { personSchema, organizationSchema, websiteSchema, profilePageSchema } from "@/lib/structured-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = "https://okemmanuel.tech"; // Update to the new production domain if needed
const siteName = "O.K. Emmanuel — Technology & Product Strategist";
const siteDescription = "I help founders, growing organizations and institutions design, build and improve digital products, AI-powered workflows and technology infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Technology Strategist",
    "Product Strategist",
    "Software Engineer Nigeria",
    "MVP Architecture",
    "AI Operations & Automation",
    "Digital Authority Systems",
    "Executive Authority Platforms",
    "SaaS Development Africa",
    "Custom Software Development",
    "Olawuni Emmanuel Kayode",
    "O.K. Emmanuel",
  ],
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    siteName: siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@theokemmanuel",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        {/* Structured Data - Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Structured Data - Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Structured Data - Profile Page Schema */}
        <Script
          id="profilepage-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <ThemeSwitcher />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
