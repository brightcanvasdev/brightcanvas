import { useState, useEffect } from "react";
import React from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const goToLSlide = (index) => {
    setCurr(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative bg-white py-10">
      <div
        className="flex items-center  transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {/* {slides} */}

        {React.Children.map(slides, (slide) => (
          <div className="flex justify-center items-center w-full flex-shrink-0 ">
            {slide}
          </div>
        ))}
      </div>

      {/* <div className="absolute  bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-gray-400 hover:bg-gray-800 rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              onClick={() => goToLSlide(i)}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
