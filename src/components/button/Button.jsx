import React from "react";
import "./button.css";

const Button = ({ children, className, disabled, onClick }) => {
  const classNames = `Button ${className} ${
    disabled ? "Button--disabled" : "Button--active"
  }`;

  return (
    <div>
      <button className={classNames} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
