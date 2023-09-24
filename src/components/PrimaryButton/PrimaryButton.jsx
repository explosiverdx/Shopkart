import React from "react";
import "./style.css";

export const PrimaryButton = ({ className }) => {
  return (
    <div className={`primary-button ${className}`}>
      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper">See more</div>
        </div>
        <img
          className="vector"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/65069ecfdaf4d0c7dc24f190/releases/65069f1f3f7e71edf983c8c2/img/vector-3@2x.png"
        />
      </div>
      <img
        className="line"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65069ecfdaf4d0c7dc24f190/releases/65069f1f3f7e71edf983c8c2/img/line-16@2x.png"
      />
    </div>
  );
};
