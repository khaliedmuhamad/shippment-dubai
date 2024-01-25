import  { useRef } from 'react'
import { RiArrowRightLine } from '@react-icons/all-files/ri/RiArrowRightLine'
import { Carousel } from '../components/Carousel';



export const Testimonials = ({testimonials,language}) => {
    const {h21,h22,h23,h24,opinions} = testimonials;
    const sliderRef = useRef();
    const next = () => {
        sliderRef.current.slickNext();
      }
  
      const previous = () =>  {
        sliderRef.current.slickPrev();
      }
  return (
    <section className='py-20 bg-sbg'>
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-center space-x-10r px-10 md:px-16">
                <div 
                            data-aos-duration="1500"
                            data-aos-offset="300"
                            data-aos="fade-right"
                
                className="md:w-1/2 w-full">

                <h2 className='text-2xl lg:text-5xl  font-extrabold text-stxt  upper'>
                {h21}  

            <span className=' text-fitxt 0 mx-2'>{h22}</span>
            <br />
            {h23}
        </h2>
        <p className=' text-md font-bold text-thtxt mt-9   w-full upper'>
            
            {h24}
            </p>
                    <div className="flex mt-6 drop-shadow-2xl">
                    <button role='button' aria-label="" className='drop-shadow-sm hover:drop-shadow-xl me-5 bg-sbg hover:bg-thbg w-[50px] h-[50px] rounded-full border-4 border-fitxt hover:border-ptxt flex justify-center items-center text-xl  text-ptxt hover:text-ptxt transition-all duration-300 rotate-180' onClick={previous}>
                        <RiArrowRightLine />
                    </button>
                    <button role='button' aria-label="" className='drop-shadow-sm hover:drop-shadow-xl bg-sbg hover:bg-thbg w-[50px] h-[50px] rounded-full border-4 border-fitxt hover:border-ptxt flex justify-center items-center text-xl  text-ptxt hover:text-ptxt transition-all duration-300' onClick={next}>
                        <RiArrowRightLine />
                    </button>
                    </div>

                </div>
                <div className="md:w-1/2 w-full">


<Carousel sliderRef={sliderRef} opinions={opinions} language={language} />





                </div>
            </div>
    </section>
  )
}
