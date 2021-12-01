import React, { createContext, useState } from "react";
import { useMoralis } from "react-moralis";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {

    const {  isAuthenticated} = useMoralis();

  const [userAuth, setUserAuth] = useState(isAuthenticated);
  

  return (
    <UserContext.Provider
      value={{
        userAuth,
        setUserAuth
      }}
    >
      {children}
    </UserContext.Provider>
  );
};