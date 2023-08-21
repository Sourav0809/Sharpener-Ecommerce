import React from "react";

const CartContext = React.createContext({
  addToCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  deleteCartHandeler: () => {},
});

export default CartContext;
