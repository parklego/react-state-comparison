import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({
    name: "박레고",
    age: "31",
  });

  const userStateValue = {
    user,
    changeName: (name) => {
      setUser({ ...user, name });
    },
    changeAge: (age) => {
      setUser({ ...user, age });
    },
  };

  return (
    <UserContext.Provider value={userStateValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
