/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";
import AuthContext from "./AuthContext/AuthContext";
import formatEmail from "../../Functions/formatEmail";
import { toast } from "react-toastify";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  // when the user added something in the cart
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

  // when user deleted some item from the cart

  const deleteCartHandeler = async (id) => {
    // deleting from the server
    try {
      const deletedRes = await axios.delete(
        `https://sharpener-ecommerce-default-rtdb.firebaseio.com/cart/${formatEmail(
          authCtx.userEmail
        )}/${id}.json`
      );

      toast.success("Item Removed ! ");

      // deleting from the screen
      setCartItems((prevItems) => {
        const filteredItems = prevItems.filter((items) => {
          return items.id !== id;
        });

        return filteredItems;
      });

      console.log(deletedRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, setCartItems, deleteCartHandeler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
