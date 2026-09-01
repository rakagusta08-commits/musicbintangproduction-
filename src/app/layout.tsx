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
  metadataBase: new URL('https://musicbintangproduction.vercel.app'),
  title: "Music Bintang Production — Music Production, Label & Artist Management",
  description: "Music Bintang Production adalah label rekaman, studio produksi musik, dan manajemen artis profesional di Indonesia.",
  verification: {
    google: "8154e121bddc9697",
  },
  icons: {
    icon: [
      { url: "/newlogo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/newlogo.png",
    apple: [
      { url: "/newlogo.png", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://musicbintangproduction.vercel.app",
    siteName: "Music Bintang Production",
    title: "Music Bintang Production — Record Label & Artist Management",
    description: "Rumah produksi musik, label rekaman, dan manajemen artis terkemuka di Indonesia.",
    images: [
      {
        url: "https://musicbintangproduction.vercel.app/newlogo.png",
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
    images: ["https://musicbintangproduction.vercel.app/newlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/newlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/newlogo.png" />
        <meta name="google-site-verification" content="8154e121bddc9697" />
        <meta property="og:image" content="https://musicbintangproduction.vercel.app/newlogo.png" />
        <meta property="og:image:secure_url" content="https://musicbintangproduction.vercel.app/newlogo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
