import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>  
        <div className='font-serif mt-5 text-center md:text-2xl text-xl drop-shadow-[0_-4px_6px_rgba(0,0,0,0.1)]'>
            <p className='mb-4'>Bibek Magar</p>
            <div className='flex gap-5 justify-center mb-4'>
                <a href="https://www.facebook.com/profile.php?id=100069479709655" target='_blank'><FaFacebook size={25} /></a>
                <a href='https://www.instagram.com/b__bek__/' target='_blank'><FaInstagramSquare size={25} /></a>
                <a href="https://github.com/BibekAleMagar" target='_blank'><FaGithub size={25} /></a>

            </div>
            <p>© Kendrix. All rights reserved</p>
        </div>
    </>
  )
}

export default Footer
