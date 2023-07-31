/* eslint-disable react/prop-types */
import Cart from "./Cart";
import Modal from "../Modal/Modal";
import CartContext from "../Store/CartContext";
import { useContext } from "react";

const CartContainer = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal>
      {cartCtx.cartItems.map((items) => {
        return (
          <Cart
            key={items.title}
            title={items.title}
            price={items.price}
            quantity={items.quantity}
            img={items.img}
          />
        );
      })}
      <button
        className=" absolute top-3 right-6 border-2 border-black p-1 rounded-lg"
        onClick={props.hideCartContainer}
      >
        X
      </button>
      <div className=" flex justify-center items-center mt-6 ">
        <button className="border-2 border-black bg-indigo-600 text-white pt-1 pb-1 pl-2 pr-2 rounded-md text-lg">
          Order Now
        </button>
      </div>
    </Modal>
  );
};

export default CartContainer;
