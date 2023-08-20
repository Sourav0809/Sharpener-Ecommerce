import axios from "axios";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../Components/Store/AuthContext/AuthContext";
const AuthPage = () => {
  const [login, setLogIn] = useState(true);
  const [loader, setLoader] = useState(false);
  const emailInputRef = useRef();
  const pwdInputRef = useRef();
  const AuthCtx = useContext(AuthContext);

  // handler to handle that the user is try to login or sign up
  const setLogInHandeler = () => {
    setLogIn((prevState) => {
      return !prevState;
    });
  };

  // If the user trying to sign up

  const submitedFormHandeler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const submitedRes = {
      email: emailInputRef.current.value,
      password: pwdInputRef.current.value,
    };

    try {
      if (!login) {
        const authRes = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_YG6FKy-pwibOzDm5M28DsAg3zgwe27k",
          submitedRes
        );

        // if the request succeed
        toast.success('"Sign Up Successfully ! Now you can log in"');

        // hiding the loader
        setLoader(false);
        setLogIn(true);
        console.log(authRes);
      }
      if (login) {
        const authRes = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_YG6FKy-pwibOzDm5M28DsAg3zgwe27k",
          submitedRes
        );

        // if the request is succeed
        toast.success("User LoggedIn Succesfully ! ");

        // hiding the loader
        setLoader(false);

        //storing the token into localstorage & context
        AuthCtx.logIn(authRes.data.idToken);
      }
    } catch (error) {
      toast.error(error.response.data.error.message);
      console.log(error);
    }
    setLoader(false);
  };

  // loader element
  const loaderScreen = (
    <div className=" flex items-center justify-center">
      <img
        style={{ color: "white", width: "30px", height: "30px" }}
        src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
      />
    </div>
  );

  return (
    <>
      <div className=" mt-32  mb-48 p-10 min-[500px]:w-[50rem] min-[300px]: w-full rounded-md bg-cyan-800 m-auto  text-white">
        <h1 className=" text-center text-2xl font-sans">
          {login ? "Log In" : "Sign Up"}
        </h1>
        <form
          className=" mt-3 flex gap-1 flex-col"
          onSubmit={submitedFormHandeler}
        >
          <div className="flex  flex-col">
            <label htmlFor="email" className=" text-[1.1rem]">
              Email
            </label>
            <input
              type="email"
              className=" pl-3 p-1.5 text-black rounded-sm "
              ref={emailInputRef}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className=" text-[1.1rem]">
              Password
            </label>
            <input
              type="password"
              className=" pl-3 p-1.5 text-black rounded-sm "
              ref={pwdInputRef}
            />
          </div>

          <button className=" mt-4 p-1.5 bg-blue-600 text-white rounded-md ">
            {loader ? <>{loaderScreen}</> : login ? "Log In" : "Sign Up"}
          </button>
          <div className=" mt-3 cursor-pointer" onClick={setLogInHandeler}>
            <h2 className=" text-center">
              {login ? "New User ? Sign Up" : "Existing User ? Log In"}
            </h2>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthPage;
