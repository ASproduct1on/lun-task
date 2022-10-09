import React from "react";
import classNames from "classnames";

import './image.css';


const Img = ({ src, alt, className}) => {
    const classes = classNames(
        className,
    )
    return (
        <img src={src} alt={alt} className={classes} />
    )    

}

export default Img