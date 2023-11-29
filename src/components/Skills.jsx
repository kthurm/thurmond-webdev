import React from "react";
import AdobeImg from "../assets/skills/adobeCC.png";
import Alpine from "../assets/skills/alpine.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import Github from "../assets/skills/github.png";
import Javascript from "../assets/skills/javascript.png";
import Laravel from "../assets/skills/laravel.png";
import ReactImg from "../assets/skills/react.png";
import Tailwind from "../assets/skills/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="text-light px-5 lg:px-[120px] xl:px-24">
      <h1 className="text-3xl md:text-5xl py-2">Skills</h1>
      <p className="text-xl md:text-2xl opacity-60">
        Some of the technolgies I regularly work with:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-5">
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
          <div className="text-center text-sm opacity-40">tailwindcss</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={Alpine} alt="Alpine icon" />
          <div className="text-center text-sm opacity-40">alpine.js</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={Laravel} alt="Laravel icon" />
          <div className="text-center text-sm opacity-40">laravel</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            className="h-20 mx-auto"
            src={Javascript}
            alt="Javascript icon"
          />
          <div className="text-center text-sm opacity-40">javascript</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={Bootstrap} alt="Bootstrap icon" />
          <div className="text-center text-sm opacity-40">bootstrap</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
          <div className="text-center text-sm opacity-40">react</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={Github} alt="Github" />
          <div className="text-center text-sm opacity-40">github</div>
        </div>
        <div className="flex flex-col space-y-1">
          <img className="h-20 mx-auto" src={AdobeImg} alt="Adobe" />
          <div className="text-center text-sm opacity-40">Adobe CS</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
