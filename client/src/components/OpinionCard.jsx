
import { BsChatQuoteFill } from "@react-icons/all-files/bs/BsChatQuoteFill";
export const OpinionCard = ({massage,img,name,position}) => {
  return (
    <figure 
    data-aos-duration="1500"
    data-aos-offset="300"
    data-aos="fade-right"
    
    
    className="flex flex-col justify-center items-start p-8 text-left   lg:p-10">
        <span className='text-4xl text-ptxt mb-2'>
        <BsChatQuoteFill />
        </span>
    <blockquote className="mx-auto mb-8 max-w-2xl font-medium text-lg text-stxt">
        <p className="my-4">
        &quot;
            {massage}
            &quot;
            </p>
    </blockquote>
    <figcaption className="flex justify-center items-center space-x-3">
        {img?
                <img className="w-9 h-9 rounded-full" src={
                    new URL(img, import.meta.url).href
                    } alt={`${name} - ${position}`} />
    :
    <BsChatQuoteFill className=""/>
    }

        <div className="space-y-0.5 font-medium text-left text-stxt ">
            <div>{name}</div>
            <div className="text-sm font-light text-stxt opacity-25 ">{position}</div>
        </div>
    </figcaption>    
</figure>
  )
}
