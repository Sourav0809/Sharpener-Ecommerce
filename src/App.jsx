import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartContainer from "./Components/Cart/CartContainer";
import { useState } from "react";
import MyRoutes from "./Routes/MyRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // for cart show and hide
  const [viewCart, setViewCart] = useState(false);
  const showCartContainer = () => {
    setViewCart(true);
  };
  const hideCartContainer = () => {
    setViewCart(false);
  };

  return (
    <>
      {viewCart && <CartContainer hideCartContainer={hideCartContainer} />}
      <Header showCartContainer={showCartContainer} />
      <ToastContainer />
      <MyRoutes />
      <Footer />
    </>
  );
}

export default App;
