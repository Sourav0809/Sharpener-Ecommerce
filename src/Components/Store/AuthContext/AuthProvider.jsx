/* eslint-disable react/prop-types */
import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const LoginHandeler = (token) => {
    setIsLoggedIn(token);
  };

  const logOutHandeler = () => {
    setIsLoggedIn(null);
    localStorage.removeItem("idToken");
  };

  const setUserEmailHandeler = (email) => {
    setUserEmail(email);
  };

  const AuthProviderValues = {
    isLoggedIn: isLoggedIn,
    logIn: LoginHandeler,
    logOut: logOutHandeler,
    userEmail: userEmail,
    setUserEmail: setUserEmailHandeler,
  };

  return (
    <AuthContext.Provider value={AuthProviderValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
