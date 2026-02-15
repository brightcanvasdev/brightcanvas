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

  const { routeName } = useParams();
  const [workData, setWorkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

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

  const toggleAccordion = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
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
      <div className="flex flex-col gap-10 lg:gap-12 mt-10 md:mt-0 w-[85%] lg:w-[75%] ">
        {/* heading */}
        <div className="">
          <h1 className="cabinetBold text-xl lg:text-3xl">{workData.title}</h1>
        </div>

        {/* image */}
        <div className="rounded-3xl flex justify-center overflow-hidden">
          <img
            src={workData.workImage}
            alt={workData.title}
            className="w-full h-full lg:h-[500px] object-cover"
          />
        </div>

        {/* Description and Accordion Section */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Description - Left Side */}
          <div className="workDesc flex-1">
            <div
              className="text-base lg:text-lg leading-6 lg:leading-8 cabinetLight"
              dangerouslySetInnerHTML={{
                __html: workData.description || "No description available",
              }}
            />
          </div>

          {/* Accordion Section - Right Side */}
          <div className="accordion-section bg-[#212121] flex-1 p-6 rounded-xl">
            {workData.accordionItems && workData.accordionItems.length > 0 ? (
              <div className="space-y-3">
                {workData.accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex justify-between items-center py-4 text-left hover:text-project-orange transition-colors"
                    >
                      <span className="text-lg cabinetBold pr-4">
                        {item.title}
                      </span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          expandedItems[item.id] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedItems[item.id]
                          ? "max-h-[1000px] opacity-100 pb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-base cabinetLight text-gray-300 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg cabinetLight text-gray-400">
                No accordion items available
              </p>
            )}
          </div>
        </div>

        <div className="mt-12">
          <BlogCollection />
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default WorkPage;

// const WorkPage = () => {
//   ScrollToTop();

//   // const workData = WorkContent;
//   // console.log(workData);

//   const { routeName } = useParams();
//   const [workData, setWorkData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     loadWorkData();
//   }, [routeName]);

//   const loadWorkData = async () => {
//     try {
//       const work = await fetchWorkByRouteName(routeName);
//       if (work) {
//         setWorkData(work);
//       } else {
//         setError("Work project not found");
//       }
//     } catch (err) {
//       console.error("Error loading work data:", err);
//       setError("Failed to load work project");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <motion.section
//         className="w-full h-full lg:min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="flex flex-col items-center gap-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-project-orange"></div>
//           <p className="text-white">Loading work project...</p>
//         </div>
//       </motion.section>
//     );
//   }

//   if (error || !workData) {
//     return (
//       <motion.section
//         className="w-full h-full lg:min-h-screen flex flex-col justify-center items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="flex flex-col items-center gap-4 text-center">
//           <p className="text-red-400 text-xl">{error}</p>
//           <p className="text-white">
//             The work project you're looking for doesn't exist or has been
//             unpublished.
//           </p>
//           <a
//             href="/work"
//             className="px-4 py-2 bg-project-orange text-white rounded-lg hover:bg-project-sec-orange transition-colors"
//           >
//             Back to Work
//           </a>
//         </div>
//       </motion.section>
//     );
//   }

//   return (
//     <motion.section
//       className="w-full h-full lg:min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left "
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col gap-10 lg:gap-12 mt-10 md:mt-0 w-[85%] lg:w-[80%] ">
//         {/* heading */}
//         <div className="">
//           <h1 className="cabinetBold text-xl lg:text-3xl">{workData.title}</h1>
//         </div>

//         {/* image */}
//         <div className="rounded-3xl flex justify-center  overflow-hidden">
//           <img
//             src={workData.workImage}
//             alt={workData.title}
//             className="w-full  h-full lg:h-max object-cover"
//           />
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 ">
//           <div className="services bg-[#212121] flex-1 p-6 rounded-xl">
//             <h3 className="blogParaHeading cabinetBold">Services</h3>
//             <div className="mt-2">
//               {workData.services && workData.services.length > 0 ? (
//                 workData.services.map((service) => (
//                   <p key={service.id} className="mt-2 text-lg cabinetLight">
//                     {service.title}
//                   </p>
//                 ))
//               ) : (
//                 <p className="mt-2 text-lg cabinetLight text-gray-400">
//                   No services listed
//                 </p>
//               )}
//             </div>
//           </div>
//           <div className="workDesc flex-3">
//             <div
//               className="text-base text-justify  lg:text-lg leading-8 cabinetLight"
//               dangerouslySetInnerHTML={{
//                 __html: workData.description || "No description available",
//               }}
//             />
//           </div>
//         </div>
//         <div className="mt-12 ">
//           <BlogCollection />
//         </div>
//       </div>
//       <Footer />
//     </motion.section>
//   );
// };

// export default WorkPage;
