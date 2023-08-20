/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";
import AuthContext from "./AuthContext/AuthContext";
import formatEmail from "../../Functions/formatEmail";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (newItems, setQuantity) => {
    try {
      const { data } = await axios.patch(
        `https://sharpener-ecommerce-default-rtdb.firebaseio.com/cart/${formatEmail(
          authCtx.userEmail
        )}.json`,
        { [newItems.id]: newItems }
      );
      setQuantity((p) => p + 1);

      setCartItems((oldItems) => {
        let alreadyPresent = false;

        const newArr = oldItems.map((items) => {
          if (items.id === newItems.id) {
            alreadyPresent = true;
            return newItems;
          }
          return items;
        });

        if (alreadyPresent === true) {
          return newArr;
        } else {
          return [...newArr, newItems];
        }
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
