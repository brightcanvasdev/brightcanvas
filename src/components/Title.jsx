import React from "react";

const Title = ({ Title }) => {
  return (
    <div className="bg-gradient-to-r from-white  to-project-grad-yellow bg-clip-text text-transparent flex flex-col justify-center items-center">
      <span className="text-3xl cabinetMedium ">{Title}</span>
      <img src="./Images/Title Stroke.webp" alt="" className="w-28" />
    </div>
  );
};

export default Title;
