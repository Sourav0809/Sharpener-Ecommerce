/* eslint-disable react/prop-types */
const Products = (props) => {
  return (
    <div className="p-3 flex-col h-2/5 w-2/5">
      <div className=" flex justify-center items-center">
        <img src={props.img} />
      </div>
      <h2 className="text-center text-2xl">{props.title}</h2>
      <div className="flex p-8 justify-center items-center gap-16">
        <h3 className=" text-2xl text-black font-bold">${props.price}</h3>
        <button className=" bg-cyan-800 text-white p-2 rounded-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
