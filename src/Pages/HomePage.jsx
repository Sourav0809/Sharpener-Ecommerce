import { AiOutlinePlayCircle } from "react-icons/ai";

function HomePage() {
  return (
    <>
      {/* -------------------------------------------------------------------------- */
      /*                                cover section                               */
      /* -------------------------------------------------------------------------- */}
      <div className=" p-14 mt-2 font-serif flex flex-col justify-center items-center gap-4 bg-gray-500 text-white">
        <h1 className=" text-9xl">The Generics</h1>
        <h1 className=" text-4xl border border-cyan-400 p-3 rounded-md">
          Get Our Latest Album
        </h1>
        <div>
          <AiOutlinePlayCircle className=" text-8xl text-cyan-500" />
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                                Body section                                */
      /* -------------------------------------------------------------------------- */}

      <div>
        <h1 className=" text-center font-serif text-4xl mt-5">Tours</h1>
      </div>

      <div className=" mt-5 mb-10 ml-auto mr-auto min-[600px]:w-[60rem] min-[320px]: w-full border-2 rounded-md border-cyan-400 p-4">
        <div className=" flex p-2 justify-around items-center border-b-2  border-black">
          <h1>JULY 16</h1>
          <h1>DETROIT, MI</h1>
          <h1>DTE ENERGY MUSIC THEATRE</h1>
          <button className=" bg-cyan-500 pr-6 pl-6 pt-2 pb-2 rounded-md text-white">
            BUY TICKETS
          </button>
        </div>
        <div className=" flex p-2 justify-around items-center border-b-2 border-black">
          <h1>JULY 17</h1>
          <h1>DETROIT, MI</h1>
          <h1>DTE ENERGY MUSIC THEATRE</h1>
          <button className=" bg-cyan-500 pr-6 pl-6 pt-2 pb-2 rounded-md text-white">
            BUY TICKETS
          </button>
        </div>
        <div className=" flex p-2 justify-around items-center border-b-2 border-black">
          <h1>MAR 18</h1>
          <h1>DETROIT, MI</h1>
          <h1>DTE ENERGY MUSIC THEATRE</h1>
          <button className=" bg-cyan-500 pr-6 pl-6 pt-2 pb-2 rounded-md text-white">
            BUY TICKETS
          </button>
        </div>
        <div className=" flex p-2 justify-around items-center border-b-2 border-black">
          <h1>SEP 19</h1>
          <h1>DETROIT, MI</h1>
          <h1>DTE ENERGY MUSIC THEATRE</h1>
          <button className=" bg-cyan-500 pr-6 pl-6 pt-2 pb-2 rounded-md text-white">
            BUY TICKETS
          </button>
        </div>
        <div className=" flex p-2 justify-around items-center border-b-2 border-black">
          <h1>AUG 20</h1>
          <h1>DETROIT, MI</h1>
          <h1>DTE ENERGY MUSIC THEATRE</h1>
          <button
            className=" bg-cyan-500 pr-6 pl-6 pt-2 pb-2
            rounded-md
            text-white"
          >
            BUY TICKETS
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
