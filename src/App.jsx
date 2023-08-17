import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CartContainer from "./Components/Cart/CartContainer";
import { useState } from "react";
import MyRoutes from "./Routes/MyRoutes";
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
      <MyRoutes />
      <Footer />
    </>
  );
}

export default App;

// hello my name is sourav
