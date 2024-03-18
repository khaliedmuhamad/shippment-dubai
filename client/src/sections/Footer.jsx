

import { FaFacebookF  } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn  } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram   } from "@react-icons/all-files/fa/FaInstagram";
import { logo } from "../../public/EXPORTS";


export const Footer = ({footer}) => {
  const {paragraph,p1,p2,li,sections,h1,btn,pla} = footer;
  return (
    <footer className='bg-thbg  px-8 pt-32 pb-5  items-center relative' >
      <div className="absolute top-0 right-0 z-10">
      <svg width="153" height="232" viewBox="0 0 283 382" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="322.5" cy="59.5" r="262.5" stroke={'var(--sbg)'} strokeWidth="120"/>
</svg>

      </div>
      <div className="absolute bottom-0 left-0 z-10">
      <svg width="146" height="174" viewBox="0 0 146 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.35" cx="-3.5" cy="149.5" r="119.5" stroke={'var(--sbg)'} strokeWidth="60"/>
</svg>


      </div>

        <div className="relative z-20 flex flex-col md:flex-row justify-center items-start flex-wrap">
        <div className="brand text-3xl font-extrabold text-stxt text-center w-full mb-8 self-center">
                    <img src={logo} className="w-[240px]" />
      </div>
            <div className="w-full md:w-2/5">

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
            <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <h5 className='text-xl font-normal text-ptxt mb-8'>{h1}</h5>
            <p className='text-thtxt  text-sm mb-3'>{pla}</p>
            <div className="bg-sbg flex justify-between items-center ps-5 py-2 px-3 w-full rounded-full">
                <input type="email" name='email' id='user-email' autoComplete='' className="w-2/3 bg-transparent outline-none border-0" placeholder='aaaaaaa@xyz.com'/>
                <button role='submit' aria-label="Send"  className='w-1/3 bg-ptxt py-2 px-8 rounded-full shadow-lg text-stxt' >{btn}</button>
            </div>
            </div>
        </div>
        

        <div className="w-full flex justify-end items-end flex-wrap text-ptxt/25">
        © 2024  QAT. All rights reserved.  
        </div>
    </footer>
  )
}
