import Products from "./Products";
import DummyProduct from "../../assets/DummyProduct";
import Card from "../Card/Card";
const ProductsContainer = () => {
  return (
    <>
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
