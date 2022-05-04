import React from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  console.log("at ErrorModal");

  let error = props.error;

  console.log(error);

  return (
    <Card className={classes.modal}>
      <header>
        <h2>{error.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{error.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>Acknowledge</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
