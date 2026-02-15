import React from "react";
import LearnMore from "./LearnMore";
import { NavLink } from "react-router";

const SolutionCard = ({ iconsURL, title, desc, navLink }) => {
  return (
    <NavLink to={`/work/workPage/${navLink}`}>
      <div className="solutionCard  gap-2 lg:gap-3">
        <div className="">
          <img src={iconsURL} alt="" className="h-5 lg:h-6" />
        </div>

        <h2 className="cabinetBold text-lg lg:text-xl">{title}</h2>

        <p className="cabinetRegular text-sm lg:text-sm ">{desc}</p>
        <LearnMore />
      </div>
    </NavLink>
  );

  // return (
  //   <div className="solutionCard inline-block">
  //     <div className="">
  //       <img src={iconsURL} alt="" className="h-6 lg:h-6" />
  //     </div>
  //     <h2 className="cabinetBold text-xl">{title}</h2>
  //     <p className="cabinetRegular text-sm">{desc}</p>
  //     <LearnMore />
  //   </div>
  // );
};

export default SolutionCard;
