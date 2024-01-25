
import { OpinionCard } from './OpinionCard'
import Slider from "react-slick";

export const Carousel = ({sliderRef,opinions,language}) => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1200,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl:false,
        
      };


  return (
<div dir={language === 'En'?'ltr':'rtl'}>
    <Slider ref={sliderRef} {...settings} >
        {opinions?.map((el,i)=>{
            return(
                <div key={i}>
                <OpinionCard {...el} />
                </div>
            );
        })}
  </Slider>
  </div>
  )
}
