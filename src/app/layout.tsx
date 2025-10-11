import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Bricolage_Grotesque } from 'next/font/google';

import './globals.css';
import Providers from '@/provider/Providers';

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CodeSnap-Generate lightning code snippets',
  description: 'Designed and Developed by Vaibhav',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${bricolage_grotesque_init.className} dark:bg-black bg-gray-100 min-h-screen overflow-x-hidden`}
        >
          <Header />
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
