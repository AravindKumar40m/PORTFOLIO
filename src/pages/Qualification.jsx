import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education, experiance } from "../constants";

const Qualification = () => {
  return (
    <section className="max-container">
      <div className="py-16">
        <h3 className="subhead-text flex justify-center items-center">
          Work Experiance
        </h3>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiance.map((exp, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  date={exp.date}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: exp.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {exp.title}
                    </h3>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {exp.points}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text  flex justify-center items-center">
          Education
        </h3>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {education.map((exp, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  date={exp.date}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: exp.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {exp.name}
                    </h3>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {exp.points}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
