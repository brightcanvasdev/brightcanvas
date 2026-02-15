import React from "react";
import { NavLink } from "react-router";
import Divider from "./Divider";

const Footer = () => {
  return (
    <footer className="w-[90%] p-4 lg:p-8 bg-[#212121] rounded-4xl lg:rounded-4xl flex flex-col md:flex-row justify-between items-center gap-5">
      {/* Logo */}
      <div className="">
        <img
          src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/MainAssets/Bright_Canvas_logo.webp"
          alt=""
          className="h-12 lg:h-18"
        />
      </div>
      {/* Navigation */}
      <div className="w-full lg:w-[60%] flex flex-col items-center gap-5 ">
        <ul className="hidden md:flex items-center justify-center list-none gap-16 text-base">
          <li className="">
            <NavLink to="/about">About</NavLink>
          </li>

          <li className="">
            <NavLink to="/blog">Design</NavLink>
          </li>
          <li className="">
            <NavLink to="/blog">Tech</NavLink>
          </li>
          <li className="">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <Divider />
        <span className="w-full lg:w-max text-gray-300 text-sm lg:text-sm">
          © 2025 Brightcanvas.in All Rights Reserved
        </span>
      </div>
      {/* Socails */}
      <div className="">
        <ul className="flex justify-center items-center gap-4 lg:gap-4">
          <li className="flex justify-center items-center gap-4 lg:gap-4">
            <a
              href="https://www.instagram.com/birghtcanvas.in?igsh=MWk0amJ0MXlidDMyMA=="
              target="_blank"
              className="p-2 lg:p-2 border-2 border-white rounded-full hover:scale-110 transition-all ease"
            >
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/facebook-new.png"
                alt=""
                className="w-5  lg:h-6 lg:w-6"
              />
            </a>
          </li>
          <li className="flex justify-center items-center gap-4 lg:gap-4">
            <a
              href="https://www.instagram.com/birghtcanvas.in?igsh=MWk0amJ0MXlidDMyMA=="
              target="_blank"
              className="p-2 lg:p-2 border-2 border-white rounded-full hover:scale-110 transition-all ease"
            >
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/instagram-white-icon.png"
                alt=""
                className="w-5  lg:h-6 lg:w-6"
              />
            </a>
          </li>
          <li className="flex justify-center items-center gap-4 lg:gap-4">
            <a
              href="https://www.linkedin.com/company/brightcanvas-in/"
              target="_blank"
              className="p-2 lg:p-2 border-2 border-white rounded-full hover:scale-110 transition-all ease"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZy25qVnXim0IHxSZ9q0eQiW3E-NHXxDjuQ&s"
                alt=""
                className="w-5  lg:h-6 lg:w-6"
              />
            </a>
          </li>
          <li className="flex justify-center items-center gap-4 lg:gap-4">
            <a
              href="https://www.instagram.com/birghtcanvas.in?igsh=MWk0amJ0MXlidDMyMA=="
              target="_blank"
              className="p-2 lg:p-2 border-2 border-white rounded-full hover:scale-110 transition-all ease"
            >
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/envelopew.png"
                alt=""
                className="w-5  lg:h-6 lg:w-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <a
              href=""
              className="p-2 lg:p-2 border-2 border-white rounded-full"
            >
              <img
                // src="./src/assets/images/facebook-new.png"
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/facebook-new.png"
                alt=""
                className="w-5  lg:h-6 lg:w-6"
              />
            </a> */
}
