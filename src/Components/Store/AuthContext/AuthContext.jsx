import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  timer: () => {},
  logIn: () => {},
  logOut: () => {},
});

export default AuthContext;
