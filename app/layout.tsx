import type { Metadata } from "next";
import { Geist, Geist_Mono, Russo_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://blazemorales.github.io/ARES_ROVERS_UNB_WEBSITE";
const ogImage = `${siteUrl}/Logo_dourada_roxa.png`;
const description =
  "Equipe oficial de Rovers da Universidade de Brasília, vinculada à Engenharia Aeroespacial da UnB. Desenvolvemos veículos robóticos para exploração planetária.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARES Rovers UnB",
    template: "%s · ARES Rovers UnB",
  },
  description,
  keywords: [
    "ARES",
    "Rover",
    "UnB",
    "Universidade de Brasília",
    "Engenharia Aeroespacial",
    "exploração planetária",
    "robótica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ARES Rovers UnB",
    title: "ARES Rovers UnB",
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1200,
        alt: "Logo ARES Rovers UnB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARES Rovers UnB",
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
