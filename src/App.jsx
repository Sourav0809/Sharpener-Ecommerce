import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartContainer from "./Components/Cart/CartContainer";
import { useContext, useEffect, useState } from "react";
import MyRoutes from "./Routes/MyRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./Components/Store/AuthContext/AuthContext";
import axios from "axios";
import formatEmail from "./Functions/formatEmail";
import { useNavigate } from "react-router-dom";
import CartContext from "./Components/Store/CartContext";

function App() {
  const [loader, setLoader] = useState(false);
  const { logIn, setUserEmail, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  // if the user refresh the page we need to authenticate again

  useEffect(() => {
    setLoader(true);
    let idToken = localStorage.getItem("idToken");
    const authUser = async () => {
      try {
        const authRes = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD_YG6FKy-pwibOzDm5M28DsAg3zgwe27k`,
          { idToken: idToken }
        );
        const { data } = await axios.get(
          `https://sharpener-ecommerce-default-rtdb.firebaseio.com/cart/${formatEmail(
            authRes.data.users[0].email
          )}.json`
        );

        setUserEmail(authRes.data.users[0].email);
        const arr = [];
        for (let i in data) {
          arr.push(data[i]);
        }
        // console.log(arr);
        cartCtx.setCartItems(arr);

        logIn(idToken);
        setLoader(false);
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };
    // set token
    if (idToken) {
      // calling the function to store the token and user email
      authUser();
    }
  }, []);

  // for cart show and hide
  const [viewCart, setViewCart] = useState(false);
  const showCartContainer = () => {
    if (isLoggedIn) {
      setViewCart(true);
    } else {
      navigate("/login");
    }
  };
  const hideCartContainer = () => {
    setViewCart(false);
  };

  // loader element
  const loaderScreen = (
    <div className=" flex items-center justify-center mt-40 mb-80">
      <img
        className=" w-32 h-32"
        src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
      />
    </div>
  );

  return (
    <>
      {viewCart && <CartContainer hideCartContainer={hideCartContainer} />}
      <Header showCartContainer={showCartContainer} />
      <ToastContainer />
      {loader ? (
        <>{loaderScreen}</>
      ) : (
        <>
          <MyRoutes />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
