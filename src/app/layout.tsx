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
  description: "Music Bintang Production is a professional music production, label and artist management company.",
  openGraph: {
    title: "Music Bintang Production",
    description: "Music Production, Label & Artist Management",
    images: [{ url: "/og-image.png" }],
  },
    icons: {
    icon: [
      { url: '/icon.png?v=2' },
      { url: '/favicon.ico?v=2' }
    ],
    shortcut: ['/icon.png?v=2'],
    apple: [
      { url: '/apple-touch-icon.png?v=2' },
      { url: '/icon.png?v=2', sizes: '180x180', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable}`}>
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
