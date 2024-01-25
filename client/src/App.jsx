import { NavBar } from "./components/NavBar"
import { Features } from "./sections/Features"
import { Services } from "./sections/Services"
import { Testimonials } from "./sections/Testimonials"
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react"


import { Headers } from "./sections/Headers"
import { multilang } from "./language/handelLanguage";
import {BsArrowUp} from '@react-icons/all-files/bs/BsArrowUp'
import { Footer } from "./sections/Footer/Footer";
import OurTeam from "./sections/OurTeam/OurTeam";
export const  App = () => {

    useEffect(() => {
      AOS.init();
    }, []);

    const toUpFn = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });}  
      const [language,setLanguage] = useState('En');

      const [theme,setTheme] = useState(true);


  return (
    <div className={`bg-pbg ${theme?'light':'dark'} overflow-hidden`}>
           <div className="fixed start-10 bottom-10 bg-ptxt text-zinc-50  opacity-75 hover:opacity-100 p-2 rounded-full z-50">
        <button
          className=" rounded-full w-6 h-9  flex justify-center items-center"
          onClick={toUpFn}
          role="button"
          aria-label=""
        >
  <BsArrowUp className="text-3xl animate-bounce"/>
        </button>
      </div>
    <NavBar btn={multilang(language).navbar.btn} language={language} setLanguage={setLanguage} theme={theme} setThemetoggle={setTheme} sections={multilang(language).navbar.sections} />
  
    <div id="Header"
    

    
    
    >  <Headers header={multilang(language).header}  /></div>
    <div id="Services"
    

    
    
    >    <Services language={language} data={multilang(language).services.data} /></div>
    <div id="Features">    <Features features={multilang(language).features} /></div>
    <div id="Testimonials">    <Testimonials testimonials={multilang(language).testimonials} language={language} /></div>
    <div id="OurTeam">   <OurTeam ourteam={multilang(language).ourteam} /></div>
    <Footer footer={multilang(language).footer} language={language} /> 
    </div>
  )
}


export default App;