import React from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col justify-between items-center pt-20 pb-10 lg:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl lg:text-9xl font-bold cabinetBlack bg-gradient-to-r from-white to-project-grad-yellow bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <div className="max-w-2xl space-y-6">
          <h2 className="text-2xl lg:text-4xl cabinetBold text-white">
            Page Not Found
          </h2>

          <p className="text-base lg:text-lg cabinetRegular text-project-gray">
            Oops! The page you're looking for doesn't exist or has been moved.
            <br className="hidden lg:block" />
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <NavLink
              to="/"
              className="px-6 py-3 bg-project-orange hover:bg-project-sec-orange text-white rounded-lg transition-all duration-300 cabinetMedium"
            >
              Go to Home
            </NavLink>

            <NavLink
              to="/work"
              className="px-6 py-3 border border-project-orange text-project-orange hover:bg-project-orange hover:text-white rounded-lg transition-all duration-300 cabinetMedium"
            >
              View Our Work
            </NavLink>
          </div>

          {/* <div className="mt-12 pt-8 border-t border-[#212121]">
            <p className="text-sm cabinetRegular text-project-gray mb-4">
              Quick Links:
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <NavLink
                to="/about"
                className="text-white hover:text-project-orange transition-colors"
              >
                About Us
              </NavLink>
              <span className="text-project-gray">•</span>
              <NavLink
                to="/blog"
                className="text-white hover:text-project-orange transition-colors"
              >
                Blog
              </NavLink>
              <span className="text-project-gray">•</span>
              <NavLink
                to="/contact"
                className="text-white hover:text-project-orange transition-colors"
              >
                Contact
              </NavLink>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default NotFound;
