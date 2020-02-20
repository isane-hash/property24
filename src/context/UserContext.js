import React, { createContext, useState, Children } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, _setUser] = useState({
    id: null,
    fullname: null,
    username: null,
    email: null
  });

  const setUser = user => {
    _setUser({ ...user, user });
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
