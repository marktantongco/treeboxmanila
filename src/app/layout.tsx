import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://treeboxmanila.com"),
  title: {
    default: "Treebox Manila Co. | Quality Printing Services in Metro Manila",
    template: "%s | Treebox Manila Co.",
  },
  description:
    "Treebox Manila Co. has been providing offset lithography printing services since 1997. Custom boxes, paper bags, calendars, flyers, brochures, and more. Direct supplier in Quezon City, Metro Manila.",
  keywords: [
    "printing services Manila",
    "offset lithography printing",
    "custom boxes Philippines",
    "paper bags Manila",
    "calendar printing",
    "flyer printing Quezon City",
    "brochure printing Metro Manila",
    "sticker printing",
    "packaging printing",
    "Treebox Manila",
  ],
  authors: [{ name: "Treebox Manila Co." }],
  icons: {
    icon: "/images/treebox-logo.png",
  },
  openGraph: {
    title: "Treebox Manila Co. | Quality Printing Services in Metro Manila",
    description:
      "Your trusted offset lithography printing service since 1997. Custom boxes, paper bags, calendars, flyers, brochures, and more.",
    url: "https://treeboxmanila.com",
    siteName: "Treebox Manila Co.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/images/treebox-logo.png",
        width: 1024,
        height: 1024,
        alt: "Treebox Manila Co. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treebox Manila Co. | Quality Printing Services",
    description:
      "Your trusted offset lithography printing service since 1997 in Metro Manila.",
  },
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
  alternates: {
    canonical: "https://treeboxmanila.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1B5E20" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <ScrollProgress />
        <LocalBusinessSchema />
        <FAQSchema />
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </div>
        <MobileCTA />
        <ScrollToTop />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
