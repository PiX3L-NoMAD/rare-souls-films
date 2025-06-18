import Image from 'next/image';
export default function Home() {
  return (
    <main className='relative min-h-screen w-full overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover object-center z-0'
      >
        <source
          src='/hero-video.mp4'
          type='video/mp4'
        />
      </video>

      <div className='absolute inset-0 bg-black/50 z-10' />

      <div className='relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-8 space-y-4'>
        <Image
          src='/rsf-logo.png'
          alt='Rare Souls Films Logo'
          className='w-60 sm:w-96 mb-2 invert opacity-75 hover:opacity-100 transition duration-300'
        />

        <p className='font-serif text-xl sm:text-2xl opacity-90 max-w-md text-white-300'>
          Rare stories by rare souls for rare
          minds.
        </p>

        <p className='font-sans text-sm sm:text-base max-w-md text-gray-200'>
          Emotionally raw. Visually weird. Always
          unforgettable.
        </p>

        <a
          href='/about'
          className='inline-block px-6 py-2 border border-white text-white font-medium tracking-wide uppercase text-xs sm:text-sm hover:bg-white hover:text-black transition duration-300 ease-in-out'
        >
          Read more
        </a>
      </div>
    </main>
  );
}
