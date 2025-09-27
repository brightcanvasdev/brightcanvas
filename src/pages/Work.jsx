import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import TitleHead from "../components/TitleHead";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import { ScrollToTop } from "../utils/ScrollToTop";
import { fetchPublishedWorks } from "../services/workService";

const Work = () => {
  ScrollToTop();

  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkData();
  }, []);

  const loadWorkData = async () => {
    try {
      const works = await fetchPublishedWorks();
      setWorkData(works);
    } catch (err) {
      console.error("Error loading work data:", err);
      setError("Failed to load work projects");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <motion.div
        className="w-full h-full lg:min-h-screen flex flex-col justify-center items-center gap-14 lg:gap-16 pt-20 pb-10 lg:pt-36 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-project-orange"></div>
          <p className="text-white">Loading work projects...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="w-full h-full lg:min-h-screen flex flex-col justify-center items-center gap-14 lg:gap-16 pt-20 pb-10 lg:pt-36 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-400">{error}</p>
          <button
            onClick={loadWorkData}
            className="px-4 py-2 bg-project-orange text-white rounded-lg hover:bg-project-sec-orange transition-colors"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="w-full h-full lg:min-h-screen flex flex-col justify-start items-center gap-14 lg:gap-16  pt-20 pb-10 lg:pt-36  text-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-10 md:mt-0 w-full">
        <TitleHead
          Title="Our Work"
          extraClass="bg-gradient-to-r from-white  to-project-grad-yellow bg-clip-text text-transparent"
        />

        <div className="mt-8 w-full p-2 md:p-4 bg-[#212121] grid place-items-center">
          <span className="w-full  cabinetRegular  text-sm md:text-xl">
            Crafting impactful designs, engaging videos, and unique
            <br /> branding solutions that bring ideas to life.
          </span>
        </div>
      </div>

      <div className="blogsContainer lg:px-20  flex justify-center items-start gap-6 lg:gap-12 flex-col flex-wrap lg:flex-row">
        {workData.length > 0 ? (
          workData.map((work, index) => (
            <WorkCard
              key={work.id}
              imgUrl={work.imgUrl}
              title={work.title}
              desc={work.desc}
              routeName={work.routeName}
            />
          ))
        ) : (
          <div className="text-center text-white">
            <p>No work projects available at the moment.</p>
            <p className="text-sm text-gray-400 mt-2">
              Check back soon for new projects!
            </p>
          </div>
        )}
      </div>

      <Footer />
    </motion.div>
  );
};

export default Work;
