import React from "react";
import { motion } from "motion/react";
import Hero from "../sections/Hero";
import Solutions from "../sections/Solutions";
import Process from "../sections/Process";
import OurWork from "../sections/OurWork";
import BannerCarousel from "../sections/BannerCarousel";
import Contact from "../sections/Contact";
import BlogsSection from "../sections/BlogsSection";
import ImgCarousel from "../sections/ImgCarousel";
import { ScrollToTop } from "../utils/ScrollToTop";

const Home = () => {
  ScrollToTop();
  return (
    <motion.div
      className="w-full h-max "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <Solutions />
      <Process />
      {/* <ImgCarousel /> */}
      <OurWork />
      {/* <BannerCarousel /> */}
      <Contact />
      <BlogsSection />
    </motion.div>
  );
};

export default Home;
