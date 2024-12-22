import React from "react";
import logo from "../assets/wmremove-transformed__1_-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center py-6 justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/saivarunpuri"
          target="_blank"
          className="cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sai-varun-09833323b/"
          className="cursor-pointer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
