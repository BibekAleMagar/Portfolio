import React, { useState } from "react";
import Kendrix from "../assets/Kendrix.png";
import { HiViewList } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Education from "./Education";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    
      <div className="flex py-2 md:px-5 px-2 shadow items-center justify-between fixed top-0 w-full bg-white z-50" >
        <div>
          <a href="#home"><img src={Kendrix} alt="Logo" className="h-8 md:h-10 w-15 md:w-full" /></a>
        </div>
        <div className="hidden md:flex">
          <ul className="md:flex gap-x-20 text-xl justify-end items-center">
            <li className="hover:underline underline-offset-3">
              <a href="#home">Home</a>
            </li>
            <li className="hover:underline underline-offset-3">
              <a href="#skill">Skills</a>
            </li>
            <li className="hover:underline underline-offset-3">
              <a href="#education">Educations</a>
            </li>
            <li className="hover:underline underline-offset-3">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:underline underline-offset-3">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex md:justify-center">
          <button className="bg-[#004AAD] md:p-2 p-1 rounded-xl md:rounded-4xl text-white text-nowrap">
            Download C.V
          </button>
        </div>
        <div className="md:hidden">
          <HiViewList size={35} onClick={() => setToggle(true)} />
        </div>
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-md z-50 transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-2 border-b-3">
          <h2 className="text-xl font-semibold">Menu</h2>
          <IoClose size={30} className="cursor-pointer" onClick={() => setToggle(false)} />
        </div>
        <ul className="flex flex-col gap-y-5 text-center text-xl mt-5 font-serif">
          <li className="hover:underline underline-offset-3 ">
            <a href="#home" onClick={() =>setToggle(false)}>Home</a>
          </li>
          <li className="hover:underline underline-offset-3">
            <a href="#education" onClick={() =>setToggle(false)}>Education</a>
          </li>
          <li className="hover:underline underline-offset-3">
            <a href="#skill" onClick={() =>setToggle(false)}>Skills</a>
          </li>
          <li className="hover:underline underline-offset-3">
            <a href="#projects" onClick={() =>setToggle(false)}>Projects</a>
          </li>
          <li className="hover:underline underline-offset-3">
            <a href="#contact" onClick={() =>setToggle(false)}>Contact</a>
          </li>
        </ul>
      </div>
      {toggle && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-md bg-opacity-100 z-40"
          onClick={() => setToggle(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
