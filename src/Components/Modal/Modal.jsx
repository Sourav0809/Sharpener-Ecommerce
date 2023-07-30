/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";

const Overlay = (props) => {
  console.log(props.children);
  return (
    <div className=" scrollbar-hidden overflow-scroll fixed rounded-lg top-2 bg-white p-6 shadow-md text-2xl right-5 w-1/3 mt-[58px] h-[calc(100vh-100px)] ">
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
