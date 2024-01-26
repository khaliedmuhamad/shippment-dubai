import React from "react";
import "./Sponsors.css";
import { costco, amazone, power, tesco, microsoft } from "../../../public/EXPORTS";


export const Sponsors = () => {
  const sponsorsData = [costco, amazone, power, tesco, microsoft];
  return (
    <section className=" py-5 bg-hotxt ">
      <div className="px-4">
        <div className="flex justify-center items-center">
          {sponsorsData?.map((el, n) => {
                return (
                  <div className="
                  flex justify-center items-center
                  " key={n}>
           
                      <img
                        data-aos-duration="1500"
                        data-aos-offset="0"
                        data-aos="fade-top"
                        className="sponsor-logo"
                        src={el}
                        width="60%"
                        alt={el}
                      />
                    </div>
             
                );
              })}
        </div>
      </div>
    </section>
  );
};
