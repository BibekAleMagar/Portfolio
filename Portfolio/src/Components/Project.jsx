import React from 'react'
import Asalt from '../assets/Asalt.png'
import Sneakrix from '../assets/Sneakrix.png'
import Tracker from '../assets/Tracker.png'
import blogs from '../assets/blog.png'

const Project = () => {
  return (
    <> 
    <div className='mb-5' id='projects'>
      <p className='font-serif font-bold text-center text-2xl md:text-4xl'>Projects</p>
    </div>
    <div className='grid md:grid-cols-3 px-3 gap-5 md:mb-15 mb-5 '>
        <div className='border-2 border-gray-300 rounded-2xl p-2' data-aos="zoom-in">
          <img src={Asalt} alt="Asalt Guidance" className='rounded-2xl md:h-full mb-2 relative'/>
          <div className='absolute opacity-0 hover:opacity-100 inset-0 flex items-center bg-black/75 text-white text-center transition-opacity duration-300 rounded-2xl'>
            <p className='px-3'>A front-end of ecommerce store developed using react js and tailwind css
              and context api for the global state management.
            </p>
          </div>
          <div className='flex justify-between md:px-5 md:py-3 px-2 py-1'>
            <p className='font-serif font-semibold'>Asaslt Guidance</p>
            <a href='https://cerulean-basbousa-0f20a1.netlify.app/' target='_blank'>
              <p className='font-semibold font-serif cursor-pointer bg-[#E6A862] px-1 rounded-lg'>
                Visit➶
                </p>
            </a>
          </div>
        </div>
        <div className='border-2 border-gray-300 rounded-2xl p-2' data-aos="zoom-in">
          <img src={blogs} alt="Sneakrix" className='rounded-2xl md:h-full mb-2 relative'/>
          <div className='absolute opacity-0 hover:opacity-100 inset-0 flex items-center bg-black/75 text-white text-justify transition-opacity duration-300 rounded-2xl'>
            <p className='px-3 text-center'>Kendrix Blogs is a MERN stack project that allows CRUD operations to manage blog posts and images. It provides a simple and efficient interface for creating, updating, and deleting content with smooth backend integration.
            </p>
          </div>
          <div className='flex justify-between md:px-5 md:py-3 px-2 py-1'>
            <p className='font-serif font-semibold'>Kendrix blogs</p>
            <a href='https://kendrix-blogs.vercel.app/' target='_blank'><p className='font-semibold font-serif bg-[#2B7FFF] px-1 rounded-lg cursor-pointer'>Visit➶</p></a>
          </div>
        </div>
        <div className='border-2 border-gray-300 rounded-2xl p-2' data-aos="zoom-in">
          <img src={Tracker} alt="Expense-Tracker" className='rounded-2xl md:h-full mb-2 relative' />
          <div className='absolute opacity-0 hover:opacity-100 inset-0 flex items-center bg-black/75 text-white transition-opacity duration-300 rounded-2xl'>
            <p className='px-3 text-center'>A simple expense tracker that tracks your expenses made with the help of react
            and redux with the CRUD operations.</p>
          </div>
          <div className='flex justify-between md:px-5 md:py-3 px-2 py-1'>
            <p className='font-serif font-semibold'>Expense-Tracker</p>
            <a href='https://github.com/BibekAleMagar/Expense-Tracker'><p className='font-semibold font-serif bg-black text-white px-1 rounded-lg cursor-pointer'>Github</p></a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Project
