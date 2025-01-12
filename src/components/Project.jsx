import React from "react";
import Aslat from '../assets/Aslat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Project = () => {
    return(
        <>
            <div className="px-5 md:px-20 border-t-2 border-orange-500" id="project">
                <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-out">Featured Projects</h1>
                <div className="md:flex justify-between md:gap-8 pt-5 pb-3">
                    <div>
                        <div className="shadow-2xl bg-[url('C:\Users\LENOVO\Desktop\myPortfolio\myPortfolio\src\assets\Aslat.jpg')] bg-cover">
                            <div className="bg-opcaity-75 opacity-0 hover:opacity-50 bg-black text-white">
                                <h1 className="text-5xl h-44">Asalt Guidance</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam reiciendis et, soluta cum, debitis deleniti tempore explicabo nobis dolore velit odit.</p>   
                            </div>   
                        </div>  
                        <div>
                            <h1 className="text-center text-2xl font-semibold shadow p-2">
                                <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-4"/>
                                 Visit Link
                            </h1>
                        </div>
                    </div> 
                    <div>
                        <div className="shadow-2xl bg-[url('C:\Users\LENOVO\Desktop\myPortfolio\myPortfolio\src\assets\Aslat.jpg')] bg-cover">
                            <div className="bg-opcaity-75 opacity-0 hover:opacity-50 bg-black text-white">
                                <h1 className="text-5xl h-44">Asalt Guidance</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam reiciendis et, soluta cum, debitis deleniti tempore explicabo nobis dolore velit odit.</p>   
                            </div>   
                        </div>  
                        <div>
                            <h1 className="text-center text-2xl font-semibold shadow p-2">
                                <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-4"/>
                                 Visit Link
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className="shadow-2xl bg-[url('C:\Users\LENOVO\Desktop\myPortfolio\myPortfolio\src\assets\Aslat.jpg')] bg-cover">
                            <div className="bg-opcaity-75 opacity-0 hover:opacity-50 bg-black text-white">
                                <h1 className="text-5xl h-44">Asalt Guidance</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam reiciendis et, soluta cum, debitis deleniti tempore explicabo nobis dolore velit odit.</p>   
                            </div>   
                        </div>  
                        <div>
                            <h1 className="text-center text-2xl font-semibold shadow p-2"><a href="#"> 
                                <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-4"/>
                                 Visit Link
                                 </a>
                            </h1>
                        </div>
                    </div>               
                    
                </div>
            </div>
        </>
    );
}