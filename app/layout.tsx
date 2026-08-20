import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiovmp.com"),

  title: {
    default: "30 Builds × VMP | Desarrollo web para negocios",
    template: "%s | 30 Builds × VMP",
  },

  description:
    "30 Builds × VMP es una edición limitada de desarrollo web para negocios. Sitios personalizados por $5,999 MXN con diseño, desarrollo y publicación incluidos dentro del alcance especificado.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "30 Builds × VMP",
    description:
      "Desarrollo web personalizado para negocios. Edición limitada a 30 proyectos.",
    url: "https://www.studiovmp.com",
    siteName: "VMP",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>

      <GoogleAnalytics gaId="G-S6XJ0832VY" />
    </html>
  );
}