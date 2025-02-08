// components/Container.js
import React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="home-container">{children}</div>
    </div>
  );
};

export default Container;
