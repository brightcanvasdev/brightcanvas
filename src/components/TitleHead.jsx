import React from "react";

const TitleHead = ({ Title, extraClass }) => {
  return (
    <div
      className={`${extraClass}   flex flex-col justify-center items-center`}
    >
      <span className="text-4xl md:text-5xl cabinetMedium ">{Title}</span>
      <img src="./Images/Title Stroke.webp" alt="" className="w-28 lg:w-40" />
    </div>
  );
};

export default TitleHead;
