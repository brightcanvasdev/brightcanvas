import React from "react";
import { motion } from "motion/react";
import { ScrollToTop } from "../utils/ScrollToTop";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  ScrollToTop();
  return (
    <motion.div
      className="hero w-full h-full lg:h-screen flex flex-col justify-start items-center gap-10 lg:gap-16  pt-20 pb-10 lg:pt-36  text-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <h1 className="text-4xl">Contact</h1> */}
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
