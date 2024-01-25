import { NavBar } from "./components/NavBar"
import { Features } from "./sections/Features"
import { Services } from "./sections/Services"
import { Testimonials } from "./sections/Testimonials"
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OurTeam } from "./sections/OurTeam"
import { useEffect, useState } from "react"
import { Footer } from "./sections/Footer"
import { truck } from "../public/EXPORTS"
import { Headers } from "./sections/Headers"
import { multilang } from "./language/handelLanguage";

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
    <div className={`bg-pbg ${theme?'light':'dark'}`}>
           <div className="fixed left-10 bottom-10 bg-blue-500/25 hover:bg-blue-500  p-2 rounded-full z-50">
        <button
          className=" rounded-full w-10 h-10  flex justify-center items-center"
          onClick={toUpFn}
          role="button"
          aria-label=""
        >
          <img
            src={truck}
            alt="Go To up"
            className="w-full rounded-full "
            width={"100%"}
          />
        </button>
      </div>
    <NavBar language={language} setLanguage={setLanguage} theme={theme} setThemetoggle={setTheme} sections={multilang(language).navbar.sections} />
  
    <div id="Header"
    
    data-aos-duration="2500"
    data-aos-offset="0"
    data-aos="fade-up"
    
    
    >  <Headers header={multilang(language).header}  /></div>
    <div id="Services"
    
    data-aos-duration="2500"
    data-aos-offset="100"
    data-aos="fade-up"
    
    
    >    <Services language={language} data={multilang(language).services.data} /></div>
    <div id="Features">    <Features features={multilang(language).features} /></div>
    <div id="Testimonials">    <Testimonials testimonials={multilang(language).testimonials} language={language} /></div>
    <div id="OurTeam">   <OurTeam ourTeam={multilang(language).ourTeam} /></div>
    <Footer footer={multilang(language).footer} />
    </div>
  )
}


export default App;