import React from "react";
import "./experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <h2>Skills</h2>
      <div className="main">
      <div className="experience__frontend">
        <h3>Frontened</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Reactjs</li>
          <li>Wordpress</li>
        </ul>
      </div>
      <div className="experience__programming">
       <h3>Programming</h3>
       <ul>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>DSA</li>
          <li>Competitve Programming</li>
        </ul>

      </div>
      </div>
    </div>
  );
};

export default Experience;
