import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const publicaSansRound = localFont({
  src: [
    {path: './assets/fonts/PublicaSansRound-Rg.otf', weight: '400', style: 'normal'},
    {path: './assets/fonts/PublicaSansRound-Md.otf', weight: '500', style: 'normal'},
    {path: './assets/fonts/PublicaSansRound-Thin.otf', weight: '300', style: 'normal'},
    {path: './assets/fonts/PublicaSansRound-Lt.otf', weight: '200', style: 'normal'},
    {path: './assets/fonts/PublicaSansRound-Bd.otf', weight: '600', style: 'normal'},
  ],
  variable: '--font-publica',
})

export const metadata: Metadata = {
  title: "ESG",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicaSansRound.variable} ${inter.className}`}>
        <SkeletonTheme baseColor="#292e3a86" highlightColor="#444">
          {children}
        </SkeletonTheme>
      </body>
    </html>
  );
}
