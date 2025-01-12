import React, {useEffect} from "react";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Education } from "./components/Education";
import { Skill } from "./components/Skill";
import {Project} from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500 , 
      once: false, 
    });
  }, []);

  return (
    <div>
     <NavBar />
     <Home />
     <Education />
     <Skill />
     <Project />
     <Contact />
     <Footer />
    </div>
  )
}

export default App;
