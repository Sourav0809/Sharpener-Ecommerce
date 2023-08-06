import Products from "./Products";
import DummyProduct from "../../assets/DummyProduct";
import Card from "../Card/Card";
const ProductsContainer = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-gray-600 text-white mt-1 p-20 text-8xl">
        <h1>The Generics</h1>
      </section>
      <Card>
        {DummyProduct.map((items) => {
          return (
            <Products
              key={items.title}
              title={items.title}
              name={items.name}
              price={items.price}
              img={items.imageUrl}
            />
          );
        })}
      </Card>
    </>
  );
};

export default ProductsContainer;
