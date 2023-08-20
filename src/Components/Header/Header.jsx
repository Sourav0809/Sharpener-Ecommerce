/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AuthContext from "../Store/AuthContext/AuthContext";
import { toast } from "react-toastify";
const Header = (props) => {
  const CartItemsLength = useContext(CartContext).cartItems.length;
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <header className=" sticky top-0 left-0 flex bg-black text-white p-4 pr-12 pl-12 text-lg justify-between items-center gap-20">
        <div className="flex gap-20 justify-center items-center">
          <NavLink to="/">
            <h1>Home</h1>
          </NavLink>
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <h1>Store</h1>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/store">
                <h1>Store</h1>
              </NavLink>
            </>
          )}

          <NavLink to="/about">
            <h1>About</h1>
          </NavLink>
          <NavLink to="/login">
            <h1>LogIn</h1>
          </NavLink>
          <NavLink to="/contact-us">
            <h1>Contact Us</h1>
          </NavLink>
        </div>
        <div
          className="flex justify-center items-center border gap-2 p-1 pl-4 pr-4 rounded-md cursor-pointer"
          onClick={props.showCartContainer}
        >
          <h1>Cart</h1>
          <AiOutlineShoppingCart className=" text-2xl" />
          <h1 className=" text-2xl top-0 bg-teal-500 p-1 rounded-md">
            {CartItemsLength}
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
