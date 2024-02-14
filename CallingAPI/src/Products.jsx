import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products" key={product.id}>
      {products.map((product, index) => {
        return (
          <div className="product" key={index}>
            <img className="p-image" src={product.image} alt="" />
            <h2 className="p-title">{product.title}</h2>
            <h2>{product.price}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
