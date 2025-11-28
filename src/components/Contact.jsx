import React from 'react'
import imghero from '/imghero.png';

export default function Contact() {
  return (
    <section
    
    data-aos='fade-up'
    data-aos-delay='300' 
    className='relative flex items-center justify-center min-h-screen p-6 mt-10 overflow-hidden'
    >
        <article className='relative flex flex-col w-full max-w-4xl rounded-lg shadow-lg md:flex-row'>
            <aside className='relative w-full md:w-1/2'>
                <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px]
                 sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5]
                to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]'>
                </div>
                <img src={imghero} alt="Contact Illustration"
                className='h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative' />
            </aside>
            {/*Contact Form*/}
            <section id='contact' className='w-full p-8 md:w-1/2'>
                <header className='mb-6'>
                    <h2 className='text-4xl font-bold text-center text-white'>Contact Us</h2>
                </header>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block mb-2 font-medium text-gray-300'>Name</label>
                        <input type="text" name='name' id='name' placeholder='Your Name' className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2 font-medium text-gray-300'>Email</label>
                        <input type="text" name='email' id='email' placeholder='Your Email' className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none' />
                    </div>
                    <div>
                        <label htmlFor="message" className='block mb-2 font-medium text-gray-300'>Message</label>
                        <textarea name="message" id="message" placeholder='Your Message'
                        className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'></textarea>
                    </div>
                    <button className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
                    hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                        Send Message
                    </button>
                </form>
            </section>
        </article>
    </section>
  )
}
