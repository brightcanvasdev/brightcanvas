import React from "react";
import { NavLink } from "react-router";

const WorkCard = ({ imgUrl, title, desc, routeName }) => {
  return (
    <NavLink to={`/work/workPage/${routeName}`}>
      <div className=" w-85 lg:min-w-80 flex flex-col bg-[#212121] overflow-hidden rounded-2xl hover:drop-shadow-glow hover:scale-105 transition-all ease-out transition-discrete duration-500">
        <div className="flex-1">
          <img
            src={imgUrl}
            alt=""
            className="h-30 lg:h-50 w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 lg:gap-4 py-6 px-5">
          <h2 className="cabinetBold text-left text-base lg:text-lg">
            {title}
          </h2>
          <span className="cabinetRegular text-left text-project-gray text-xs lg:text-sm">
            {desc}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default WorkCard;
