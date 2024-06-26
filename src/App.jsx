import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Qualification from "./pages/Qualification.jsx";
import MyPDFViewer from "./components/pdf.jsx";

import resume from "./assets/Aravindkumar_Resume.pdf";

const App = () => {
  return (
    <main className=" bg-slate-200">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/qualification" element={<Qualification />} />
                  <Route
                    path="/resume"
                    element={<MyPDFViewer resume={resume} />}
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
