import React from "react";
import classNames from "classnames";

import "./image.css";

const Image = ({ src, alt, className }) => {
  const classes = classNames(className);
  return <img src={src} alt={alt} className={classes} />;
};

export default Image;
