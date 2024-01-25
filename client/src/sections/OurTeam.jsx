import { truck } from "../../public/EXPORTS";

export const  OurTeam = ({ourTeam}) => {
  const {h1,h2,h3,h4} = ourTeam
  return (
    <div className="bg-pbg flex flex-col justify-center items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[580px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">

        <div className="relative flex w-full max-w-[1602px] flex-col items-stretch mt-11 mb-14 max-md:max-w-full max-md:my-10">
          <div className="px-px max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                <div 
                            data-aos-duration="1500"
                            data-aos-offset="300"
                            data-aos="fade-right"
                
                className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                  <div className="text-ptxt text-5xl font-extrabold self-stretch max-md:max-w-full max-md:text-4xl">
                    {h1}
                    <br />
                    {h2}
                  </div>
                  <div className="text-thtxt text-2xl font-medium self-stretch mt-9 max-md:max-w-full">
                    {h3}
                    <br />
                    {h4}
                  </div>
                </div>
              </div>
              <div 
                          data-aos-duration="1500"
                          data-aos-offset="300"
                          data-aos="fade-right"
              
              className="flex flex-col items-stretch justify-center  w-3/4  md:w-[24%] ml-5 max-md:w-full max-md:ml-0 ">
                <img
                  loading="lazy"
                  src={truck}
                  className="aspect-[0.89] object-contain object-center w-[363px] mx-auto overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
              <div 
                          data-aos-duration="1500"
                          data-aos-offset="300"
                          data-aos="fade-right"
              
              className="flex flex-col items-stretch  w-3/4 mx md:w-[24%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={truck}
                  className="aspect-[0.89] object-contain mx-auto object-center w-[363px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="mt-9 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

 

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}