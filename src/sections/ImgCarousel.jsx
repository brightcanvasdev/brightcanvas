import React from "react";
import "./ImgCarousel.css";
import Carousel from "../components/Carousel";

const CarouselData = [
  {
    id: 1,
    imagePath: "./src/assets/CarouselImages/da.webp",
  },
  {
    id: 2,
    imagePath: "./src/assets/CarouselImages/e1.webp",
  },
  {
    id: 3,
    imagePath: "./src/assets/CarouselImages/EngineersDay.webp",
  },
  {
    id: 4,
    imagePath: "./src/assets/CarouselImages/friendship.webp",
  },
  {
    id: 5,
    imagePath: "./src/assets/CarouselImages/Fusion.webp",
  },
  {
    id: 6,
    imagePath: "./src/assets/CarouselImages/Porsche.webp",
  },
];
const images = [
  "./src/assets/CarouselImages/da.webp",
  "./src/assets/CarouselImages/e1.webp",
  "./src/assets/CarouselImages/EngineersDay.webp",
  "./src/assets/CarouselImages/friendship.webp",
  "./src/assets/CarouselImages/Fusion.webp",
  "./src/assets/CarouselImages/Porsche .webp",
];

const ImgCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden my-20">
      {/* Black Overlay Shapes */}
      <img
        src="./src/assets/CarouselOverlayTop.png"
        alt="overlay"
        className="absolute left-0 top-0 h-20 w-32 md:w-48 lg:w-full z-10 scale-170"
      />

      <img
        src="./src/assets/CarouselOverlayBottom.png"
        alt="overlay"
        className="absolute left-0 bottom-0 h-20 w-32 md:w-48 lg:w-full z-10 scale-170"
      />
      {/* <div className="flex w-max animate-scroll gap-10">
        {[...images, ...images].map((src, index) => (
			<img
            key={index}
            src={src}
            alt="logo"
            className="h-12 md:h-16 lg:h-20"
          />
		  ))}
		  </div> */}

      {/* <img
        src="./src/assets/CarouselOverlay.png"
        alt="overlay"
        className="absolute  h-full w-32 md:w-48 lg:w-full z-10 "
      /> */}

      <Carousel>
        {CarouselData.map((bike) => (
          <div className="BikeCarousel " key={bike.id}>
            <img
              src={bike.imagePath}
              alt={bike.title}
              className="lg:h-[27rem] w-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
