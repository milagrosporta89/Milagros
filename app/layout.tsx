import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist"
});

export const metadata: Metadata = {
  title: "Widdu | Consultora de Logistica",
  description: "Landing page de Widdu, consultora de logistica."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.variable} font-[var(--font-urbanist)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
