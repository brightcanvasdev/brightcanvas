import React from "react";
import { motion } from "motion/react";
import { ScrollToTop } from "../utils/ScrollToTop";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Form from "../components/Form";

const ContactPage = () => {
  ScrollToTop();
  return (
    <motion.div
      className="hero h-full lg:h-screen flex flex-col justify-start items-center gap-10 lg:gap-0 pt-24 pb-10 lg:pt-36  text-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <h1 className="text-4xl">Contact</h1> */}
      {/* <Contact />
      <Footer /> */}
      <section
        // className="  w-full h-full flex flex-col justify-center items-center  gap-8 lg:gap-16 px-8 lg:py-10 text-center mb-20 "
        className=" flex flex-col justify-center items-center  gap-8 lg:gap-8 px-8 lg:py-5 lg:text-justify mb-20 "
        id="ContactForm"
      >
        <div className="flex flex-col	items-start  w-full lg:w-4/6 ">
          <h2 className="text-xl lg:text-3xl cabinetMedium mb-5">
            Let’s Start Something Meaningful
          </h2>

          <p className="cabinetLight text-sm lg:text-base lg:w-3/4 text-left lg:text-justify ">
            Sometimes it begins quietly with an idea you can’t stop thinking
            about, a problem you know can be solved better, or a vision waiting
            for the right partner. If that sounds like you, let’s talk. Tell us
            where you are and where you want to go, and we’ll listen carefully,
            ask the right questions, and help you shape what comes next with
            clarity, creativity, and intent. Reach out when you’re ready this
            could be the start of something worth building.
          </p>
        </div>

        <Form />
      </section>
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
