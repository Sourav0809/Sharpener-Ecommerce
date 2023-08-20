/* eslint-disable react/prop-types */
import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [LoggedIn, setIsLoggedIn] = useState(null);

  const LoginHandeler = (token) => {
    setIsLoggedIn(token);
    localStorage.setItem(token);
  };

  const AuthProviderValues = {
    LoggedIn: LoggedIn,
    logIn: LoginHandeler,
  };

  return (
    <AuthContext.Provider value={AuthProviderValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
