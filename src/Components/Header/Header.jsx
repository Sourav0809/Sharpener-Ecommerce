/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
const Header = (props) => {
  const CartItemsLength = useContext(CartContext).cartItems.length;
  return (
    <>
      <header className=" sticky top-0 left-0 flex bg-black text-white p-4 text-lg justify-center items-center gap-20">
        <NavLink to="/">
          <h1>HOME</h1>
        </NavLink>
        <NavLink to="/store">
          <h1>STORE</h1>
        </NavLink>
        <NavLink to="/about">
          <h1>ABOUT</h1>
        </NavLink>
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
    </>
  );
};

export default Header;
