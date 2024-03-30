import React from "react";
import {
  databaseskills,
  frameandlibSkills,
  programmingSkills,
  softwareskills,
} from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Aravindkumar
        </span>
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am an Information Technology student at Anna University, Chennai,
          with a strong foundation in problem-solving and a knack for creative
          development. I have worked on diverse projects across the spectrum of
          web development.
        </p>
        <p>
          {" "}
          I am actively seeking internship opportunities in web development to
          gain valuable industrial experience. 🌐✨
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="head-text flex  justify-center items-center">
          My Skills
        </h3>
        <h3 className="subhead-text py-5">PROGRAMMING LANGUAGES</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {programmingSkills.map((skill, index) => {
            return (
              <div className="block-container w-20 h-20" key={index}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="subhead-text py-5">FRAMEWORKS & LIBRARIES</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {frameandlibSkills.map((skill, index) => {
            return (
              <div className="block-container w-20 h-20" key={index}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="subhead-text py-5">DATABASES & SERVER</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {databaseskills.map((skill, index) => {
            return (
              <div className="block-container w-20 h-20" key={index}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="subhead-text py-5"> SOFTWARE & TOOLS</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {softwareskills.map((skill, index) => {
            return (
              <div className="block-container w-20 h-20" key={index}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
