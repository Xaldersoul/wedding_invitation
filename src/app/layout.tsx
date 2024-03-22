import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitacion",
  description: "¡Te invitamos a que asistas a nuestro dia especial!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
