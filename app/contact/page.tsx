export default function Contact() {
  return (
    <div className='pt-20 px-6 max-w-md mx-auto text-white'>
      <h1 className='text-3xl font-serif mb-6'>
        Get in Touch
      </h1>

      <p className='mb-8 text-white/80'>
        Want to collaborate, co-produce, or just
        say hello? Drop us a line. We read
        everything — yes, even the poetic
        overshares.
      </p>

      <form
        action='https://formspree.io/f/xvgrqbvk'
        method='POST'
        className='space-y-4'
      >
        <input
          name='email'
          type='email'
          required
          placeholder='Your email'
          className='w-full px-4 py-2 bg-black/30 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30'
        />
        <textarea
          name='message'
          required
          placeholder='Your message'
          className='w-full px-4 py-2 bg-black/30 border border-white/20 text-white placeholder-white/60 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-white/30'
        />
        <button
          type='submit'
          className='px-6 py-2 border border-white text-white font-medium uppercase tracking-wide hover:bg-white hover:text-black transition'
        >
          Send
        </button>
      </form>
    </div>
  );
}
