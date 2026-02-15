import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero section w-full h-[80vh] lg:h-screen flex flex-col justify-center items-center gap-14 lg:gap-6  lg:pt-36 text-center"
    >
      <div className="container relative tracking-wider">
        <h1 className="Hero-Heading text-4xl lg:text-8xl lg:leading-30">
          Unleash Your Brand’s
          <span className="text-6xl lg:text-8xl block p-0 bg-gradient-to-b from-project-grad-orange via-70% to-project-grad-yellow bg-clip-text text-transparent">
            True Colors.
          </span>
        </h1>
        <img
          src="./Images/Stroke.webp"
          alt=""
          className=" w-3/5 lg:w-2/5 absolute left-1/2 -translate-x-1/2 -bottom-6 lg:-bottom-2"
        />
      </div>
      <div className="mt-2 w-4/5 lg:w-2/3">
        <span className="cabinetMedium  text-base lg:text-lg text-project-gray">
          Where ideas awaken with creativity, we craft designs that inspire,
          tell stories, and bring visions to life.{" "}
          <span className="lg:block">
            Let’s create something extraordinary together.
          </span>
        </span>
      </div>
      <div className="flex justify-center ">
        <Button Content={"LET'S TALK"} />
      </div>
    </section>
  );
};

export default Hero;
