import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "15 Caro",
  description: "¡Pagina promocional para el XV de Caro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
