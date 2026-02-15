import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Divider from "../components/Divider";
import Button from "../components/Button";
import { NavLink } from "react-router";
import { fetchFeaturedWorks } from "../services/workService";
import SolutionCard from "../components/SolutionCard";

const worksData = [
  {
    id: 0,
    iconsURL:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/moodboard.png",
    title: "Design",
    desc: "Where creativity awakens imagination, we craft experiences that inspire, shape brands and transform visual visions.",
    navLink: "",
  },
  {
    id: 1,
    iconsURL:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/icons/layers.png",
    title: "Tech",
    desc: "Where technology awakens innovation, we build solutions that empower, scale businesses and transform digital visions.",
    navLink: "",
  },
];

const OurWork = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loadFeaturedWorks();
  // }, []);

  // const loadFeaturedWorks = async () => {
  //   try {
  //     const featuredWorks = await fetchFeaturedWorks(4);
  //     setWorks(featuredWorks);
  //   } catch (error) {
  //     console.error("Error loading featured works:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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

      <div className="w-full lg:w-5/6 flex justify-center flex-col lg:flex-row gap-8 lg:gap-14">
        {worksData.map((work) => (
          <SolutionCard
            iconsURL={work.iconsURL}
            title={work.title}
            desc={work.desc}
            navLink={work.navLink}
          />
        ))}
      </div>

      {/* <div className="w-full lg:w-5/6 flex flex-col gap-8 lg:gap-14 ">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-project-orange"></div>
          </div>
        ) : works.length > 0 ? (
          works.map((work, index) => (
            <div key={work.id}>
              <Divider />
              <NavLink to={`/work/workPage/${work.routeName}`}>
                <div className=" flex justify-start lg:px-10 hover:text-project-orange transition-colors">
                  <span className="text-lg lg:text-xl">{work.title}</span>
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-lg">No work projects available at the moment.</p>
          </div>
        )}
      </div> */}

      <NavLink to="/work">
        <Button Content={"View more"} />
      </NavLink>
    </section>
  );
};

export default OurWork;
