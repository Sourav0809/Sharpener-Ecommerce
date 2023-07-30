/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="flex mt-12 justify-center items-center">
      <div className=" w-9/12 p-5 flex flex-wrap justify-center items-center gap-4 ">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
