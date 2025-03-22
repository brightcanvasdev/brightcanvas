import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router";
import { MenuRounded } from "@mui/icons-material";
import Button from "./Button";
import Divider from "./Divider";

const Mobileicon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.ul`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  list-style: none;
  width: 100%;
  padding: 12px 30px 24px 30px;
  position: absolute;
  top: 100px;
  left: 0;
  transition: all 0.4s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;

  box-shadow: rgba(255, 255, 255, 0.1) 0px 3px 10px,
    rgba(255, 255, 255, 0.2) 0px 6px 6px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-22 px-8 lg:p-0 flex items-center justify-between lg:justify-center z-40  backdrop-blur-sm bg-zinc-50/10 lg:gap-52 ">
      <div className="">
        <NavLink to="/">
          <img
            src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/MainAssets/Bright_Canvas_logo.webp"
            alt=""
            className="h-10 lg:h-14 "
          />
        </NavLink>
      </div>

      <ul className="hidden md:flex items-center justify-center list-none gap-28 text-base">
        <li className="">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="">
          <NavLink to="/work">Work</NavLink>
        </li>
        <li className="">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        {/* <li className="">
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
      </ul>

      <MobileMenu
        isOpen={isOpen}
        className="lg:hidden  backdrop-blur-xl text-white bg-black  "
      >
        <li className="">
          <NavLink
            to="/about"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            About
          </NavLink>
        </li>
        <Divider className="" />
        <li className="">
          <NavLink
            to="/work"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Work
          </NavLink>
        </li>
        <Divider className="" />
        <li className="">
          <NavLink
            to="/blog"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Blog
          </NavLink>
        </li>
        <Divider className="" />
        {/* <li className="">
          <NavLink
            to="/contact"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            Contact
          </NavLink>
        </li> */}
      </MobileMenu>

      <div className="hidden md:block">
        {/* <Button Content={"Lets Talk"} /> */}
        <NavLink to="/contact">
          <Button
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
        </NavLink>
      </div>

      <Mobileicon onClick={() => setisOpen(!isOpen)}>
        <MenuRounded sx={{ color: "inherit" }} />
      </Mobileicon>
    </header>
  );
};

export default NavBar;

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full h-24 flex items-center justify-center z-40  backdrop-blur-sm bg-zinc-50/10     gap-46 ">
//       {/* Logo */}
//       <div className="">
//         <img
//           src="./Images/Bright_Canvas_logo.webp"
//           alt=""
//           className="lg:ml-5 h-16"
//         />
//       </div>

//       {/* Nav Link */}
//       <div className="">
//         <ul className="flex gap-28 text-lg">
//           <li>About</li>
//           <li>Work</li>
//           <li>Blog</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//       {/* Contact Button */}
//       <div className="">
//         <Button Content={"Lets Talk"} />
//       </div>
//     </header>
//   );
// };
