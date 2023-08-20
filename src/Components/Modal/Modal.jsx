/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import { BsFillCartFill } from "react-icons/bs";
const Overlay = (props) => {
  return (
    <div className=" scrollbar-hidden overflow-scroll fixed rounded-lg top-10 bg-white p-6 shadow-md text-2xl right-0 w-1/3 mt-[50px] h-[calc(100vh-100px)] ">
      <div className=" flex items-center justify-center gap-2">
        <h1>My Cart</h1>
        <BsFillCartFill className=" text-2xl text-sky-600" />
      </div>
      <div className=" flex justify-around items-center gap-22 mt-2">
        <h1 className=" border-b-4 border-indigo-600 ml-8 pl-4 pr-4">ITEM</h1>
        <h1 className=" border-b-4 border-indigo-600 ml-24 pl-4 pr-4">PRICE</h1>
        <h1 className=" border-b-4 border-indigo-600  pl-4 pr-4">QUANTITY</h1>
      </div>
      {props.children}
    </div>
  );
};

const overlayContainer = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        overlayContainer
      )}
    </>
  );
};
export default Modal;
