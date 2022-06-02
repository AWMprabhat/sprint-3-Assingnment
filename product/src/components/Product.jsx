import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }
  }, [id]);
  return <div>
      Product Id : {id} 
      <div>
          {product.name}
      </div>
  </div>;
};

export default Product;
