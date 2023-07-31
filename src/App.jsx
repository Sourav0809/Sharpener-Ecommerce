import "./App.css";
import Header from "./Components/Header/Header";
import ProductsContainer from "./Components/ProductsContainer/ProductsContainer";
import Footer from "./Components/Footer/Footer";
import CartContainer from "./Components/Cart/CartContainer";
import { useState } from "react";

function App() {
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
      <ProductsContainer />
      <Footer />
    </>
  );
}

export default App;
