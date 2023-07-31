/* eslint-disable react/prop-types */
import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItems) => {
    setCartItems((oldItems) => {
      let alreadyPresent = false;

      const newArr = oldItems.map((items) => {
        if (items.id === newItems.id) {
          alreadyPresent = true;
          items.quantity += newItems.quantity;
        }
        return items;
      });
      if (alreadyPresent === true) {
        return newArr;
      } else {
        return [...newArr, newItems];
      }
    });
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
