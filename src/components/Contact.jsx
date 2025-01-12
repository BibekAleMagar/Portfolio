import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, } from "react-icons/fa";
import emailjs from 'emailjs-com';


export const Contact = () =>{
    const sendEmail = (e) => 
        { e.preventDefault(); emailjs.sendForm('service_t90gtnf', 'template_2egrmg7', e.target, 'CUoX_dbC8un6w3vtX') 
            .then((result) => { 
                console.log(result.text);
             }, (error) => { 
                console.log(error.text); 
            }); 
        };
    return(
        <>  
           <div className="px-5 md:px-20 border-y-2 pb-5 border-orange-500" id="contact">
            <h1 className="text-5xl font-semibold">Get in Touch</h1>
            <div className="md:flex md:space-x-20">
                <div className="shadow-2xl px-2 md:w-1/2 md:px-5 flex flex-col justify-center">
                        <p className="text-3xl font-bold py-5">Let's Connect</p>
                        <p className="opacity-75 pb-5">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions</p>
                        <p className="pb-3">
                            <FontAwesomeIcon icon={faLocationDot} /> Gokarneshwor-5, Kathmandu
                        </p>
                        <p className="pb-3">
                            <FontAwesomeIcon icon={faPhone} /> 9810325091
                        </p>
                        <p className="pb-3">
                            <FontAwesomeIcon icon={faEnvelope} /> magarbibek71@gmail.com
                        </p>
                        <p className="pb-3 text-center font-semibold">Connect on Socail Media</p>
                        <div className="flex justify-center pb-3">
                            <a href="https://github.com/BibekAleMagar" target="_blank" className="mr-3">
                                <FaGithub size={40}/>
                            </a>
                            <a href="https://www.linkedin.com/in/bibek-undefined-7b0504255/" target="_blank" className="mr-3">
                                <FaLinkedin size={40}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100069479709655" target="_blank" className="mr-3">
                                <FaFacebook size={40}/>
                            </a>
                            <a href="https://www.instagram.com/b__bek__/" target="_blank" className="mr-3">
                                <FaInstagram size={40}/>
                            </a>
                        </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <form onSubmit={sendEmail} className="shadow p-5">
                        <label htmlFor="Name" className="font-bold text-xl">Full Name</label><br />
                        <input type="text" name="" id="" placeholder="Enter your name" required
                         className="border-2 border-black md:w-80 mb-1  p-2"/>  <br />
                          <label htmlFor="Name" className="font-bold text-xl">Email</label><br />
                        <input type="email" name="" id="" placeholder="Enter your email" required
                         className="border-2 border-black md:w-80 mb-1 p-2"/>  <br />
                          <label htmlFor="Name" className="font-bold text-xl">leave a message</label><br />
                        <input type="text" name="" id="" placeholder="Type your message" required
                         className="border-2 border-black md:w-80 mb-3 mt-2 p-3 h-40"/>  <br />
                         <button type="submit" onClick={sendEmail} className="bg-blue-700 w-full text-white text-xl py-3">
                                Send Message
                         </button>
                        

                    </form>
                </div>

            </div>

           </div>
        </>
    );
}