const Cart = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h1>{props.price}</h1>
      <h1>{props.quantity}</h1>
      <img src={props.img} />
    </>
  );
};

export default Cart;
