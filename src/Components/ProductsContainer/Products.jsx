/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../Store/CartContext";
const Products = (props) => {
  const CartCtx = useContext(CartContext);

  const addItemHandeler = () => {
    const addedCartItem = {
      title: props.title,
      price: props.price,
      quantity: 1,
      img: props.img,
      id: props.title,
    };
    CartCtx.addToCart(addedCartItem);
  };

  return (
    <div className="p-3 flex-col h-2/5 w-2/5">
      <div className=" flex justify-center items-center">
        <img src={props.img} />
      </div>
      <h2 className="text-center text-2xl">{props.title}</h2>
      <div className="flex p-8 justify-center items-center gap-16">
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
