import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import Cart from './Cart'

const Product = () => {
  const {isAuthorized} = useContext(AuthContext);
  return (
    <div>Product : {isAuthorized?"LoggedIn":"LoggedOut"}
      <Cart />
    </div>
  )
}

export default Product