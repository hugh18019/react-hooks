import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UsersList/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { userName: userName, userAge: userAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
