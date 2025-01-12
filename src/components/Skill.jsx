import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe, faFilm, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png'
import github from '../assets/github.png'

export const Skill = () => {
        const [active,setActive] = useState('frontend');
        const frontEnd = () =>{
            setActive('frontend');
        };
        const backEnd = () =>{
            setActive('backend');
        };
        const tools = () =>{
            setActive('tools');
        };

    return(
        <>
        <h1 className="font-bold text-5xl text-center pt-5 border-t-2 border-orange-500" id="skill">Skills</h1>
        <div className="md:flex justify-center px-5 md:px-20 pt-5">
           
            
            <div className="md:w-1/2 flex flex-col items-center justify-center xl:items-end gap-y-10 mt-3 md:mt-">
             <button className="text-3xl border-2 border-gray-300 hover:shadow text-center xl:w-1/3 lg:mr-10" onClick={frontEnd}>
                <FontAwesomeIcon icon={faGlobe} className="mr-3"/>
                Frontend</button>
                <button className="text-3xl border-2 border-gray-300 hover:shadow text-center xl:w-1/3 lg:mr-10" onClick={backEnd}>
                <FontAwesomeIcon icon={faFilm} className="mr-3"/>
                Backend</button>
                <button className="text-3xl border-2 border-gray-300 hover:shadow text-center xl:w-1/3 lg:mr-10" onClick={tools}>
                <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-3"/>
                Tools</button>
            </div>
          
            <div className="md:w-1/2 flex md:ps-20 justify-center md:justify-start">
                {active === 'frontend' && (
                    <div className="grid grid-cols-2 gap-x-10 gap-y-5 items-center my-4" >
                        <div>
                            <img src={html} alt="html" className="h-20 w-20 object-cover"/>
                            <h1 className="text-center font-bold">Html</h1>
                        </div>
                        <div>
                            <img src={css} alt="html" className="h-20 w-20 object-cover"/>
                            <h1 className="text-center font-bold">Css</h1>
                        </div>
                        <div>
                            <img src={js} alt="html" className="size-20"/>
                            <h1 className="text-center font-bold">Javascript</h1>
                        </div>
                        <div>
                            <img src={react} alt="html" className="h-20 w-20 object-cover"/>
                            <h1 className="text-center font-bold">React</h1>
                        </div>
                        
                        
                    </div>
                )}
                 {active === 'backend' && (
                    <div>

                    </div>
                )}
                 {active === 'tools' && (
                    <div className="" >
                    <div>
                        <img src={github} alt="html" className="h-full w-full object-cover"/>
                        <h1 className="text-center font-bold text-3xl">Github</h1>
                    </div>

                    </div>
                )}
            </div>
        </div>    
        </>
    );
}