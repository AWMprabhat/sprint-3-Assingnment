import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

const Wishlist = () => {
  const {counter} = useContext(CartContext);
  return (
    <div>Wishlist: {counter}</div>
  )
}

export default Wishlist