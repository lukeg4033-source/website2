import '../app/globals.css';
import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dalau Ltd – Precision Engineering in PTFE &amp; Fluoropolymers</title>
        <meta name="description" content="Dalau Ltd is the UK’s largest processor of PTFE and fluoropolymers. Discover our products, processes, materials and industry expertise." />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}