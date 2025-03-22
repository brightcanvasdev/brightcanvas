import React from "react";
import Title from "../components/Title";
import SolutionCard from "../components/SolutionCard";
import LearnMore from "../components/LearnMore";

const SolutionsData = [
  {
    id: 0,
    iconsURL: "./src/assets/icons/edit.png",
    title: "Brand Research",
    desc: "Where ideas awaken with creativity, we craft design that inspire, tell stories and bring visions",
    navLink: "",
  },
  {
    id: 1,
    iconsURL: "./src/assets/icons/moodboard.png",
    title: "Mood Boarding",
    desc: "Where ideas awaken with creativity, we craft design that inspire, tell stories and bring visions",
    navLink: "",
  },
  {
    id: 2,
    iconsURL: "./src/assets/icons/ux.png",
    title: "UI/UX",
    desc: "Where ideas awaken with creativity, we craft design that inspire, tell stories and bring visions",
    navLink: "",
  },
  {
    id: 3,
    iconsURL: "./src/assets/icons/geometric-shape.png",
    title: "Graphic Design Assets",
    desc: "Where ideas awaken with creativity, we craft design that inspire, tell stories and bring visions",
    navLink: "",
  },
  {
    id: 4,
    iconsURL: "./src/assets/icons/layers.png",
    title: "Graphic Design Prints",
    desc: "Where ideas awaken with creativity, we craft design that inspire, tell stories and bring visions",
    navLink: "",
  },
];

const Solutions = () => {
  return (
    <section className="  w-full h-full flex flex-col justify-center items-center gap-10 lg:gap-16 lg:py-5 text-center  mb-20 ">
      <Title Title={"Solutions"} />

      <div className="solutCont flex flex-col justify-center items-center md:flex-row w-max  md:grid md:grid-cols-3 gap-7 ">
        <div className="p-4 lg:p-6 rounded-xl w-[350px] lg:flex flex-col flex-3  lg:min-w-[270px] lg:max-w-[370px]  text-left block   gap-2">
          <span className="cabinetBold text-project-grad-yellow text-lg ">
            Services
          </span>
          <h2 className="cabinetBold text-4xl leading-8">
            We offer creative Solutions
          </h2>
          <p className="cabinetRegular text-sm ">
            Where ideas awaken with creativity.
          </p>
        </div>

        {SolutionsData.map((Solution) => (
          <SolutionCard
            iconsURL={Solution.iconsURL}
            title={Solution.title}
            desc={Solution.desc}
            navLink={Solution.navLink}
          />
        ))}
      </div>
    </section>

    // <section className="w-full flex flex-col justify-center items-center gap-10 lg:gap-16 lg:py-5 text-center mb-20">
    //   <Title Title={"Solutions"} />

    //   {/* Scrollable container with full width but allows horizontal scrolling */}
    //   <div className="solutCont w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center gap-7 px-4">
    //     {/* Services Semi Heading - Always Visible on Larger Screens */}
    //     <div className="p-4 lg:p-6 rounded-xl w-[350px] lg:flex flex-col lg:min-w-[270px] lg:max-w-[370px] text-left hidden lg:block gap-2">
    //       <span className="cabinetBold text-project-grad-yellow text-lg">
    //         Services
    //       </span>
    //       <h2 className="cabinetBold text-4xl leading-8">
    //         We offer creative Solutions
    //       </h2>
    //       <p className="cabinetRegular text-sm">
    //         Where ideas awaken with creativity.
    //       </p>
    //     </div>

    //     {/* Scrollable Cards */}
    //     {SolutionsData.map((Solution) => (
    //       <SolutionCard
    //         key={Solution.id}
    //         iconsURL={Solution.iconsURL}
    //         title={Solution.title}
    //         desc={Solution.desc}
    //         navLink={Solution.navLink}
    //       />
    //     ))}
    //   </div>
    // </section>
  );
};

export default Solutions;
{
  /* <div className="w-full flex flex-col items-center overflow-hidden">
  
  <div className="cards-container p-4 lg:p-6 rounded-xl w-[350px] text-left  flex-col lg:min-w-[270px] lg:max-w-[370px] hidden lg:block gap-2">
    <span className="cabinetBold text-project-grad-yellow text-lg">
      Services
    </span>
    <h2 className="cabinetBold text-4xl leading-8">
      We offer creative Solutions
    </h2>
    <p className="cabinetRegular text-sm">
      Where ideas awaken with creativity.
    </p>
  </div>


  <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide md:grid md:grid-cols-3 gap-7 flex">
    {SolutionsData.map((Solution) => (
      <SolutionCard
        key={Solution.id}
        iconsURL={Solution.iconsURL}
        title={Solution.title}
        desc={Solution.desc}
        navLink={Solution.navLink}
        className="inline-block w-[80%] sm:w-[60%] md:w-auto"
      />
    ))}
  </div>
</div> */
}

// <section className="  w-full h-full flex flex-col justify-center items-center gap-10 lg:gap-16 lg:py-5 text-center  mb-20 ">
//       <Title Title={"Solutions"} />

//       <div className="flex flex-row overflow-x-scroll md:grid md:grid-cols-3 gap-7 ">

//         <div className="p-4 lg:p-6 rounded-xl w-[350px] lg:flex flex-col flex-3  lg:min-w-[270px] lg:max-w-[370px]  text-left hidden   gap-2">
//           <span className="cabinetBold text-project-grad-yellow text-lg ">
//             Services
//           </span>
//           <h2 className="cabinetBold text-4xl leading-8">
//             We offer creative Solutions
//           </h2>
//           <p className="cabinetRegular text-sm ">
//             Where ideas awaken with creativity.
//           </p>

//         </div>

//         {SolutionsData.map((Solution) => (
//           <SolutionCard
//             iconsURL={Solution.iconsURL}
//             title={Solution.title}
//             desc={Solution.desc}
//             navLink={Solution.navLink}
//           />
//         ))}
//       </div>
//     </section>
