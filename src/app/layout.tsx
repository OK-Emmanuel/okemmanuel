import type { Metadata } from "next";
import { Manrope, Cormorant, Instrument_Serif } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const InstrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});


const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://okemmanuel.com"),
  title: "O.K. Emmanuel — Technology & Product Strategist",
  description:
    "I turn complex business problems into scalable digital systems. I help founders, growing organizations and institutions design, build and improve digital products, AI-powered workflows and technology infrastructure.",
  openGraph: {
    title: "O.K. Emmanuel — Technology & Product Strategist",
    description:
      "I turn complex business problems into scalable digital systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${InstrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
