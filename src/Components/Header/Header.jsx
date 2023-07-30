/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <>
      <header className=" sticky top-0 left-0 flex bg-black text-white p-4 text-lg justify-center items-center gap-20">
        <h1>HOME</h1>
        <h1>STORE</h1>
        <h1>ABOUT</h1>
        <button
          onClick={props.showCartContainer}
          className="absolute right-14 border p-1 rounded-md"
        >
          CART
        </button>
      </header>

      <section className="flex justify-center items-center bg-gray-600 text-white mt-1 p-20 text-8xl">
        <h1>The Generics</h1>
      </section>
    </>
  );
};

export default Header;
