import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // Using two classes at the same time
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
