import React, { useEffect } from "react";
import { motion } from "motion/react";
import BlogCollection from "../sections/BlogCollection";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { WorkContent } from "../content/WorkContent";
import { ScrollToTop } from "../utils/ScrollToTop";

const WorkPage = () => {
  ScrollToTop();

  const workData = WorkContent;
  console.log(workData);

  const { routeName } = useParams();
  const imageLink = workData[routeName]?.imgLink;
  console.log(imageLink);

  return (
    <motion.section
      className="w-full h-full lg:min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* gap-14 lg:gap-16  */}
      <div className="flex flex-col gap-10 lg:gap-12 mt-10 md:mt-0 w-[85%] lg:w-[80%] ">
        {/* heading */}
        <div className="">
          <h1 className="cabinetBold text-xl lg:text-3xl">
            {workData[routeName]?.title}
          </h1>
        </div>

        {/* image */}
        <div className="rounded-3xl flex justify-center  overflow-hidden">
          <img
            src={workData[routeName]?.imgLink}
            alt=""
            className="w-full  h-full lg:h-max object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="services bg-[#212121] flex-1 p-6 rounded-xl">
            <h3 className="blogParaHeading cabinetBold">Services</h3>
            <div className="mt-2">
              {workData[routeName]?.services.map((service, index) => (
                <p key={index} className="mt-2 text-lg cabinetLight">
                  {service.title}
                </p>
              ))}
            </div>
          </div>
          <div className="workDesc flex-3">
            <p
              className="text-xl text-justify  lg:text-lg leading-8 cabinetLight"
              dangerouslySetInnerHTML={{
                __html: workData[routeName]?.workDesc,
              }}
            ></p>
          </div>
        </div>
        <div className="mt-12 ">
          <BlogCollection />
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default WorkPage;
