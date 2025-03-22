import React from "react";

const ProcessCard = ({ imageUrl, desc }) => {
  return (
    <div className="w-[300px] lg:min-w-[250px] lg:max-w-[300px] flex flex-col justify-start items-center gap-1 lg:gap-3 ">
      <img src={imageUrl} alt="" className="w-[200px] lg:w-[250px] " />
      <span className="cabinetMedium text-lg leading-5 ">{desc}</span>
    </div>
  );
};

export default ProcessCard;
