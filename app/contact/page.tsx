export default function Contact() {
  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-serif mb-4'>
        Contact
      </h1>
      <form
        action='https://formspree.io/f/YOUR_ID_HERE'
        method='POST'
        className='space-y-4'
      >
        <input
          name='email'
          type='email'
          required
          placeholder='Your email'
          className='w-full p-2 border'
        />
        <textarea
          name='message'
          required
          placeholder='Your message'
          className='w-full p-2 border h-32'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-black text-white'
        >
          Send
        </button>
      </form>
    </div>
  );
}
