import React from 'react'
import CartContext from './cart-context'
import { useState } from 'react'

const CartProvider = (props) => {
    const [token, setToken] = useState(null)
    const [edit, setEdit] = useState(false)
    const [editToken, setEditToken] = useState('')

    let isLoggedIn = !!token

    const loginHandler = (id) => {
        setToken(id)
        localStorage.setItem('token', id)
    }
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }
    const editHandler = (id) => {
        setEdit(true)
        setEditToken(id)

    }

    const cartContext = {
        token:token,
        login:isLoggedIn,
        loginHandler:loginHandler,
        logoutHandler:logoutHandler,
        edit:edit,
        editHandler:editHandler,
        editToken:editToken,

    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
