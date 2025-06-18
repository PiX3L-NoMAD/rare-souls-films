import './globals.css';
import {
  Inter,
  Playfair_Display,
} from 'next/font/google';

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
      <body className='font-sans text-gray-900 bg-white'>
        {children}
      </body>
    </html>
  );
}
