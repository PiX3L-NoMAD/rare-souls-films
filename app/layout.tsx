import './globals.css';
import {
  Inter,
  Playfair_Display,
} from 'next/font/google';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Rare Souls Films',
  description:
    'Rare stories by rare souls for rare minds.',
};

import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className='font-sans text-white bg-black antialiased min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
