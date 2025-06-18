import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center text-center p-6'>
      <img
        src='/rsf-logo.png'
        alt='Rare Souls Films Logo'
        className='w-32 mb-6'
      />
      <h1 className='text-3xl font-serif mb-2'>
        Rare stories by rare souls for rare minds.
      </h1>
      <p className='mb-4 text-lg max-w-md'>
        An independent film company for the
        emotionally raw, strange, and divine.
      </p>
      <Link
        href='/about'
        className='px-4 py-2 bg-black text-white font-semibold'
      >
        Read more
      </Link>
    </main>
  );
}
