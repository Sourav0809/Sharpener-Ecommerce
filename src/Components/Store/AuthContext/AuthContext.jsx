import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  timer: () => {},
  logIn: () => {},
  logOut: () => {},
  userEmail: null,
  setUserEmail: () => {},
});

export default AuthContext;
