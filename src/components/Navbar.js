import React from "react";
import "./Navbar.css"; // Optional for styling

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
      <a id="title" href="#">Salla Paaso-Rantala</a>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
