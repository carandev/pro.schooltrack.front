import MiniDrawer from "@/components/MiniDrawer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestión de notas",
  description: "Sistema para la gestión de notas del colegio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MiniDrawer title={`${metadata.title?.toString()}`}>
          {children}
        </MiniDrawer>
      </body>
    </html>
  );
}
