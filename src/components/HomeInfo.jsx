import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <div className="info-box h-[120px]">
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalize-blue py-4 px-8 text-white mx-5">
          Hi, I'm
          <span className="font-semibold mx-2 text-white">Aravindkumar</span>
          <br />A Full Stack Web Developer
        </h1>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Currently Studying <br /> and picked up many skills along the way
        </p>
        <Link to="/about" className=" neo-brutalism-white neo-btn">
          Learn More
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center p-4">
          Doing multiple projects <br /> curious about the impact?
        </p>
        <Link to="/projects" className=" neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a projects done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>
        <Link to="/contact" className=" neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
