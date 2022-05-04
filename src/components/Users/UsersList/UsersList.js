import React from "react";

import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  if (!props.users) {
    let error = {
      title: "No users found",
      message: "Please add a user",
    };

    return <ErrorModal error={error} />;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.userName} ({user.userAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
