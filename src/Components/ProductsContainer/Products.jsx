/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext";

const Products = (props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const CartCtx = useContext(CartContext);

  const foundedCartItem = CartCtx.cartItems.find((val) => {
    return val.id === props.title;
  });

  useEffect(() => {
    if (foundedCartItem) {
      setQuantity(foundedCartItem.quantity);
    }
  }, [foundedCartItem]);

  const addItemHandeler = (e) => {
    e.stopPropagation();
    const addedCartItem = {
      title: props.title,
      price: props.price,
      quantity: quantity + 1,
      img: props.img,
      id: props.title,
    };
    CartCtx.addToCart(addedCartItem, setQuantity);
    // toast.success("Product Added ");
  };

  const onclickedProductHandeler = (e) => {
    e.stopPropagation();
    navigate(`/product-details/${props.title}`);
  };

  return (
    <div
      onClick={onclickedProductHandeler}
      className="p-3 flex-col h-2/5 w-2/5"
    >
      <div className=" flex justify-center items-center">
        <img className=" w-60 h-64" src={props.img} />
      </div>
      <h2 className="text-center p-3 text-xl">{props.title}</h2>
      <div className="flex p-3 justify-center items-center gap-12">
        <h3 className=" text-2xl text-black font-bold">${props.price}</h3>
        <button
          onClick={addItemHandeler}
          className=" bg-cyan-800 text-white p-2 rounded-md"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
