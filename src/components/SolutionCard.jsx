import React from "react";
import LearnMore from "./LearnMore";

const SolutionCard = ({ iconsURL, title, desc, navLink }) => {
  return (
    <div className="solutionCard  gap-2 lg:gap-3">
      <div className="">
        <img src={iconsURL} alt="" className="h-6 lg:h-6" />
      </div>

      <h2 className="cabinetBold text-xl">{title}</h2>

      <p className="cabinetRegular text-sm ">{desc}</p>
      {/* <LearnMore /> */}
    </div>
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
