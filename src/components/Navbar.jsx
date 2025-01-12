import React from "react";
import { useState } from "react";
import kendrix from '../assets/kendrix.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const NavBar = () =>{
  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () =>{
      setIsOpen(!isOpen);
    };
  
  return(
    <>
      <div className="sticky top-0 bg-white flex md:flex justify-between w-full px-5 md:px-15 py-2 shadow">
        <div className="">
          <a href="#home"><img src={kendrix} alt="logo" className="h-auto w-auto"></img></a>
        </div>
        <div className={`items-center hidden md:flex`}>
          <ul className="flex text-2xl gap-30 md:gap-10">
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#home">Home</a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#edu">Education</a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#skill">Skills </a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#project">Projects</a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#contact">Contact Me </a></li>
          </ul>
        </div>
        <div className="md:hidden justify-self-center h-100%">
        <button className="shadow" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2xl" className="p-1" />
        </button>
        </div>
        
      </div>
      {
          isOpen && (
            <div className="md:hidden flex flex-col items-center shadow"> 
            <ul className="block text-2xl gap-4"> 
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#home">Home</a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#edu">Education</a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#skill">Skills </a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#project">Projects</a></li>
            <li className="hover:text-red-900 hover:underline hover:underline-offset-4"><a href="#contact">Contact Me </a></li>
              </ul>
            </div>
          )
        }
      </>
  );
}
