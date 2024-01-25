import { log } from "../../public/EXPORTS";
import '../styles/features.css'
import {GoLocation} from '@react-icons/all-files/go/GoLocation'
import {FaStoreAlt} from '@react-icons/all-files/fa/FaStoreAlt'
import {MdAttachMoney} from '@react-icons/all-files/md/MdAttachMoney'
import {BsHouseDoor} from '@react-icons/all-files/bs/BsHouseDoor'

export const Features = ({features}) => {


  const logos = [
    <GoLocation key={0} />,<FaStoreAlt key={1} />,<MdAttachMoney key={3} />,<BsHouseDoor  key={4}/>
  ]
  return (
<section className='features bg-pbg' id='features'>
  <div className='features-overlay lg:px-32 px-8'>
    <div className=' '>
      <p className='text-thtxt text-lg  text-center'>{features?.p}</p>
      <h2 className='text-ptxt text-5xl text-center'>{features?.h2}</h2>

      <div className='flex md:flex-row flex-col justify-center items-center'>

        <div className='w-full md:w-1/4'>
          <ul className='flex flex-col items-center justify-center space-y-4'>

            {features?.list?.slice(0, 2).map((el, ind) => {
              return (
                <li
                data-aos-duration="1500"
                data-aos-offset="300"
                data-aos="fade-right"
                
                className='w-full my-2' key={ind}>
                <div className='flex flex-col text-center md:text-start justify-center md:items-start items-center p-2'>
                  <div className='logo-overlay overflow-hidden flex justify-center items-center bg-pbg text-ptxt text-3xl'>
                    <span className='block  '>{logos[ind]}</span>
                  </div>
                  <h3 className='text-lg text-ptxt font-semibold'>{el.head}</h3>
                  <p className='text-sm text-thtxt font-semibold'>{el.p}</p>
                </div>
              </li>
              );
            })}
          </ul>
        </div>

        <div className='hidden md:block w-1/2 text-center'>
          <img src={log} className='w-3/4 h-auto' alt='logistics' />
        </div>

        <div className='w-full md:w-1/4'>
          <ul className='flex flex-col items-center justify-center space-y-4'>
            {features?.list?.slice(2, 4).map((el, ind) => {
              return (
                <li
                data-aos-duration="1500"
                data-aos-offset="300"
                data-aos="fade-left"
                
                className='w-full my-2' key={ind}>
                <div className='flex flex-col text-center md:text-start justify-center md:items-start items-center p-2'>
                  <div className='logo-overlay overflow-hidden flex justify-center items-center bg-pbg text-ptxt text-3xl'>
                    <span className='block  '>{logos[ind+2]}</span>
                  </div>
                  <h3 className='text-lg text-ptxt font-semibold'>{el.head}</h3>
                  <p className='text-sm text-thtxt font-semibold'>{el.p}</p>
                </div>
              </li>
              );
            })}
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}
