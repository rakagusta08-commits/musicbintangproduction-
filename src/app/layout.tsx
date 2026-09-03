import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LanguageProvider } from "@/lib/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://musicbintangproduction.com'),
  title: "Music Bintang Production — Music Production, Label & Artist Management",
  description: "Music Bintang Production adalah label rekaman, studio produksi musik, dan manajemen artis profesional di Indonesia.",
  applicationName: "Music Bintang Production",
  verification: {
    google: "8154e121bddc9697",
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/newlogo.png", type: "image/png" },
    ],
    shortcut: "/favicon-192x192.png",
    apple: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/newlogo.png", sizes: "512x512", type: "image/png" }
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://musicbintangproduction.com",
    siteName: "Music Bintang Production",
    title: "Music Bintang Production — Record Label & Artist Management",
    description: "Rumah produksi musik, label rekaman, dan manajemen artis terkemuka di Indonesia.",
    images: [
      {
        url: "https://musicbintangproduction.com/newlogo.png",
        width: 1200,
        height: 630,
        alt: "Music Bintang Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music Bintang Production",
    description: "Rumah produksi musik, label rekaman, dan manajemen artis.",
    images: ["https://musicbintangproduction.com/newlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://musicbintangproduction.com/#website",
        "url": "https://musicbintangproduction.com",
        "name": "Music Bintang Production",
        "description": "Music Production, Label & Artist Management",
        "publisher": {
          "@id": "https://musicbintangproduction.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://musicbintangproduction.com/#organization",
        "name": "Music Bintang Production",
        "url": "https://musicbintangproduction.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://musicbintangproduction.com/favicon-512x512.png",
          "width": 512,
          "height": 512
        }
      }
    ]
  };

  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />
        <meta name="google-site-verification" content="8154e121bddc9697" />
        <meta property="og:image" content="https://musicbintangproduction.com/newlogo.png" />
        <meta property="og:image:secure_url" content="https://musicbintangproduction.com/newlogo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
