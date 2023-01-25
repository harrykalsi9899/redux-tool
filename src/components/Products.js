import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();

    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h1>loading ....</h1>;
  }
  if (status === STATUSES.ERROR) {
    return <h1>something went wrong</h1>;
  }

  return (
    <div className="productsWrapper">
      {products.map((prod) => (
        <div className="card" key={prod.id}>
          <img src={prod.image}></img>
          <h4>{prod.title}</h4>
          <h5>{prod.rice}</h5>
          <button className="btn" onClick={() => handleAdd(prod)}>
            {" "}
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
