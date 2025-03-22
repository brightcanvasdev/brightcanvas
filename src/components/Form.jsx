import React from "react";

const Form = () => {
  return (
    <div
      id="form"
      className="bg-[#212121] h-full w-full lg:w-4/6 px-10 py-10 lg:py-12 lg:px-20 rounded-4xl "
    >
      <form
        action="https://getform.io/f/aroyywob"
        method="post"
        className="cabinetMedium contact-form flex flex-col justify-center items-center gap-8 lg:gap-16 "
      >
        <div className="w-full md:w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10 ">
          <div className="form-field   lg:flex-1">
            <label htmlFor="name" className="label  ">
              Name & Company
            </label>

            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              className="text-field mt-2"
              placeholder="Enter Name & Company"
            />
          </div>

          <div className="form-field   lg:flex-1">
            <label htmlFor="email" className="label">
              E-Mail
            </label>

            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              required
              placeholder="Enter Mail"
              className="text-field mt-2"
            />
          </div>
        </div>

        <div className="w-full form-field ">
          <label htmlFor="message" className="label">
            Tell us
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="Go On Tell Us All About Your Idea"
            required
            className="text-field resize-y border-white border-b"
          ></textarea>
        </div>

        <div className="grid place-items-center">
          <button
            type="submit"
            className="max-w-max h-10 flex items-center gap-2 px-12 rounded-4xl font-medium text-base lg:text-xl bg-white hover:bg-project-orange hover:text-white transition-all transition-discrete ease-out hover:scale-110 text-black cabinetMedium"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
