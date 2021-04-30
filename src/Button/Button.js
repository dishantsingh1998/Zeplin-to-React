import React, { useState } from "react";
import "./Button.css";
import cx from "classnames";

const Button = ({ rounded = false }) => {
  const sliderCX = cx("slider", { rounded: rounded });

  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className={sliderCX} />
      </label>
    </div>
  );
};

export default Button;
