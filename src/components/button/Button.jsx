import React from "react";
import "./button.css";

import classNames from "classnames";

const Button = ({ children, primary, disabled, onClick }) => {
  const classes = classNames("Button", {
    "Button--primary": primary,
  });

  return (
    <div>
      <button className={classes} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
