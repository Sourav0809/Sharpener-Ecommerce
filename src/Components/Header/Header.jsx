/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../Store/CartContext";
const Header = (props) => {
  const CartItemsLength = useContext(CartContext).cartItems.length;
  return (
    <>
      <header className=" sticky top-0 left-0 flex bg-black text-white p-4 text-lg justify-center items-center gap-20">
        <h1>HOME</h1>
        <h1>STORE</h1>
        <h1>ABOUT</h1>
        <button
          onClick={props.showCartContainer}
          className="absolute right-24 top-2 border p-1 rounded-md"
        >
          CART
        </button>
        <h1 className=" absolute right-20 text-2xl top-0 bg-teal-500 p-1 rounded-md">
          {CartItemsLength}
        </h1>
      </header>

      <section className="flex justify-center items-center bg-gray-600 text-white mt-1 p-20 text-8xl">
        <h1>The Generics</h1>
      </section>
    </>
  );
};

export default Header;
