import React from "react";
import "./Die.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Die = ({ face, rolling }) => {
  return (
    <i
      className={`bi bi-dice-${face}-fill display-1 mx-2 Die ${
        rolling ? "Die-shaking" : ""
      }`}
    ></i>
  );
};

export default Die;
