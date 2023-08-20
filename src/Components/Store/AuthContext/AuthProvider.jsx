/* eslint-disable react/prop-types */
import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const LoginHandeler = (token) => {
    setIsLoggedIn(token);
    localStorage.setItem("idToken", token);
  };

  const AuthProviderValues = {
    isLoggedIn: isLoggedIn,
    logIn: LoginHandeler,
  };

  return (
    <AuthContext.Provider value={AuthProviderValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
