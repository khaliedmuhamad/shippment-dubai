import React from "react";



import "./Footer.css";

import { Map } from "../../components/map/Map";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { logo } from "../../../public/EXPORTS";
export const Footer = ({footer,language}) => {
  const {paragraph,p1,p2,li,sections,h1,btn,pla} = footer;
  const socialData = [
   ' <ImFacebook2 />',
   ' <ImTwitter />',
    '<ImLinkedin />',
    '<ImPaypal />',
  ];
  return (

        <footer className='relative flex justify-between items-center flex-col md:flex-row' >
          <div className="md:w-2/3 w-full bg-thbg pt-10 pb-10 z-20  md:h-[500px] h-full px-8 rounded-3xl" style={{borderRadius:language === 'En'?"0 250px 0 0":"250px 0  0 0"}}>
          <div className="relative  z-20 flex flex-col md:flex-row justify-center items-start flex-wrap">
        <div className="brand text-3xl font-extrabold text-stxt text-center w-full mb-8 self-center">
            <img src={logo} className="w-[240px]" />
      </div>
            <div className="w-full md:w-4/5">

                <p className='text-thtxt pe-2 text-sm w-4/5'>{paragraph}</p>
                <br />
                
                <p className='text-thtxt pe-2 text-sm w-4/5'>{p1}</p>
                <p className='text-thtxt pe-2 text-sm w-4/5 mt-1'>{p2}</p>
                
                
                <div className="social my-5 flex">
                  <a target='_blank' className='p-3 text-thtxt hover:text-ptxt transition-all  cursor-pointer  group'>
                  <FaFacebookF  className='text-2xl group-hover:scale-110' />
                  </a>
                  <a target='_blank' className='p-3 text-thtxt hover:text-ptxt transition-all  cursor-pointer  group'>
                  <FaLinkedinIn   className='text-2xl group-hover:scale-110' />
                  </a>
                  <a target='_blank' className='p-3 text-thtxt hover:text-ptxt transition-all  cursor-pointer  group'>
                  <FaInstagram      className='text-2xl group-hover:scale-110' />
                  </a>
                </div>
            </div>
            <div className="w-full md:w-1/5 mt-8 md:mt-0">
                <h5 className='text-xl font-normal text-ptxt mb-8'>{li}</h5>
                <ul className='text-thtxt  text-sm'>
                  {sections?.map((section,i)=>{
                    return(
                      <li key={i} className='py-1 hover:text-ptxt cursor-pointer hover:underline underline-offset-4'>
                      <a className='block w-full' href={`#${section.id}`}>{section.head}</a>  
                    </li>
                    );
                  })}
                </ul>
            </div>
  
        </div>
          </div>
          <div className="static md:absolute hidden md:block  md:w-2/3 start-1/3 z-10">   <Map /></div>
     

      
     
    </footer>



  );
};
