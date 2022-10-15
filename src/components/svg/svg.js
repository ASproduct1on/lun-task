import React from "react";
import classNames from "classnames";
import "./svg.css";
import ArrowLeft from "./svg-arrow-left/svg-arrow-left";
import ArrowRight from "./svg-arrow-right/svg-arrow-right";

const Svg = ({ className, size }) => {
  const elemSize = size ? { fontSize: `${size}rem` } : null;

  const classes = classNames("svg", className);

  switch (className) {
    case "arrow-left":
      return (
        <i className={classes} style={elemSize}>
          <ArrowLeft className={className} />
        </i>
      );
    case "arrow-right":
      return (
        <i className={classes} style={elemSize}>
          <ArrowRight />
        </i>
      );
    default:
      return null;
  }
};

export default Svg;
