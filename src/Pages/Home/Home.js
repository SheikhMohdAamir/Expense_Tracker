import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import CartContext from '../ContextAPI/cart-context'
import Hform from './Hcomponenets/Hform'
import Itemlist from './Hcomponenets/Itemlist'

const Home = () => {

  const api = useContext(CartContext)
  const idToken = api.token

  const emailVerificationHandler = async() => {
      try{
        const resolve = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBvPlrcP-qrxgVmLiysw_vxDD-3g1jj1W8',{requestType:"VERIFY_EMAIL", idToken:idToken})
        const data = resolve.data
        console.log('In Home',data)
        alert('Email Verification link Sent Successfully!')
      }
      catch(error){
        alert('Authentication Failed')
      }
  }
  const logoutHandler = () =>{
      api.logoutHandler()
  }

  return (
    <div >
      <nav className="navbar" style={{backgroundColor:'#6f42c1',color:'white'}}>
        <div className="container-fluid">
          <h3>Welcome to Expense Tracker! </h3>
          
          <button type="button" className="btn btn-outline-light"  onClick={emailVerificationHandler}>Verify Your Email</button>
          <button type="button" className="btn btn-outline-light"  onClick={logoutHandler}>Logout</button>
        </div>
      </nav>
      <div className='container-fluid'>
        <p>Your Profile Is Incomplete!<NavLink to='/profile'>Complete Now</NavLink></p>
      </div>

      <Hform />
      <Itemlist />
    
    </div>
  )
}

export default Home
