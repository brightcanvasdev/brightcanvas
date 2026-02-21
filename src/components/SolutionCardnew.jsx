import React from "react";
import LearnMore from "./LearnMore";
import { NavLink } from "react-router";

const SolutionCardnew = ({ iconsURL, title, desc, navLink }) => {
  return (
    <NavLink to={`/${navLink}`}>
      {/* // <NavLink to={`/${navLink}`}> */}
      <div className="solutionCardNew  gap-2 lg:gap-3">
        <div className="">
          <img src={iconsURL} alt="" className="h-5 lg:h-6" />
        </div>

        <h2 className="cabinetBold text-lg lg:text-xl">{title}</h2>

        <p className="cabinetRegular text-sm lg:text-sm ">{desc}</p>
        <LearnMore />
      </div>
    </NavLink>
  );
};

export default SolutionCardnew;
