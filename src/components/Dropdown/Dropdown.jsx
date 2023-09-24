import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Dropdown = ({
  className,
  text = "Dopdown",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
}) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className="overlap">
        <div className="dopdown">{text}</div>
        <img
          className="img"
          alt="Line"
          src="https://cdn.animaapp.com/projects/65069ecfdaf4d0c7dc24f190/releases/65069f1f3f7e71edf983c8c2/img/line-34@2x.png"
        />
      </div>
      <div className="overlap-group">
        <div className={`text-wrapper-4 ${divClassName}`}>PRODUCT 1</div>
        <div className={`text-wrapper-5 ${divClassNameOverride}`}>PRODUCT 2</div>
        <div className={`text-wrapper-6 ${divClassName1}`}>PRODUCT 3</div>
        <div className={`text-wrapper-7 ${divClassName2}`}>PRODUCT 4</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
};
