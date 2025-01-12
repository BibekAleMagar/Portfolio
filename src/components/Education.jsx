import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faBuildingColumns, faSchool} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';



export const Education = () =>{
    const [active,setActive] = useState('education');
    const Education = () => {
        setActive('education');
    };
    const Experience = () =>{
        setActive('experience');
    }

    return(
        <>
        <div className="mt-8 block text-white px-5 md:px-20 border-t-2 border-orange-500 pt-3" id="edu">
            <div className="flex justify-center gap-1 md:gap-20">
                    <button className="text-3xl text-black p-1 border-2 border-black hover:shadow-inner" onClick={Education}>
                        Education
                    </button>
                    <button className="text-3xl text-black p-1 border-2 border-black" onClick={Experience}>
                        Experience 
                    </button>
            </div>
         </div>
        <div className="flex justify-center mt-3 px-3 shadow pb-5">  
                {active === 'education' && 
                ( <div className="text-black"> 
                    <h2 className="text-3xl text-center font-bold">My journey</h2> 
                    <div className="flex mt-4 md:mt-7">
                        <div className="w-1/2 flex flex-col gap-y-40 md:gap-y-20">
                            <div className="shadow text-end mr-4 md:mr-8" data-aos="fade-out">
                                <div className="md:flex justify-end" >
                                <FontAwesomeIcon icon={faSchool} size="xl " className="md:mr-3"/>
                                <h1 className="text-2xl">Schooling</h1>
                                 </div>
                                <h5 className="text-xl font-bold">Peace Nepal Academy</h5>
                                <h5 className="text-xl">2018</h5>
                            </div>
                            <div className="shadow text-end mr-4 md:mr-8" data-aos="fade-out">
                                <div className="md:flex justify-end">
                                <FontAwesomeIcon icon={faBuildingColumns} size="xl " className="md:mr-3"/>
                                <h1 className="text-2xl">Bachelors</h1>
                                </div>
                                <h5 className=" text-xl font-bold">Texas College of Management and IT</h5>
                                <h5 className="text-xl">Running</h5>
                            </div>
                           
                        </div>
                        
                        <div className="w-1/2 border-l-4 border-black flex items-center pl-4 md:pl-8">
                        <div className="shadow flex flex-col content-center " data-aos="fade-out">
                                 <div className="md:flex justify-start">
                                 <h1 className="text-2xl order-2 md:order-1">High School</h1> 
                                 <FontAwesomeIcon icon={faGraduationCap} size="xl md:mr-3" className="md:ml-3 order-1 md:order-2"/>
                                 </div>
                                <h5 className="text-xl font-bold">Xavier International School</h5>
                                <h5 className="text-xl">2019</h5>
                            </div>
                        </div>
                    </div>
                 
                </div> )}


                {active === 'experience' && 
                ( <div id="education-content" className="text-black"> 
                <h2>Experience Content</h2> 
                <p>This is the education content.</p> 
                </div> )}            
        </div>


        
        </>
    );
}