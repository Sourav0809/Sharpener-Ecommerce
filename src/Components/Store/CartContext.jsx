import React from "react";

const CartContext = React.createContext({
  addToCart: () => {},
  cartItems: [],
  setCartItems: () => {},
});

export default CartContext;
