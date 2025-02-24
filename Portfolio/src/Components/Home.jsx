import React, {useState, useEffect} from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import Kend from '../assets/Home.png';
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: false, 
    });
  }, []);

  return (
  <>
    <div className='flex justify-center my-2 md:pt-16 pt-12' id="home">
    <p className='text-center md:text-2xl bg-[#004AAD] px-6 py-2 rounded-lg text-white font-serif'>Welcome to my portfolio</p> 
    </div>
    <div className='md:px-56 px-4 flex flex-col-reverse md:flex-row md:gap-10 items-center py-5'>
      
        <div className='flex flex-col items-center md:items-start' data-aos='fade-right'>
        
        <p className='text-4xl font-bold pt-4 md:text-7xl md:my-8 font-serif'>Hi, I'm Bibek</p>
        <TypeAnimation sequence={['Frontend Developer',1000,'']} speed={50} repeat={Infinity} className='text-2xl font-bold md:text-5xl opacity-88 font-serif'/>
        <p className='text-xl md:pt-5 pt-2 md:text-4xl md:mt-2 opacity-50 text-center md:text-start font-serif'>
             I'm a frontend developer focused on crafting ideas into reality.
        </p>
        </div>

        <div className='flex items-center justify-center'>
          <img src={Kend} alt="Home image" className='rounded-full shadow h-50 md:h-full w-full' data-aos='fade-left' />
        </div>
    </div>
    <div className='flex flex-col items-center justify-center md:mt-20 md:mb-14 mb-8 '>
                <div>
                <button className='p-2 md:p-3 rounded-full md:text-xl bg-[#004AAD] text-white font-serif' onClick={()=>setTalk(!talk)}>Let's talk</button>
                </div>

                <div className='flex gap-x-8 mt-3 md:mt-6 justify-center'>
               <div className='p-2 rounded-full shadow'>
                <a href="https://github.com/BibekAleMagar" target='_blank'><FaGithub size={30} /></a>
               </div>
               <div className='p-2 rounded-full shadow'>
                <a href="https://www.linkedin.com/in/bibek-magar-7b0504255/" target='_blank'><FiLinkedin size={30} /></a>
               </div>
               <div className='p-2 rounded-full shadow'>
                <a href="mailto:magarbibek71@gmail.com"><IoMailOutline size={30} /></a>
               </div>
            </div>

       </div>
  </>
  )
}

export default Home
