import React from "react";
import { motion } from "motion/react";
import TitleHead from "../components/TitleHead";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import { ScrollToTop } from "../utils/ScrollToTop";

const WorkData = [
  {
    id: 1,
    imgUrl: "./src/assets/WorkImages/9.webp",
    title: "BivocalBirds Web Design",
    desc: "Designed a user-centric real estate property listing website aimed at providing seamless property search experiences.",
    routeName: "bivocalBirdsWebDesign",
  },
  {
    id: 2,
    imgUrl: "./src/assets/WorkImages/8.webp",
    title: "Storyvord Product Design",
    desc: "Storyvord is a production management platform designed to streamline the filmmaking process by providing tools for planning, organising, and managing projects effectively.",
    routeName: "storyvordProductDesign",
  },
  {
    id: 3,
    imgUrl: "./src/assets/WorkImages/7.webp",
    title: "Storyvord Website Design",
    desc: "Designed a user-centric landing page for Storyvord, a production management platform, focused on delivering a seamless and intuitive experience for filmmakers to plan, organize, and collaborate on projects effectively.",
    routeName: "storyvordWebDesign",
  },
  {
    id: 4,
    imgUrl: "./src/assets/WorkImages/10.png",
    title: "ALPHAMONEY Website Design",
    desc: "AlphaMoney is a P2P lending platform connecting borrowers and investors in a secure and efficient environment. ",
    routeName: "alphamoneyWebDesign",
  },
  {
    id: 5,
    imgUrl: "./src/assets/WorkImages/6.webp",
    title: "ALPHAMONEY Web-Product Design",
    desc: "AlphaMoney is a P2P lending platform crafted to streamline financial interactions between borrowers and investors. I designed the product's end-to-end user experience, including intuitive dashboards for monitoring active investments, repayment schedules, and default penalties.",
    routeName: "alphamoneyWebProdDesign",
  },
  {
    id: 6,
    imgUrl: "./src/assets/WorkImages/4.webp",
    title: "ALPHAMONEY Mobile App Design",
    desc: "AlphaMoney's mobile app brings the convenience of peer-to-peer lending to users' fingertips. I designed the app with a user-first approach, focusing on intuitive navigation and streamlined workflows for both borrowers and investors.",
    routeName: "alphamoneyMobileAppDesign",
  },
  {
    id: 7,
    imgUrl: "./src/assets/WorkImages/3.webp",
    title: "JungleAvengers Website Design",
    desc: "JungleAvengers is a resort website designed to provide potential visitors with a seamless experience in exploring, booking, and learning about the resort's offerings.",
    routeName: "jungleAvengersWebDesign",
  },
  // {
  //   id: 8,
  //   imgUrl: "./src/assets/WorkImages/2.webp",
  //   title: "Intranet Product Design",
  //   desc: "The Visitor Management System is designed to streamline and enhance the process of managing visitors in corporate environments.",
  //   routeName: "intranetProdDesign",
  // },
  // {
  //   id: 9,
  //   imgUrl: "./src/assets/WorkImages/1.webp",
  //   title: "Visitor Management System",
  //   desc: "The Visitor Management System is designed to streamline and enhance the process of managing visitors in corporate environments.",
  //   routeName: "visitorMgmtSystem",
  // },
];

const Work = () => {
  ScrollToTop();
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
        {WorkData.map((work, index) => (
          <WorkCard
            key={index}
            imgUrl={work.imgUrl}
            title={work.title}
            desc={work.desc}
            routeName={work.routeName}
          />
        ))}
      </div>

      <Footer />
    </motion.div>
  );
};

export default Work;
