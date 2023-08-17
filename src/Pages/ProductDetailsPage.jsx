import { AiTwotoneStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import DummyProduct from "../assets/DummyProduct";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductDetailsPage() {
  const { id } = useParams();
  let alreadyPresent = false;
  return (
    <div>
      {DummyProduct.map((products) => {
        if (products.title === id) {
          alreadyPresent = true;
          return (
            <div
              key={products.title}
              className=" mt-6 mb-10 flex border-2 p-6 w-[70rem] min-[340px]:w-[90%]  max-[650px]:w-[99%] min-[650px]:w-[80rem] m-auto"
            >
              <div className=" w-[40%]">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <img src={products.imageUrl} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={products.imageUrl} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={products.imageUrl} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={products.imageUrl} />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className=" mt-5 flex flex-col gap-3">
                <h1 className=" text-[2.1rem] font-bold">
                  {products.title}
                  <span> ({products.color})</span>
                </h1>
                <h1 className=" text-3xl ml-1 font-semibold">
                  ${products.price}
                </h1>

                <div className=" flex p-4 gap-3 justify-start items-center text-xl">
                  <h1 className="flex gap-1 justify-center items-center text-cyan-800 ">
                    <span>Rating </span>
                    <span>{products.ratings} </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>Out Of 5</span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                  </h1>
                </div>

                <button className=" bg-cyan-600 text-white p-2 w-[30%] rounded-md">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        }
      })}
      {!alreadyPresent && (
        <h1 className=" text-3xl text-center p-10">No Products Found</h1>
      )}
    </div>
  );
}

export default ProductDetailsPage;
