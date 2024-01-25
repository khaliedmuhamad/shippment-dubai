
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Services = ({data,language}) => {


  const [content,setContent] = useState(data[0])
  const {images,title,pragraph,list} =content;
  const[update,setUpdate] = useState(false);
const handelChange = (index) =>{
  setContent(data[index])
  setUpdate(prev => !prev)
}
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
};


  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView,update]);


useEffect(() => {
  setContent(data[0])
}, [language])



  return (
    <div className='px-8 py-24  bg-pbg  relative   '>

      <motion.div
        className="mt-0 flex justify-center align-center md:flex-row flex-col"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      
      >
        <motion.div
        
        className="h-[400px] self-end flex justify-center items-center"
        variants={imageVariants}
        
        >
        <div className=" relative w-[360px] h-full ">
                <img
                           data-aos-duration="1500"
                           data-aos-offset="300"
                           data-aos="fade-left"
                src={images[0]} alt="" className="shadow-2xl  absolute z-10   top-[80px]  start-[040px]  w-[100px] h-[200px] border-pbg border-4 object-cover rounded-full" />
                <img 
                           data-aos-duration="1500"
                           data-aos-offset="300"
                           data-aos="fade-left"src={images[1]} alt="" className="shadow-2xl  absolute z-10   top-[180px] start-[100px] w-[100px] h-[200px] border-pbg border-4 object-cover rounded-full" />
                <img
                           data-aos-duration="1500"
                           data-aos-offset="300"
                           data-aos="fade-left"
                            src={images[2]} alt="" className="  absolute z-20   top-[50px]  start-[170px] w-[100px] h-[200px] border-pbg border-4 object-cover rounded-full" />
            </div>
        </motion.div>
            <div className="md:w-2/4 w-full md:text-start  text-center">
              <div className=" w-full rounded-md bg-gradient-to-r from-pbg via-[#00969b85] to-yellow-pbg p-[1px]">
              <nav className="flex py-4 align-center  h-full w-full items-center justify-center bg-pbg back md:text-md text-sm font-semibold ">
                <button onClick={()=>{handelChange(0)}} className='pe-5 active cursor-pointer hover:text-fitxt text-ptxt '>{data[0]?.title}</button>
                <button onClick={()=>{handelChange(1)}}className='pe-5 border-x-2  w-40 cursor-pointer text-center hover:text-fitxt text-thtxt'>{data[1]?.title}</button>
                <button onClick={()=>{handelChange(2)}}className='ps-5 hover:text-fitxt cursor-pointer text-thtxt'>{data[1]?.title}</button>
              </nav>
              </div>
            <div className="pt-4"                           data-aos-duration="1500"
                           data-aos-offset="300"
                           data-aos="fade-left">
              <h4 className="text-stxt text-lg font-bold">{title}</h4>
              <p className="my-2 text-stxt text-md font-semibold">
                {pragraph}
              </p>
            
              <ol className="relative border-s border-chtxt  mt-6 ms-2">     
              
              {list?.map((el,i)=>{
                return <li key={i} className="mb-6 ms-4">            
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-fitxt  rounded-full -start-2 ring-8 ring-pbg mt-1.5">
                  </span>
                  <h3 className="flex items-center mb-1 text-md font-semibold text-thtxt ">{el.title}</h3>
                  <p className="flex items-center mb-1 text-sm font-semibold text-thtxt opacity-50">{el.pragraph}</p>
              </li>})}
                        


</ol>
            </div>
             
             
            </div>
      </motion.div>

    </div>
  )
}
