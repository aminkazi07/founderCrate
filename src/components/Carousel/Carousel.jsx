import { useState } from "react";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carousel">
        <button type="button" onClick={prevSlide} className="arrow arrow-left">
          {"<"}
        </button>
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <button type="button" onClick={nextSlide} className="arrow arrow-right">
          {">"}
        </button>
        {/* <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span> */}
      </div>
      <div className="carousel-extra">
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={
                slide === idx ? "slide slide-hidden small-slide" : "slide"
              }
            />
          );
        })}
      </div>
    </>
  );
};
