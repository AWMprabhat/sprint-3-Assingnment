import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProducts(d);
    };
    fetchProducts();
  }, []);
  
  const navigate = useNavigate();
  const handleOnClick = (prId) => {
    for(let i=0 ; i < products.length; i++) {
        if(prId == products[i].id) {
            navigate(`/products/${prId}`);
            break;
        } else {
            navigate(`/Error`);
        }
    }
  };
  const [value, setValue] = useState();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <input
        type="number"
        placeholder="Enter product id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleOnClick(value)}>Jump to product</button>
    </div>
  );
};

export default Navbar;
