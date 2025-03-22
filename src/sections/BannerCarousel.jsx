import React from "react";
import Banner from "../components/Banner";

const BannerCarousel = () => {
  return (
    <section className="  w-full h-full flex flex-col justify-center lg:gap-16  text-center mb-20 overflow-hidden ">
      <Banner />
    </section>
  );
};

export default BannerCarousel;
