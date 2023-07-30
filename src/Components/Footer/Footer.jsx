import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className=" bg-sky-400 text-white p-2 rounded-md ">
          See The Cart
        </button>
      </div>
      <footer className=" mt-7 bg-cyan-700 p-6 flex items-center justify-around text-white text-3xl ">
        <h1>The Generics</h1>
        <div className="flex justify-center items-center gap-10">
          <BsYoutube />
          <FaFacebookSquare />
          <BsSpotify />
        </div>
      </footer>
    </>
  );
};

export default Footer;
