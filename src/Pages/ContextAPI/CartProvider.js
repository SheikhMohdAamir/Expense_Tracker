import React from 'react'
import CartContext from './cart-context'
import { useState } from 'react'

const CartProvider = (props) => {
    const [token, setToken] = useState(null)
    const [data, setdata] = useState([])

    let isLoggedIn = !!token

    const loginHandler = (id) => {
        setToken(id)
        localStorage.setItem('token', id)
    }
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }
    const dataHandler = (d) => {
        setdata([...data,d])
        console.log(data)
    }

    const cartContext = {
        token:token,
        login:isLoggedIn,
        loginHandler:loginHandler,
        logoutHandler:logoutHandler,
        data:data,
        dataHandler:dataHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
