import React from "react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { ScrollToTop } from "../utils/ScrollToTop";

const About = () => {
  ScrollToTop();
  return (
    <motion.div
      className="w-full min-h-max flex flex-col items-center gap-10 md:gap-20 mb-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section
        id="home"
        className="hero section w-full min-h-screen lg:h-screen flex flex-col justify-center items-center gap-10 lg:gap-4 px-8  lg:py-0 lg:pt-36 text-center "
      >
        <div className="container relative tracking-wider ">
          <h1 className="Hero-Heading text-4xl lg:text-8xl lg:leading-30">
            About
          </h1>
        </div>

        <div className="text-justify md:text-left md:text-lg">
          <p className="">
            At <span className="cabinetBold text-2xl">Bright Canvas</span>, we
            don’t just build brands—we paint them into existence. Every company
            has a story, a vision, and a spark waiting to ignite. We take that
            spark and turn it into a masterpiece, blending strategy with
            creativity, design with purpose, and{" "}
            <span className="cabinetBold text-lg">
              innovation with emotion. 
            </span>
          </p>
          <br />
          <p className="">
            Like an artist approaching a blank canvas, we see endless
            possibilities. Colors aren’t just hues; they’re emotions. Typography
            isn’t just text; it’s expression. And branding isn’t just a logo;
            it’s a living, breathing identity. Whether you’re a startup
            sketching out your first strokes or a tech company ready to refine
            your masterpiece, we craft bold, unforgettable brands that leave an
            impression.  
          </p>
          <br />
          <p>
            Our palette? Strategy, design, digital storytelling, and technology.
            Our brushstrokes? A mix of creativity, passion, and data-driven
            precision. With each project, we layer vision upon vision, refining
            every shade and stroke until your brand stands out with
            brilliance.  
          </p>
          <br />
          At Bright Canvas, we don’t just create brands.{" "}
          <span className="cabinetBold text-lg">We paint legacies.</span> 
        </div>
      </section>

      <div
        className=" px-10 lg:py-0  lg:px-32 flex flex-col gap-16 
      "
      >
        <div className="flex flex-col gap-4">
          <img
            src="./src/assets/About/Vision.png"
            alt=""
            className="w-20 lg:w-32 "
          />
          <h2 className="cabinetBold text-2xl">Our Vision</h2>

          <p className="text-lg">
            To be the world’s most vibrant digital branding agency—where
            creativity knows no boundaries, innovation shapes every brushstroke,
            and brands transform into unforgettable masterpieces. 
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <img
            src="./src/assets/About/Mission.png"
            alt=""
            className="w-20 lg:w-32"
          />
          <h2 className="cabinetBold text-2xl">Our Mission</h2>

          <p className="text-lg">
            To empower startups and tech companies with bold, visionary branding
            that tells their story, sparks connections, and leaves a lasting
            imprint. Through strategy, design, and digital artistry, we craft
            brands that don’t just exist—they inspire. 
          </p>
        </div>

        <h2 className="cabinetBold text-2xl text-center md:text-left">
          Let’s start your masterpiece.
        </h2>
      </div>

      <div className="w-[90%] lg:w-full flex justify-center ">
        <Form />
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
