import { bg, euroTruck, header, truck } from "../../public/EXPORTS"
import '../styles/master1.css'

export const Headers = ({header}) => {
  const {h11,h22,h23,h24,h25} = header;
  return (

<div className="DigitalHeader h-[70vh] flex justify-center items-center">

<div className="px-12 ">
  <div className="pt-5 flex flex-wrap items-center justify-center md:justify-start">

    <div className="w-full md:w-1/2 text-center md:text-start">
          <h2 className="font-extrabold text-4xl md:text-6xl uppercase text-stxt"
                           data-aos-duration="1500"
                           data-aos-offset="0"
                           data-aos="fade-left"
          
          >
            <span className="font-thin me-3">{h11}</span>
            <br className="block md:hidden" />
            {h22}
          <img src={euroTruck} className="object-cover inline h-12 w-32 mx-3 border-ptxt border-2 rounded-full" alt="" />
          {h23}
            <br />
            {h24}
            </h2>
            <p className="w-full mt-3 text-ptxt"
                             data-aos-duration="1500"
                             data-aos-offset="0"
                             data-aos="fade-left"
            
            
            
            >{h25} </p>
        </div>

    <div className="w-full md:w-1/2">
          <img
                 data-aos-duration="1500"
                 data-aos-offset="0"
                 data-aos="fade-left"
            src={truck}
            alt="logo"
            loading="lazy"
            className="DigitalHeader-logo w-full h-full  object-cover"
          />
   
     
    </div>

  </div>
</div>
</div>



  )
}
//     <header className="bg-pbg h-[80vh] flex flex-col md:flex-row justify-center items-center relative overflow-hidden ">
//         <div className="absolute start-5 top-5 opacity-15 w-[390px]">
//         <svg height="100%" width="100%">
//   <defs>
//     <pattern id="doodad" width="40" height="40" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="">
//       <rect width="100%" height="100%" fill="transparent"/>
//       <path d="M-0.5 20v20h1v-20zM39.5 20v20h1v-20z" fill="rgba(113, 128, 150, 1)"/>
//       <path d="M-10 29.5 h60 v1 h-60z" fill="rgba(45, 55, 72, 1)"/>
//       <path d="M19.5 0v40h1v-40z" fill="rgba(113, 128, 150, 1)"/>
//       <path d="M-10 9.5h60v1h-60z" fill="rgba(45, 55, 72, 1)"/>
//       <path d="M-0.5 0v20h1v-20zM39.5 0v20h1v-20z" fill="rgba(113, 128, 150, 1)"/>
//     </pattern>
//   </defs>
//   <rect fill="url(#doodad)" height="200%" width="200%"/>
// </svg>
//         </div>
//         <div className="md:ps-9 md:px-8 px-2 absolute start-0  h-full w-full md:w3/4 pt-20 font-thin md:text-5xl text-3xl  tracking-wider leading-10 text-center md:text-start z-20">
//             <div className="">
//             <h1 className="  text-ptxt ">
//                 QAFILAT ALOROUBA TRANSPORT 
//             </h1>
//                 <span className=" my-5   font-bold text-stxt  items-center">Streamlining L
//                 <span className="md:hidden">O</span>
//                 <img src={euroTruck} alt="QAFILAT ALOROUBA TRANSPORT" className="w-30 h-50 md:w-20 md:h-12 inline rounded-full object-cover border-1 mb-3 mx-0 border-thtxt" /> gistics </span>
//                 & 
//                 <span className=" font-bold text-stxt justify-center items-center ms-2">
//                  Delivering Excellence.
//                 </span>
//             </div>
//         </div>
//         <div className="md:block hidden absolute -end-24">
//         <img src={truck} className="" alt="Truck of QAFILAT ALOROUBA TRANSPORT." width={'100%'} />
//         </div>
//     </header>


/*

<div className="content pb-16 z-10  h-[80vh] flex flex-wrap justify-center  items-center pt-20 relative overflow-hidden bg-slate-600 ">
<div className="absolute backgroundEffect  start-0 top-0 w-full h-full bg-slate-400"

>


</div>
    <div className=" mx-auto px-8 z-20">
        <div className="home-sec0 tracking-widest flex flex-wrap justify-center items-center text-center">
          <h2 className="font-extrabold text-6xl uppercase text-stxt">
            <span className="font-thin me-3">{h11}</span>
            <br className="block md:hidden" />
            {h22}
          <img src={euroTruck} className="object-cover inline h-full w-9 border-ptxt border-2 rounded-full" alt="" />
          {h23}
            <br />
            {h24}
            </h2>
            <p className="w-full mt-3 text-ptxt">{h25} </p>
        </div>

        </div>
    </div>

    */