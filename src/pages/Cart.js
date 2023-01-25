import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((prod) => (
          <div className="cartCard" key={prod.id}>
            <img src={prod.image} alt="" />
            <h5>{prod.title}</h5>
            <h5>{prod.price}</h5>
            <button className="btn" onClick={() => dispatch(remove(prod.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
