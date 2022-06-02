import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={() => addToCart(1)}>Add To Cart</button>
    </div>
  );
};

export default Cart;
