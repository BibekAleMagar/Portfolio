import React from 'react'
import { FaSchool } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";

const Education = () => {
  return (

    <>
      <div className='flex justify-center my-3' id='education'>
        <p className=' text-2xl md:text-4xl py-2 px-6 mb-4 font-semibold font-serif'>Qualifications</p>
      </div>
      <div className='flex px-2 justify-center md:px-30 pb-4 mb-5' >
        <div className='w-1/2 flex flex-col justify-end mr-2 gap-20 items-end'>
            <div className='shadow px-3 py-2' data-aos="fade-in">
              <div className='flex items-center gap-2 justify-end'>
              <p className='text-end md:text-3xl font-serif'>School</p>
              <FaSchool className='' size={30}/>
              </div>
              <p className='text-end md:text-2xl font-serif'>Peace Nepal Academy</p>
              <p className='text-end md:text-lg font-serif'>2075 B.S</p>
            </div>
            <div className='shadow px-3 py-2' data-aos='fade-in'>
              <div className='flex items-center gap-2 justify-end'>
              <p className='text-end md:text-3xl font-serif'>Bachelors</p>
              <GiGraduateCap className='' size={30}  />
              </div>
              <p className='text-end md:text-2xl font-serif'>Texas College of Management and IT</p>
              <p className='text-end text-lg font-serif'>Running</p>
            </div>
        </div>
        <div className='w-1/2 border-l-5 border-black flex justify-start items-center'>
            <div className='shadow px-3 py-2'  data-aos='fade-in'>
              <div className='flex items-center gap-2 flex-row-reverse justify-end'>
              <p className='text-start md:text-3xl font-serif'>High School</p>
              <BiSolidSchool className='' size={30}/>
              </div>
              <p className='text-start md:text-2xl font-serif'>Xavier International College</p>
              <p className='text-start text-lg font-serif'>2078 B.S</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Education
