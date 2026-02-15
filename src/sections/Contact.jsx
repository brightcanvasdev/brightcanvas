import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <section
      className="  w-full h-full flex flex-col justify-center items-center  gap-8 lg:gap-16 px-8 lg:py-5 text-center mb-20 "
      id="ContactForm"
    >
      <div className="flex flex-col	items-center ">
        <h2 className="text-3xl cabinetMedium mb-5">Have a great idea?</h2>

        <p className="cabinetMedium text-base lg:text-lg lg:w-3/4 text-center ">
          Got a great idea you’d like to bring to life? Share your details
          below, and let’s create something amazing together! Or you can drop an
          email at <span className="font-bold">info@brightcanvas.in</span>
        </p>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
