import React from 'react'
import CartContext from './cart-context'
import { useState } from 'react'

const CartProvider = (props) => {
    const [token, setToken] = useState(null)

    let isLoggedIn = !!token

    const loginHandler = (id) => {
        setToken(id)
        localStorage.setItem('token', id)
    }
    

    const cartContext = {
        token:token,
        login:isLoggedIn,
        loginHandler:loginHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
