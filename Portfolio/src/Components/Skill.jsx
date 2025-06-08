import React,{useEffect} from 'react'
import { BiBrightness } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: false, 
    });
  }, []);

  return (
    <>
        <div className='flex justify-center my-3' id='skill'>
            <p className='font-serif py-2 px-3 font-bold text-2xl md:text-4xl mb-2'>Skills</p>
        </div>
        <div className='flex md:flex-row flex-col gap-5 justify-center px-3 md:px-30 mb-5' > 
            <div className='border-2 border-gray-300 p-4 md:w-1/2 w-full rounded-2xl' data-aos="zoom-in">
              <p className='font-serif text-center text-xl md:text-2xl md:mb-5 mb-2 font-bold'>Techincal Skills</p>
                <div className='grid grid-cols-2 md:gap-x-12 gap-5'>
                  <div>
                    <p className='inline-flex items-center text-lg'><BiBrightness className='mr-2' /> HTML 5</p>
                  </div>
                  <div>
                  <p className='inline-flex items-center text-lg'><BiBrightness className='mr-2' /> CSS 3</p>
                  </div>  
                  <div>
                  <p className='inline-flex items-center text-lg'><BiBrightness className='mr-2' /> Javascript</p>
                  </div>
                  <div>
                  <p className='inline-flex items-center text-lg'><BiBrightness className='mr-2' />Tailwind css</p>
                  </div>
                  <div>
                  <p className='inline-flex items-center text-lg'><BiBrightness className='mr-2' /> React</p>
                  </div>
                  <div>
                  <p className='inline-flex items-center text-lg'><BiBrightness className='mr-2' /> Redux</p>
                  </div>
                </div>
            </div>
            <div className='border-2 border-gray-300 p-4 md:w-1/2 w-full rounded-2xl md:pr-5' data-aos="zoom-in" >
              <p className='font-serif text-center text-xl md:text-2xl md:mb-5 mb-2 font-bold'>Non-Techincal Skills</p>
                <div className='grid grid-cols-2 md:gap-x- gap-y-5'>
                  <div>
                    <p className='inline-flex items-center md:text-lg'><BiBrightness className='mr-2' /> Problem Solving</p>
                  </div>
                  <div>
                  <p className='inline-flex items-center md:text-lg'><BiBrightness className='mr-2' />Continuous Learning</p>
                  </div>  
                  <div>
                  <p className='inline-flex items-center md:text-lg'><BiBrightness className='mr-2' />Team Work</p>
                  </div>
                  <div>
                  <p className='inline-flex items-center md:text-lg'><BiBrightness className='mr-2' /> Communication</p>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skill
