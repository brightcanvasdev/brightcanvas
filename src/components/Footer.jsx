import React from "react";

const Footer = () => {
  return (
    <footer className="w-[90%] p-4 lg:p-8 bg-[#212121] rounded-xl lg:rounded-4xl flex flex-col md:flex-row justify-between items-center gap-5">
      <div className="">
        <img
          src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/MainAssets/Bright_Canvas_logo.webp"
          alt=""
          className="h-16 lg:h-14 "
        />
      </div>
      <div className="">
        <span className="w-1/2 lg:w-max text-gray-300 text-base lg:text-base">
          © 2025 Brightcanvas.in All Rights Reserved
        </span>
      </div>
      <div className="">
        <ul>
          <li className="flex justify-center items-center gap-4 lg:gap-4">
            {/* <a
              href=""
              className="p-2 lg:p-2 border-2 border-white rounded-full"
            >
              <img
                // src="./src/assets/images/facebook-new.png"
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/facebook-new.png"
                alt=""
                className="w-5  lg:h-6 lg:w-6"
              />
            </a> */}
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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
