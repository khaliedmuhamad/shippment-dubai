import React, { useState, useEffect } from "react";
import "./OurTeam.css";

import { RiArrowRightLine } from '@react-icons/all-files/ri/RiArrowRightLine'
import { p1, p2, p3, p4 } from "../../../public/EXPORTS";

const OurTeam = ({ourteam}) => {
  const [index, setIndex] = useState(0);

  let peopleLang1 = ourteam.people[0];
  let peopleLang2 = ourteam.people[1];


  const people = [
    {
      id: 1,
      image: p1,
      name: peopleLang1.name,
      title: peopleLang1.title,
      quote: peopleLang1.quote,
    },
    {
      id: 2,
      image: p2,
      name: peopleLang2.name,
      title: peopleLang2.title,
      quote: peopleLang2.quote,
    }
  ];

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people.length]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section my-5">
      <div className="title">
        <h2>our Team </h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={`${name}+${id}`}>
              <img src={image} alt={name} className="person-img mx-auto" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <RiArrowRightLine className="rotate-180" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <RiArrowRightLine />
        </button>
      </div>
    </section>
  );
};

export default OurTeam;
