import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Message delivered")
    }
  return (
   <>
    <p className='font-serif font-bold text-center text-2xl md:text-4xl mb-5' id='contact'>Contact Me</p>
    <div className='md:px-20 px-3 flex flex-col md:flex-row md:gap-20 gap-10'>
        
        <div className='md:w-1/2 border-1 border-gray-300 pb-5 md:pb-0 rounded-2xl' data-aos="zoom-in" >
        <p className='font-serif text-lg md:text-3xl text-center font-bold pt-5'>Getting in touch</p>
           <div className='flex px-3 items-center mt-5 justify-center gap-4'>
                <div className='flex flex-col gap-5'>
                    <a href="https://www.facebook.com/profile.php?id=100069479709655" target='_blank'><FaFacebook size={30} /></a>
                    <a href="https://www.instagram.com/b__bek__/" target='_blank'><FaInstagramSquare size={30} /></a>
                    <a href="https://www.linkedin.com/in/bibek-magar-7b0504255/" target='_blank'><FaLinkedin size={30} /></a>
                </div>
                <div className='font-serif flex flex-col gap-4'>
                    <p className=' md:text-xl lg:text-2xl'>Nayabasti, Gokarneshwor-5</p>
                    <p className='md:text-xl '>Kathmandu, Nepal</p>
                    <p className=' md:text-xl '>magarbibek71@gmail.com</p>
                </div>
           </div>
        </div>
        <div className='md:w-1/2 px-5 border-1 border-gray-300 rounded-2xl' data-aos="zoom-in"> 
            <p className='text-center font-serif text-xl'>Let's work together</p>
            <form action="" className='flex flex-col justify-center font-serif' onSubmit={handleSubmit}>
                <label htmlFor="name" className='py-2'>Your name</label>
                <input type="text" name="username" id="name" placeholder='eg:Bibek ' className='border-2 border-black w-full px-2 rounded-md ' required />
                <label htmlFor="email" className='py-2'>Enter your email</label>
                <input type="email" name="useremail" id="email"  placeholder='eg:kendrix@gmail.com' className='border-2 border-black w-full px-2 rounded-md ' required />
                <label htmlFor="message" className='py-2'>Message</label>
                <textarea type="text" name="description" id="message" placeholder='Leave your message' className='border-2 border-black w-full px-2 rounded-md ' required />
                <input type="submit" name="" id="" 
                className='border-1 border-black my-2 rounded-md p-1 hover:bg-[#004AAD] cursor-pointer' />
            </form>
        </div>
    </div>
   </>
  )
}

export default Contact
