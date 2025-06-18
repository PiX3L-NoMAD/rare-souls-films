'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/20 px-4 py-3 flex justify-between items-center'>
      <Link
        href='/'
        className='font-serif text-white text-lg sm:text-xl tracking-wide hover:opacity-80 transition'
      >
        Rare Souls Films
      </Link>

      <div className='space-x-6 hidden sm:flex text-white text-sm font-light'>
        <Link
          href='/about'
          className='hover:opacity-80'
        >
          About
        </Link>
        <Link
          href='/projects'
          className='hover:opacity-80'
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className='hover:opacity-80'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
