import React from "react";
import potrait from '../assets/potrait.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
    return(
        <>
        <div className="block md:flex mx-5 md:mx-20 md:mt-8 gap-20 " id="home">
            <div className=" md:w-1/3 content-center">
                <img src={potrait} alt="pictrue" className="rounded-full shadow-lg" />
            </div>
            <div className="content-center md:w-2/3 px-0 md:px-5 mt-5 md:mt-0 bg-fuchsia-50">
                <p className="text-3xl pb-5" data-aos="fade-out">------Hello!</p>
                <h1 className="text-5xl font-bold pb-5" data-aos="fade-out">I am <span className="text-red-900">Bibek</span> Magar</h1>
                <p className="text-lg" data-aos="fade-out">
                  A passionate Frontend Developer with a love for generaitng ideas into reality. Welcome to my online portfolio, where you can explore my projects, skills, and journey.
                </p>

            </div>
            
        </div>
        </>
    );
}