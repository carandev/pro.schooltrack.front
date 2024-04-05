import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} flex`}>
        <header className='h-screen bg-slate-500 text-white'>
          <h1 className='bg-slate-600 p-4 uppercase text-center'>
            {metadata.title?.toString()}
          </h1>
          <nav className='p-4 text-nowrap'>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/assignments">Gestión de trabajos</a>
              </li>
              <li>
                <a href="/students">Estudiantes</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className='p-4 w-full'>
          {children}
        </main>
      </body>
    </html>
  );
}
