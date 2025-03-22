import React from "react";
import Title from "../components/Title";
import Divider from "../components/Divider";
import Button from "../components/Button";
import { NavLink } from "react-router";

const Works = [
  {
    id: 0,
    title: "BivocalBirds",
    navLink: "bivocalBirdsWebDesign",
  },
  {
    id: 1,
    title: "Storyvord",
    navLink: "storyvordProductDesign",
  },
  {
    id: 2,
    title: "Alpha Money",
    navLink: "alphamoneyWebDesign",
  },
  {
    id: 3,
    title: "JungleAvengers",
    navLink: "jungleAvengersWebDesign",
  },
  // {
  //   id: 4,
  //   title: "Alpha Corp",
  //   navLink: "",
  // },
];

const OurWork = () => {
  return (
    <section className="ourWork   w-full h-full flex flex-col justify-center items-center  gap-16 lg:gap-24 px-10 lg:py-5 lg:px-18 text-center mb-20 ">
      <div className="">
        <Title Title={"Our Work"} />
        <br />
        <span className=".cabinetMedium text-base lg:text-lg">
          Crafting impactful designs, engaging videos, and unique branding
          solutions that bring
          <span className="lg:block">ideas to life.</span>
        </span>
      </div>

      <div className="w-full lg:w-5/6 flex flex-col gap-8 lg:gap-14 ">
        {Works.map((Work, key) => (
          <>
            <Divider />
            <NavLink to={`/work/workPage/${Work.navLink}`}>
              <div className=" flex justify-start lg:px-10">
                <span className="text-lg lg:text-xl">{Work.title}</span>
              </div>
            </NavLink>
          </>
        ))}
      </div>

      <Button Content={"View more"} />
    </section>
  );
};

export default OurWork;
