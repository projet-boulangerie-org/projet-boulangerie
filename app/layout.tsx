import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "@/styles/global.css";
import DarkModeInitializer from '@/components/DarkModeInitializer';
import ConditionalHeader from "@/components/ConditionalHeader";
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Projet Boulangerie",
  description: "L'art de la viennoiserie jusqu'à des sommets inégalés",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased min-h-screen flex flex-col`}>
        <DarkModeInitializer />  {/* Pour précharger le fond noir */}
        <div className="flex-1 flex flex-col">
        <ConditionalHeader /> {/* Affiche le header sauf sur la page d'accueil car soucis d'alignement*/}
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
