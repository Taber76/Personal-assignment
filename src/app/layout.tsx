import type { Metadata } from "next";
import "./globals.css";

import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Aeropuerto",
  description: "Asignaciones de vuelos",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
