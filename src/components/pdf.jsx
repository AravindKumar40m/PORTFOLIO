import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./pdf.css";

const Pdf = ({ resume }) => {
  return (
    <section className="max-container">
      <div
        id="default-modal"
        className="relative top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center glassmorphismpdf rounded-2xl"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-2xl h-[100%] max-h-[90%] rounded-xl">
          <div className="p-4 md:p-5 space-y-4 object-cover rounded-xl">
            <Document
              file={resume}
              className="w-full h-full"
              options={{ workerSrc: "./../public/pdf.worker.js" }}
            >
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      </div>
      {/* )} */}
    </section>
  );
};

export default Pdf;
