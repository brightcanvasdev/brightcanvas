import React from "react";
import Title from "../components/Title";
import ProcessCard from "../components/ProcessCard";

const Processes = [
  {
    id: 0,
    imageUrl: "./src/assets/images/Triangle.webp",
    desc: "Triangulating your sides of the problems",
  },
  {
    id: 1,
    imageUrl: "./src/assets/images/Cube.webp",
    desc: "Make a cube taking an idea or problem and describe, compare, analyze (break down), associate and apply.",
  },
  {
    id: 2,
    imageUrl: "./src/assets/images/Palette.webp",
    desc: "Coming up with best colors and painting your brand like an empty canvas. ",
  },
];

const Process = () => {
  return (
    <section className="  w-full h-full flex flex-col justify-center items-center gap-10 lg:gap-16 lg:py-5 text-center mb-20 ">
      <Title Title={"How we do it"} />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {Processes.map((p, key) => (
          <ProcessCard key={key} imageUrl={p.imageUrl} desc={p.desc} />
        ))}
      </div>
    </section>
  );
};

export default Process;
