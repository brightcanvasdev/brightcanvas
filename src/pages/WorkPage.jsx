import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import BlogCollection from "../sections/BlogCollection";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { WorkContent } from "../content/WorkContent";
import { ScrollToTop } from "../utils/ScrollToTop";
import { fetchWorkByRouteName } from "../services/workService";

const WorkPage = () => {
  ScrollToTop();

  // const workData = WorkContent;
  // console.log(workData);

  const { routeName } = useParams();
  const [workData, setWorkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkData();
  }, [routeName]);

  const loadWorkData = async () => {
    try {
      const work = await fetchWorkByRouteName(routeName);
      if (work) {
        setWorkData(work);
      } else {
        setError("Work project not found");
      }
    } catch (err) {
      console.error("Error loading work data:", err);
      setError("Failed to load work project");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <motion.section
        className="w-full h-full lg:min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-project-orange"></div>
          <p className="text-white">Loading work project...</p>
        </div>
      </motion.section>
    );
  }

  if (error || !workData) {
    return (
      <motion.section
        className="w-full h-full lg:min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-red-400 text-xl">{error}</p>
          <p className="text-white">
            The work project you're looking for doesn't exist or has been
            unpublished.
          </p>
          <a
            href="/work"
            className="px-4 py-2 bg-project-orange text-white rounded-lg hover:bg-project-sec-orange transition-colors"
          >
            Back to Work
          </a>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="w-full h-full lg:min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-10 lg:gap-12 mt-10 md:mt-0 w-[85%] lg:w-[80%] ">
        {/* heading */}
        <div className="">
          <h1 className="cabinetBold text-xl lg:text-3xl">{workData.title}</h1>
        </div>

        {/* image */}
        <div className="rounded-3xl flex justify-center  overflow-hidden">
          <img
            src={workData.workImage}
            alt={workData.title}
            className="w-full  h-full lg:h-max object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="services bg-[#212121] flex-1 p-6 rounded-xl">
            <h3 className="blogParaHeading cabinetBold">Services</h3>
            <div className="mt-2">
              {workData.services && workData.services.length > 0 ? (
                workData.services.map((service) => (
                  <p key={service.id} className="mt-2 text-lg cabinetLight">
                    {service.title}
                  </p>
                ))
              ) : (
                <p className="mt-2 text-lg cabinetLight text-gray-400">
                  No services listed
                </p>
              )}
            </div>
          </div>
          <div className="workDesc flex-3">
            <div
              className="text-base text-justify  lg:text-lg leading-8 cabinetLight"
              dangerouslySetInnerHTML={{
                __html: workData.description || "No description available",
              }}
            />
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
