import React from "react";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          &copy; 2024 <strong>Aravindkumar</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link, index) => {
            return (
              <Link key={index} to={link.link} target="_blank">
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
