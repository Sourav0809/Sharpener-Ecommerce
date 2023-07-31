/* eslint-disable react/prop-types */
const Cart = (props) => {
  return (
    <>
      <div className="mt-5 flex item-center justify-center gap-20">
        <div className=" flex justify-center items-center gap-2 ">
          <img src={props.img} className=" w-[100px] h-[100px]" />
          <h1>{props.title}</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1>{props.price}</h1>
        </div>

        <div className="flex justify-center items-center gap-3 ">
          <h1>{props.quantity}</h1>
          <button className=" bg-red-500 text-white p-1 rounded-md text-lg">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
